// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

"use client";

import { 
  FileJson, 
  FileCode, 
  Folder, 
  FolderOpen, 
  ChevronRight, 
  ChevronDown,
  Settings,
  Download,
  Share,
  Maximize2,
  Minimize2,
  Eye,
  Code2,
  MousePointer2,
  X,
  RotateCw
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { useToolCalls, useStore } from "~/core/store";
import { env } from "~/env";

interface FileNode {
  name: string;
  type: "file" | "directory";
  children?: FileNode[];
  path?: string; // Added manually for easy access
}

interface SelectedElementInfo {
  tagName: string;
  id: string;
  className: string;
  innerText: string;
  outerHTML: string;
  path?: string; // Source file path
}

function findFirstFile(nodes: FileNode[], currentPath = ""): { node: FileNode, path: string } | null {
  for (const node of nodes) {
    const fullPath = currentPath ? `${currentPath}/${node.name}` : node.name;
    if (node.type === 'file') {
      return { node, path: fullPath };
    }
    if (node.children) {
      const found = findFirstFile(node.children, fullPath);
      if (found) return found;
    }
  }
  return null;
}

const isImageFile = (name: string) => {
  return /\.(jpg|jpeg|png|gif|svg|webp|ico|bmp)$/i.test(name);
};

const getLanguageFromFilename = (name: string) => {
  const ext = name.split('.').pop()?.toLowerCase();
  switch (ext) {
    case 'js': return 'javascript';
    case 'jsx': return 'jsx';
    case 'ts': return 'typescript';
    case 'tsx': return 'tsx';
    case 'html': return 'html';
    case 'css': return 'css';
    case 'json': return 'json';
    case 'md': return 'markdown';
    case 'py': return 'python';
    case 'yml':
    case 'yaml': return 'yaml';
    default: return 'text';
  }
};

const inspectorScript = `
(function() {
  let active = false;
  let hoveredElement = null;

  function handleMouseOver(e) {
    if (!active) return;
    e.stopPropagation();
    e.preventDefault();
    
    if (hoveredElement) {
      hoveredElement.style.outline = '';
    }
    
    hoveredElement = e.target;
    hoveredElement.style.outline = '2px solid #3b82f6';
    hoveredElement.style.cursor = 'crosshair';
  }

  function handleMouseOut(e) {
    if (!active) return;
    e.stopPropagation();
    e.preventDefault();
    if (e.target) {
      e.target.style.outline = '';
    }
  }

  function handleClick(e) {
    if (!active) return;
    e.stopPropagation();
    e.preventDefault();
    
    if (e.target) {
      const el = e.target;
      const info = {
        tagName: el.tagName.toLowerCase(),
        id: el.id,
        className: el.className,
        innerText: el.innerText.substring(0, 50),
        outerHTML: el.outerHTML
      };
      
      window.parent.postMessage({ type: 'element-selected', payload: info }, '*');
      
      // Optional: Disable inspector after selection
      // active = false;
      // if (hoveredElement) hoveredElement.style.outline = '';
    }
  }

  window.addEventListener('message', (e) => {
    if (e.data.type === 'toggle-inspector') {
      active = e.data.active;
      if (!active && hoveredElement) {
        hoveredElement.style.outline = '';
        hoveredElement = null;
      }
    }
  });

  document.addEventListener('mouseover', handleMouseOver, true);
  document.addEventListener('mouseout', handleMouseOut, true);
  document.addEventListener('click', handleClick, true);
})();
`;

const FileTreeItem = ({ 
  node, 
  depth = 0, 
  onFileClick, 
  expandedPaths, 
  toggleExpand,
  currentPath 
}: { 
  node: FileNode, 
  depth: number, 
  onFileClick: (node: FileNode) => void, 
  expandedPaths: Set<string>, 
  toggleExpand: (path: string) => void,
  currentPath: string
}) => {
  const fullPath = currentPath ? `${currentPath}/${node.name}` : node.name;
  const isExpanded = expandedPaths.has(fullPath);
  const paddingLeft = `${depth * 12 + 8}px`;

  if (node.type === "directory") {
    return (
      <div>
        <div 
          className="flex cursor-pointer items-center gap-1 rounded px-2 py-1 text-sm hover:bg-white/5 text-gray-400 hover:text-white"
          style={{ paddingLeft }}
          onClick={() => toggleExpand(fullPath)}
        >
          {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          {isExpanded ? <FolderOpen size={14} className="text-blue-400" /> : <Folder size={14} />}
          <span className="truncate">{node.name}</span>
        </div>
        {isExpanded && node.children && (
          <div>
            {node.children.map((child) => (
              <FileTreeItem 
                key={child.name} 
                node={child} 
                depth={depth + 1} 
                onFileClick={onFileClick} 
                expandedPaths={expandedPaths}
                toggleExpand={toggleExpand}
                currentPath={fullPath}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      className="flex cursor-pointer items-center gap-1 rounded px-2 py-1 text-sm hover:bg-white/5 text-gray-400 hover:text-white"
      style={{ paddingLeft }}
      onClick={() => onFileClick({ ...node, path: fullPath })}
    >
      <span className="w-[14px]" />
      <FileCode size={14} />
      <span className="truncate">{node.name}</span>
    </div>
  );
};

export function IdeBlock({ className, projectId }: { className?: string, projectId?: string | null }) {
  const [projectNum, setProjectNum] = useState<string | null>(projectId || null);
  const [files, setFiles] = useState<FileNode[]>([]);
  const [activeFile, setActiveFile] = useState<{name: string, content: string, path: string, isImage?: boolean} | null>(null);
  const [isMaximized, setIsMaximized] = useState(false);
  const [viewMode, setViewMode] = useState<'code' | 'preview'>('code');
  const [expandedPaths, setExpandedPaths] = useState<Set<string>>(new Set());
  const [previewRefreshKey, setPreviewRefreshKey] = useState(0);
  
  // Inspector States
  const [isInspecting, setIsInspecting] = useState(false);
  const [selectedElement, setSelectedElement] = useState<SelectedElementInfo | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const toolCalls = useToolCalls();
  const responding = useStore(state => state.responding);
  const setInputContent = useStore(state => state.setInputContent);
  const prevResponding = useRef(responding);

  // Helper: Find source file containing the HTML fragment
  const findSourceFile = async (htmlFragment: string) => {
    if (!htmlFragment || htmlFragment.length < 10) return null;
    
    // Normalize fragment (remove extra spaces/newlines)
    const normalizedFragment = htmlFragment.replace(/\s+/g, ' ').trim().substring(0, 100);
    
    // Search in HTML files
    const searchInNode = async (nodes: FileNode[], currentPath = ""): Promise<string | null> => {
      for (const node of nodes) {
        const fullPath = currentPath ? `${currentPath}/${node.name}` : node.name;
        if (node.type === 'file' && /\.(html|js|jsx|tsx)$/.test(node.name)) {
           try {
             const baseUrl = env.NEXT_PUBLIC_API_URL || 'http://localhost:8001/api';
             const res = await fetch(`${baseUrl}/preview/project_${projectNum}/${fullPath}`);
             const content = await res.text();
             // Simple inclusion check
             if (content.replace(/\s+/g, ' ').includes(normalizedFragment)) {
               return fullPath;
             }
           } catch (e) {}
        } else if (node.children) {
           const found = await searchInNode(node.children, fullPath);
           if (found) return found;
        }
      }
      return null;
    };
    
    return await searchInNode(files);
  };

  // Effect: Listen for element selection messages
  useEffect(() => {
    const handleMessage = async (e: MessageEvent) => {
      if (e.data.type === 'element-selected') {
        const info = e.data.payload as SelectedElementInfo;
        // Try to find source file
        if (projectNum && files.length > 0) {
           const path = await findSourceFile(info.outerHTML);
           if (path) info.path = path;
        }
        setSelectedElement(info);
        setIsInspecting(false); // Auto-exit inspector mode on selection
        // Notify iframe to stop inspection visual
        if (iframeRef.current?.contentWindow) {
           iframeRef.current.contentWindow.postMessage({ type: 'toggle-inspector', active: false }, '*');
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [files, projectNum]);

  // Effect: Fetch and process preview HTML to handle cross-origin script injection
  const [previewSrcDoc, setPreviewSrcDoc] = useState<string | null>(null);
  
  useEffect(() => {
    if (viewMode === 'preview' && projectNum) {
       const baseUrl = env.NEXT_PUBLIC_API_URL || 'http://localhost:8001/api';
       
       // Determine which file to preview
       let filePath = 'index.html';
       if (activeFile && activeFile.name.endsWith('.html')) {
         filePath = activeFile.path; // activeFile.path is relative to project root e.g. "articles.html" or "sub/page.html"
       }
       
       const url = `${baseUrl}/preview/project_${projectNum}/${filePath}?t=${Date.now()}`;
       
       fetch(url)
         .then(res => {
            if (!res.ok) throw new Error("Not found");
            return res.text();
         })
         .then(html => {
            // Inject base tag for relative assets
            // Ensure base href ends with / if it's a directory, or is the directory of the file
            // But here url is full file path. We want the directory.
            const lastSlash = url.lastIndexOf('/');
            const baseHref = url.substring(0, lastSlash + 1);
            
            const baseTag = `<base href="${baseHref}">`;
            // Inject inspector script
            const scriptTag = `<script>${inspectorScript}</script>`;
            
            // Insert base tag after head
            let processedHtml = html;
            if (processedHtml.includes('<head>')) {
               processedHtml = processedHtml.replace('<head>', `<head>${baseTag}`);
            } else {
               processedHtml = `<head>${baseTag}</head>${processedHtml}`;
            }
            
            // Insert script before body end
            if (processedHtml.includes('</body>')) {
               processedHtml = processedHtml.replace('</body>', `${scriptTag}</body>`);
            } else {
               processedHtml += scriptTag;
            }
            
            setPreviewSrcDoc(processedHtml);
         })
         .catch(() => {
            setPreviewSrcDoc(null);
         });
    } else {
      setPreviewSrcDoc(null);
    }
  }, [viewMode, projectNum, activeFile, previewRefreshKey]);

  const toggleInspector = () => {
    const newState = !isInspecting;
    setIsInspecting(newState);
    if (newState) setSelectedElement(null);
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage({ type: 'toggle-inspector', active: newState }, '*');
    }
  };

  const handleAddToChat = () => {
    if (!selectedElement) return;
    const msg = `我选中了元素：\`<${selectedElement.tagName} class="${selectedElement.className}">\`\n` +
                (selectedElement.path ? `位于文件：\`${selectedElement.path}\`\n` : "") +
                `内容：${selectedElement.innerText}\n` +
                `请修改这个元素...`;
    setInputContent(msg);
  };

  // Effect: Detect Project ID from tool calls if not provided
  useEffect(() => {
    if (projectId) {
      setProjectNum(projectId);
      return;
    }
    if (!toolCalls) return;
    
    for (const tc of toolCalls) {
      if (tc.name === 'write_file_tool' && tc.args) {
        try {
          const args = typeof tc.args === 'string' ? JSON.parse(tc.args) : tc.args;
          if (args.project_num) {
            setProjectNum(args.project_num);
            break; // Found it
          }
        } catch (e) {}
      }
    }
  }, [toolCalls, projectId]);

  // Effect: Poll file tree
  useEffect(() => {
    if (!projectNum) return;

    const fetchFiles = async () => {
      try {
        const baseUrl = env.NEXT_PUBLIC_API_URL || 'http://localhost:8001/api';
        const res = await fetch(`${baseUrl}/files/${projectNum}`);
        const data = await res.json();
        if (data.tree) {
          setFiles(data.tree);
        }
      } catch (e) {
        console.error("Failed to fetch file tree", e);
      }
    };

    fetchFiles(); // Initial fetch
    const interval = setInterval(fetchFiles, 2000); // Poll every 2s
    return () => clearInterval(interval);
  }, [projectNum]);

  // Effect: Auto-select first file if none selected
  useEffect(() => {
    if (files.length > 0 && !activeFile && viewMode === 'code') {
       const found = findFirstFile(files);
       if (found) {
         void handleFileClick({ ...found.node, path: found.path });
       }
    }
  }, [files, activeFile, viewMode]);

  // Effect: Auto-switch to preview only when responding finishes (falling edge)
  useEffect(() => {
    if (prevResponding.current && !responding && files.length > 0) {
        // Only switch if we have files and just finished responding
        setViewMode('preview');
        setPreviewRefreshKey((key) => key + 1);
    }
    prevResponding.current = responding;
  }, [responding, files.length]);

  const toggleExpand = (path: string) => {
    const newSet = new Set(expandedPaths);
    if (newSet.has(path)) {
      newSet.delete(path);
    } else {
      newSet.add(path);
    }
    setExpandedPaths(newSet);
  };

  const handleFileClick = async (node: FileNode) => {
    if (!projectNum || !node.path) return;
    
    const baseUrl = env.NEXT_PUBLIC_API_URL || 'http://localhost:8001/api';

    if (isImageFile(node.name)) {
       const imageUrl = `${baseUrl}/preview/project_${projectNum}/${node.path}`;
       setActiveFile({ name: node.name, content: imageUrl, path: node.path, isImage: true });
       return;
    }

    try {
      // Fetch content from static preview URL
      const res = await fetch(`${baseUrl}/preview/project_${projectNum}/${node.path}?t=${Date.now()}`);
      const text = await res.text();
      setActiveFile({ name: node.name, content: text, path: node.path, isImage: false });
    } catch (e) {
      console.error("Failed to fetch file content", e);
    }
  };
  const baseUrl = env.NEXT_PUBLIC_API_URL || 'http://localhost:8001/api';
  const previewUrl = projectNum ? `${baseUrl}/preview/project_${projectNum}/index.html?t=${previewRefreshKey}` : null;

  const handleDownloadProject = () => {
    if (!projectNum) return;
    const url = `${baseUrl}/download/${projectNum}`;

    // 使用原生 a 标签触发浏览器下载，避免额外依赖
    const link = document.createElement('a');
    link.href = url;
    link.download = `project_${projectNum}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className={cn(
        "flex h-full w-full flex-col bg-[#09090b] text-gray-300 border border-white/10 rounded-lg overflow-hidden transition-all duration-300", 
        isMaximized && "fixed inset-0 z-50 rounded-none border-0",
        className
      )}
    >
      {/* Header */}
      <div className="flex h-12 shrink-0 items-center justify-between border-b border-white/10 px-4 bg-[#09090b]">
        <div className="flex items-center gap-2">
          {/* View Toggles */}
          <div className="flex items-center rounded-md bg-white/5 p-1 gap-1">
             <Button
               variant="ghost" 
               size="sm"
               className={cn("h-7 px-3 text-xs gap-1.5", viewMode === 'preview' && "bg-white/10 text-white")}
               onClick={() => setViewMode('preview')}
             >
               <Eye size={14} />
               Preview
             </Button>
             <Button
               variant="ghost"
               size="sm" 
               className={cn("h-7 px-3 text-xs gap-1.5", viewMode === 'code' && "bg-white/10 text-white")}
               onClick={() => setViewMode('code')}
             >
               <Code2 size={14} />
               Code
             </Button>
             {viewMode === 'preview' && (
               <>
                 <Button
                   variant="ghost"
                   size="icon"
                   className={cn("h-7 w-7", isInspecting && "bg-blue-500/20 text-blue-400")}
                   onClick={toggleInspector}
                   title="Inspect Element"
                 >
                   <MousePointer2 size={14} />
                 </Button>
                 <Button
                   variant="ghost"
                   size="icon"
                   className="h-7 w-7 text-white/60 hover:text-white"
                   onClick={() => setPreviewRefreshKey((key) => key + 1)}
                   title="Refresh Preview"
                 >
                   <RotateCw size={14} />
                 </Button>
               </>
             )}
          </div>
          <span className="ml-4 font-medium text-sm text-white/70">
            {activeFile ? activeFile.name : (projectNum ? `Project #${projectNum}` : "No Project")}
          </span>
        </div>
        <div className="flex items-center gap-2">
           <Button 
             variant="ghost" 
             size="icon" 
             className="h-8 w-8 hover:bg-white/5 text-gray-400 hover:text-white"
             onClick={() => setIsMaximized(!isMaximized)}
           >
             {isMaximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
           </Button>
           <div className="h-4 w-[1px] bg-white/10 mx-1" />
           <button
             className="p-2 hover:bg-white/5 rounded text-gray-400 hover:text-white disabled:opacity-40 disabled:hover:bg-transparent"
             onClick={handleDownloadProject}
             disabled={!projectNum}
             title={projectNum ? `Download project_${projectNum}` : 'No project to download'}
           >
             <Download size={16} />
           </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow overflow-hidden relative">
        {viewMode === 'preview' ? (
          <div className="h-full w-full bg-white relative">
            {selectedElement && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-lg bg-black/80 p-3 text-white backdrop-blur-md shadow-xl border border-white/10 max-w-[90%]">
                <div className="flex flex-col gap-0.5 text-xs max-w-[300px]">
                  <div className="font-mono font-bold text-blue-400 flex items-center gap-2">
                    &lt;{selectedElement.tagName}&gt;
                    <span className="text-gray-400 font-normal opacity-70">#{selectedElement.id || '-'}</span>
                  </div>
                  <div className="truncate opacity-70">
                    {selectedElement.className ? `.${selectedElement.className.split(' ').join('.')}` : 'No class'}
                  </div>
                  {selectedElement.path && (
                    <div className="text-green-400 truncate mt-1" title={selectedElement.path}>
                      File: {selectedElement.path}
                    </div>
                  )}
                </div>
                <div className="h-8 w-[1px] bg-white/20" />
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="h-8 text-xs"
                  onClick={handleAddToChat}
                >
                  Add to Chat
                </Button>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="h-6 w-6 text-white/50 hover:text-white"
                  onClick={() => setSelectedElement(null)}
                >
                  <X size={14} />
                </Button>
              </div>
            )}
            {previewSrcDoc || previewUrl ? (
              <iframe 
                ref={iframeRef}
                src={previewSrcDoc ? undefined : previewUrl || undefined}
                srcDoc={previewSrcDoc || undefined}
                className="h-full w-full border-0" 
                title="Project Preview" 
              />
            ) : (
              <div className="flex h-full items-center justify-center text-gray-500">
                Preview not available
              </div>
            )}
          </div>
        ) : (
          <PanelGroup direction="horizontal">
            {/* File Tree */}
            <Panel defaultSize={20} minSize={15} maxSize={30} className="flex flex-col border-r border-white/10 bg-[#0c0c0e]">
              <div className="p-2 overflow-auto h-full">
                <div className="mb-2 px-2 text-xs font-bold text-gray-500 uppercase tracking-wider">Explorer</div>
                {files.length === 0 && (
                  <div className="px-4 py-8 text-center text-xs text-gray-600">
                    No files generated yet.
                    <br />
                    Start a conversation to generate code.
                  </div>
                )}
                {files.map((item) => (
                  <FileTreeItem 
                    key={item.name} 
                    node={item} 
                    depth={0} 
                    onFileClick={handleFileClick}
                    expandedPaths={expandedPaths}
                    toggleExpand={toggleExpand}
                    currentPath=""
                  />
                ))}
              </div>
            </Panel>

            <PanelResizeHandle className="w-1 bg-black hover:bg-blue-500/50 transition-colors" />

            {/* Code Editor */}
            <Panel defaultSize={80}>
               <div className="h-full w-full overflow-auto bg-[#1e1e1e]">
                 {activeFile ? (
                   activeFile.isImage ? (
                     <div className="flex h-full items-center justify-center p-4 bg-[#1e1e1e]">
                        <img 
                          src={activeFile.content} 
                          alt={activeFile.name} 
                          className="max-w-full max-h-full object-contain" 
                        />
                     </div>
                   ) : (
                   <SyntaxHighlighter
                     language={getLanguageFromFilename(activeFile.name)}
                     style={vscDarkPlus}
                     customStyle={{ margin: 0, padding: '1.5rem', background: 'transparent', fontSize: '14px', lineHeight: '1.5' }}
                     showLineNumbers={true}
                   >
                     {activeFile.content}
                   </SyntaxHighlighter>
                   )
                 ) : (
                   <div className="flex h-full items-center justify-center text-gray-600 text-sm">
                     Select a file to view code
                   </div>
                 )}
               </div>
            </Panel>
          </PanelGroup>
        )}
      </div>
      
      {/* Status Bar */}
      <div className="flex h-6 shrink-0 items-center justify-between border-t border-white/10 bg-[#007acc] px-3 text-xs text-white">
         <div className="flex items-center gap-3">
           <div className="flex items-center gap-1"><Settings size={12} /> main*</div>
           <div>0 errors</div>
         </div>
         <div className="flex items-center gap-3">
           <div>Ln 1, Col 1</div>
           <div>UTF-8</div>
         </div>
      </div>
    </div>
  );
}
