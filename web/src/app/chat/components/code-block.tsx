"use client";

import { Eye, File, FileCode, Folder, FolderOpen, LayoutTemplate, Loader2, Code2, ChevronsLeft, ChevronsRight } from "lucide-react";
import React, { useEffect, useMemo, useState, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import { ScrollContainer } from "~/components/deer-flow/scroll-container";
import { Tooltip } from "~/components/deer-flow/tooltip";
import { useToolCalls, useStore } from "~/core/store";
import { cn } from "~/lib/utils";

// Custom theme to match the user's screenshot style (Red headers, Orange bold)
const customTheme = {
  ...vscDarkPlus,
  // Markdown specific overrides
  'code[class*="language-markdown"]': {
    ...vscDarkPlus['code[class*="language-markdown"]'],
    color: '#d4d4d4', // Default text color
  },
  'comment': { color: '#6a9955' },
  'doctype': { color: '#6a9955' },
  
  // Headers -> Redish/Pink
  'title': { color: '#f97583' }, // h1, h2...
  'section': { color: '#f97583' },
  'selector-id': { color: '#f97583' }, 

  // Bold/Strong -> Orange
  'strong': { color: '#ff9f43', fontWeight: 'bold' },
  'emphasis': { color: '#ff9f43', fontStyle: 'italic' },
  
  // List bullets -> Blueish/Cyan usually, but let's keep them distinctive
  'bullet': { color: '#569cd6' },
  'list': { color: '#d4d4d4' },
  
  // Links
  'url': { color: '#9cdcfe', textDecoration: 'underline' },
  'link': { color: '#9cdcfe' },

  // Code blocks in markdown
  'code': { color: '#ce9178' },
  
  // Strings
  'string': { color: '#ce9178' },
  
  // Numbers
  'number': { color: '#b5cea8' },
};

interface FileNode {
  name: string;
  path: string;
  type: "file" | "directory";
  content?: string;
  children?: Record<string, FileNode>;
}

interface CodeBlockProps {
  className?: string;
  isSidebarCollapsed?: boolean;
  onToggleSidebar?: () => void;
}

export function CodeBlock({ className, isSidebarCollapsed, onToggleSidebar }: CodeBlockProps) {
  const toolCalls = useToolCalls();
  const [selectedFile, setSelectedFile] = useState<string | null>("outline.md");
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(["root"]),
  );
  const [viewMode, setViewMode] = useState<"code" | "preview">("code");
  const responding = useStore((state) => state.responding);
  const prevResponding = useRef(responding);

  // Extract project number from tool calls to build preview URL
  const projectNumber = useMemo(() => {
    if (!toolCalls) return null;
    for (const call of toolCalls) {
      if (call.name === "write_file_tool" && call.args) {
        const args = call.args as { project_num?: string };
        if (args.project_num) return args.project_num;
      }
      if (call.name === "batch_download_images_tool" && call.args) {
          const args = call.args as { project_num?: string };
          if (args.project_num) return args.project_num;
      }
      if (call.artifact && (call.artifact as any).project_num) {
          return (call.artifact as any).project_num;
      }
    }
    return null;
  }, [toolCalls]);

  // Auto-switch to preview when responding finishes and we have a project number
  useEffect(() => {
    if (prevResponding.current && !responding && projectNumber) {
        setViewMode("preview");
    }
    prevResponding.current = responding;
  }, [responding, projectNumber]);

  // Determine current step/status based on tool calls
  const status = useMemo(() => {
    if (!toolCalls || toolCalls.length === 0) return "Waiting to start...";
    const lastTool = toolCalls[toolCalls.length - 1];
    if (!lastTool) return "Processing...";
    
    if (lastTool.name === "write_file_tool") {
        const args = lastTool.args as { file_name: string } || parsePartialArgs(lastTool.argsChunks);
        return `Writing ${args.file_name || "file"}...`;
    }
    if (lastTool.name === "batch_download_images_tool") return "Downloading resources...";
    return "Processing...";
  }, [toolCalls]);

  const files = useMemo(() => {
    const root: FileNode = {
      name: "root",
      path: "",
      type: "directory",
      children: {},
    };

    toolCalls?.forEach((toolCall) => {
      if (toolCall.name === "write_file_tool") {
        let args = toolCall.args as { file_name: string; content: string };
        
        // Try to parse from chunks if args is not fully available
        if ((!args || !args.content) && toolCall.argsChunks) {
            args = parsePartialArgs(toolCall.argsChunks) as { file_name: string; content: string };
        }

        if (args && args.file_name && args.content) {
          const parts = args.file_name.split("/");
          let current = root;
          let currentPath = "";

          parts.forEach((part, index) => {
            const isFile = index === parts.length - 1;
            currentPath = currentPath ? `${currentPath}/${part}` : part;

            if (!current.children) current.children = {};

            if (!current.children[part]) {
              current.children[part] = {
                name: part,
                path: currentPath,
                type: isFile ? "file" : "directory",
                children: isFile ? undefined : {},
              };
            }

            if (isFile) {
              current.children[part]!.content = args.content;
            } else {
              current = current.children[part]!;
            }
          });
        }
      }
    });

    return root;
  }, [toolCalls]);

  const handleFileClick = (file: FileNode) => {
    if (file.type === "directory") {
      const newExpanded = new Set(expandedFolders);
      if (newExpanded.has(file.path)) {
        newExpanded.delete(file.path);
      } else {
        newExpanded.add(file.path);
      }
      setExpandedFolders(newExpanded);
    } else {
      setSelectedFile(file.path);
      // When clicking a file, switch back to code view if in preview
      // setViewMode("code"); // Optional: user might want to stay in preview
    }
  };

  const selectedFileContent = useMemo(() => {
    if (!selectedFile) return null;
    const parts = selectedFile.split("/");
    let current = files;
    for (const part of parts) {
      if (current.children && current.children[part]) {
        current = current.children[part]!;
      } else {
        return null;
      }
    }
    return current.content;
  }, [files, selectedFile]);

  const renderTree = (node: FileNode, level = 0) => {
    if (!node.children) return null;

    return (
      <ul className={cn("w-full space-y-0.5", level > 0 && "pl-3")}>
        {Object.values(node.children)
            .sort((a, b) => {
                if (a.type === b.type) return a.name.localeCompare(b.name);
                return a.type === "directory" ? -1 : 1;
            })
            .map((child) => (
          <li key={child.path}>
            <button
              className={cn(
                "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-xs transition-colors",
                selectedFile === child.path && child.type === "file" 
                  ? "bg-white/10 text-white font-medium" 
                  : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200",
              )}
              onClick={() => handleFileClick(child)}
            >
              {child.type === "directory" ? (
                expandedFolders.has(child.path) ? (
                  <FolderOpen size={14} className="text-zinc-500" />
                ) : (
                  <Folder size={14} className="text-zinc-500" />
                )
              ) : child.name === "outline.md" ? (
                <LayoutTemplate size={14} className="text-orange-400" />
              ) : (
                <FileCode size={14} className="text-emerald-400" />
              )}
              <span className="truncate">{child.name}</span>
            </button>
            {child.type === "directory" &&
              expandedFolders.has(child.path) &&
              renderTree(child, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={cn("h-full w-full bg-card rounded-xl border border-border overflow-hidden shadow-2xl flex flex-col", className)}>
      {/* Window Header */}
      <div className="flex items-center justify-between bg-muted/50 border-b border-border px-4 py-3 shrink-0">
        <div className="flex items-center gap-4">
            {/* Collapse Button & View Toggles */}
            <div className="flex items-center bg-background rounded-lg p-0.5 border border-border">
                {onToggleSidebar && (
                    <Tooltip title={isSidebarCollapsed ? "Expand Chat" : "Collapse Chat"} side="bottom" sideOffset={10}>
                        <button
                            onClick={onToggleSidebar}
                            className="p-1.5 rounded-md transition-all flex items-center gap-2 text-muted-foreground hover:text-foreground hover:bg-muted"
                        >
                            {isSidebarCollapsed ? <ChevronsRight size={14} /> : <ChevronsLeft size={14} />}
                        </button>
                    </Tooltip>
                )}
                
                <div className="w-[1px] h-4 bg-border mx-1" />

                <Tooltip title="Code" side="bottom" sideOffset={10}>
                    <button
                        onClick={() => setViewMode("code")}
                        className={cn(
                            "p-1.5 rounded-md transition-all flex items-center gap-2",
                            viewMode === "code" 
                                ? "bg-muted text-foreground shadow-sm" 
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        <Code2 size={14} />
                    </button>
                </Tooltip>
                <Tooltip title="Preview" side="bottom" sideOffset={10}>
                    <button
                        onClick={() => setViewMode("preview")}
                        disabled={!projectNumber}
                        className={cn(
                            "p-1.5 rounded-md transition-all flex items-center gap-2",
                            viewMode === "preview" 
                                ? "bg-muted text-foreground shadow-sm" 
                                : "text-muted-foreground hover:text-foreground",
                            !projectNumber && "opacity-50 cursor-not-allowed"
                        )}
                    >
                        <Eye size={14} />
                    </button>
                </Tooltip>
            </div>
        </div>

        <div className="flex items-center gap-3">
            <div className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                {responding && <Loader2 className="h-3 w-3 animate-spin" />}
                {responding ? status : "Idle"}
            </div>
        </div>
      </div>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (Only visible in Code mode) */}
        {viewMode === "code" && (
            <div className="w-64 shrink-0 bg-muted/30 border-r border-border flex flex-col">
            <div className="px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Explorer
            </div>
            <div className="flex-1 overflow-y-auto px-2 pb-4">
                {renderTree(files)}
            </div>
            </div>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden bg-card">
           
           {viewMode === "code" ? (
               <>
                {/* File Tab Bar */}
                {selectedFile && (
                    <div className="flex items-center border-b border-border bg-background">
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-card border-r border-border text-xs text-foreground font-medium border-t-2 border-t-blue-500">
                        {selectedFile.endsWith('.md') ? <LayoutTemplate size={14} className="text-orange-400"/> : <FileCode size={14} className="text-emerald-400"/>}
                        {selectedFile.split('/').pop()}
                    </div>
                    <div className="px-3 text-xs text-muted-foreground font-mono">
                        {selectedFile}
                    </div>
                    </div>
                )}

                {/* Editor Area */}
                <div className="flex-1 overflow-hidden relative">
                    {selectedFileContent ? (
                    <ScrollContainer className="h-full w-full">
                        <div className="h-full w-full">
                        <SyntaxHighlighter
                            language={selectedFile?.split('.').pop() || 'text'}
                            style={customTheme}
                            customStyle={{
                                margin: 0,
                                padding: '1.5rem',
                                height: '100%',
                                fontSize: '14px',
                                backgroundColor: 'transparent',
                            }}
                            showLineNumbers={true}
                            lineNumberStyle={{
                                minWidth: '2em',
                                paddingRight: '1em',
                                color: '#6e7681',
                                textAlign: 'right',
                            }}
                            wrapLines={true}
                        >
                            {selectedFileContent}
                        </SyntaxHighlighter>
                        </div>
                    </ScrollContainer>
                    ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center text-muted-foreground gap-4">
                        <div className="h-16 w-16 rounded-xl bg-muted border border-border flex items-center justify-center">
                            <FileCode size={32} className="text-muted-foreground/50" />
                        </div>
                        <div className="text-sm">Select a file to view content</div>
                    </div>
                    )}
                </div>
               </>
           ) : (
               /* Preview Area */
               <div className="h-full w-full bg-background">
                   {projectNumber ? (
                       <iframe 
                           src={`http://localhost:8001/api/preview/project_${projectNumber}/index.html`}
                           className="w-full h-full border-none"
                           title="Website Preview"
                       />
                   ) : (
                       <div className="flex h-full w-full items-center justify-center text-muted-foreground flex-col gap-4 bg-muted/10">
                           <Loader2 className="animate-spin" />
                           <p>Waiting for project generation...</p>
                       </div>
                   )}
               </div>
           )}
        </div>
      </div>
    </div>
  );
}

function parsePartialArgs(chunks: string[] | undefined) {
    if (!chunks || chunks.length === 0) return {};
    const jsonStr = chunks.join("");
    try {
      return JSON.parse(jsonStr);
    } catch {
      // Continue to heuristic parsing
    }
  
    const result: Record<string, any> = {};
    
    // Extract filename
    // Support both "file_name" and "filename"
    const filenameMatch = jsonStr.match(/"file_name"\s*:\s*"([^"]+)"/) || jsonStr.match(/"filename"\s*:\s*"([^"]+)"/);
    if (filenameMatch) {
      result.file_name = filenameMatch[1];
    }
  
    // Extract content
    const contentStartRegex = /"content"\s*:\s*"/;
    const match = contentStartRegex.exec(jsonStr);
    if (match) {
      const startIndex = match.index + match[0].length;
      let rawContent = jsonStr.slice(startIndex);
      
      // Very basic unescaping for display purposes
      // Remove potential trailing backslash from incomplete escape
      if (rawContent.endsWith('\\')) {
          rawContent = rawContent.slice(0, -1);
      }

      let content = rawContent
          .replace(/\\n/g, '\n')
          .replace(/\\"/g, '"')
          .replace(/\\\\/g, '\\')
          .replace(/\\t/g, '\t');
      
      // Strip markdown code block markers from the preview
      // 1. Remove opening ```tag
      if (content.trimStart().startsWith('```')) {
          const newlineIndex = content.indexOf('\n');
          if (newlineIndex !== -1) {
              content = content.slice(newlineIndex + 1);
          } else {
              // If we only have the first line (e.g. "```mark"), show nothing yet or show it as is?
              // Better to show nothing until we have content
              content = "";
          }
      }
      
      // 2. Remove closing ``` (only if it looks like a closing tag at the end)
      // Note: In streaming, we might just see "``" at the end, which we can't safely remove yet.
      if (content.trimEnd().endsWith('```')) {
           const lastIndex = content.lastIndexOf('```');
           if (lastIndex !== -1) {
               // Check if it's on its own line or preceded by newline
               const prevChar = content[lastIndex - 1];
               if (!prevChar || prevChar === '\n') {
                   content = content.slice(0, lastIndex).trimEnd();
               }
           }
      }

      result.content = content;
    }
    
    return result;
  }
