"use client";

import React from "react";

import { useTheme } from "next-themes";
import type { Option, Resource } from "~/core/messages";
import { cn } from "~/lib/utils";

import { InputBox } from "./input-box";

export interface WebDevHomeProps {
  className?: string;
  responding?: boolean;
  feedback?: { option: Option } | null;
  onSend?: (
    message: string,
    options?: {
      interruptFeedback?: string;
      resources?: Array<Resource>;
    },
  ) => void | Promise<void>;
  onCancel?: () => void;
  onRemoveFeedback?: () => void;
}

export function WebDevHome({
  className,
  responding,
  feedback,
  onSend,
  onCancel,
  onRemoveFeedback,
}: WebDevHomeProps) {
  const { resolvedTheme = "dark" } = useTheme();
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-background",
        resolvedTheme === "light" ? "text-black" : "text-white",
        className,
      )}
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-gradient-to-br from-[#0071e3]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-gradient-to-tl from-[#00d4ff]/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-3xl px-4 py-8 md:px-0 md:py-10">
        {/* title */}
        <div className="apple-animate-in text-center space-y-3 md:space-y-4">
          <div className="space-y-1">
            <h1
              className={cn(
                "mb-2 text-5xl font-black leading-[0.85] tracking-tighter md:text-[5rem]",
                resolvedTheme === "light" ? "text-black" : "text-white",
              )}
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              Craft-Agent
            </h1>
            <h2
              className={cn(
                "-mt-2 text-xl font-light italic leading-none tracking-wide md:text-[2.2rem]",
                resolvedTheme === "light" ? "text-zinc-700" : "text-zinc-300",
              )}
              style={{ fontFamily: "Georgia, serif" }}
            >
              Website Studio
            </h2>
          </div>
          <p
            className={cn(
              "mx-auto max-w-2xl px-4 pt-3 text-sm font-light leading-relaxed md:px-0 md:text-lg",
              resolvedTheme === "light" ? "text-zinc-600" : "text-zinc-400",
            )}
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            使用 Craft-Agent 将你的研究成果、一手资料与创意，一键转化为高质量的前端网站。从信息架构到页面文案，几分钟完成整站搭建。
          </p>
        </div>

        {/* centered chat-style input box */}
        <div className="apple-animate-in apple-animate-delay-1 mt-8 md:mt-10">
          <InputBox
            className="mx-auto w-full max-w-3xl"
            responding={responding}
            feedback={feedback}
            onSend={onSend}
            onCancel={onCancel}
            onRemoveFeedback={onRemoveFeedback}
            showModeToggles={false}
            placeholder="请描述你想生成的网站或页面，例如结构、内容和风格…"
            enableConfig={false}
          />
        </div>

        {/* footer */}
        <footer
          className={cn(
            "apple-animate-in apple-animate-delay-2 mt-8 py-4 text-center text-xs font-light md:mt-12 md:text-sm",
            resolvedTheme === "light" ? "text-zinc-600" : "text-zinc-500",
          )}
        >
          <span className="mx-2">From research to website - Instant generation - Production-ready pages</span>
        </footer>
      </div>
    </div>
  );
}
