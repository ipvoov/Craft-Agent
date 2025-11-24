// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

"use client";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import { MessagesBlock } from "../chat/components/messages-block";
import { IdeBlock } from "./ide";

export default function Main() {
  return (
    <div className="h-full w-full px-4 pt-16 pb-4">
      <PanelGroup direction="horizontal" className="h-full w-full gap-4">
        {/* Left Panel: Chat Area */}
        <Panel defaultSize={40} minSize={20} maxSize={50} className="flex flex-col">
          <div className="h-full w-full overflow-hidden rounded-2xl border bg-card shadow-sm">
            <MessagesBlock className="h-full w-full" />
          </div>
        </Panel>
        
        <PanelResizeHandle className="w-1.5 rounded-full bg-border/30 hover:bg-primary/50 transition-colors cursor-col-resize flex flex-col justify-center items-center">
            <div className="h-8 w-1 rounded-full bg-border/50" />
        </PanelResizeHandle>
        
        {/* Right Panel: IDE Area */}
        <Panel defaultSize={60} minSize={30} className="flex flex-col">
           <IdeBlock className="h-full w-full shadow-sm" />
        </Panel>
      </PanelGroup>
    </div>
  );
}
