// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

"use client"

import dynamic from 'next/dynamic'
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useRouter } from "next/navigation"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

// Dynamically import Dithering to avoid SSR issues
const Dithering = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.Dithering),
  { ssr: false }
)

export default function HomePage() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch
  if (!mounted) return null

  const isDarkMode = resolvedTheme === "dark"

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col md:flex-row">
      <div
        className={`w-full md:w-1/2 p-8 font-mono relative z-10 flex flex-col justify-between ${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {/* Theme toggle button */}
        <button
          onClick={() => setTheme(isDarkMode ? "light" : "dark")}
          className={`absolute top-8 right-8 p-2 rounded-full transition-colors ${
            isDarkMode ? "hover:bg-white/10" : "hover:bg-black/10"
          }`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <Sun className="w-6 h-6" />
          ) : (
            <Moon className="w-6 h-6" />
          )}
        </button>

        {/* Main Content */}
        <div className="mt-20 mb-12 flex-grow flex flex-col justify-center px-4 md:px-12">
          <h1 className="text-xl font-bold mb-16 flex items-center gap-2">
            📺 Craft-Agent
          </h1>
          
          <div className="mb-8 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              深度研究 · 一键建站 <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                触手可及
              </span>
            </h2>
            
            <div className="space-y-4 text-lg opacity-80 max-w-lg leading-relaxed">
              <p>
                认识 Craft-Agent，您的个人深度研究助手与网站构建引擎。
              </p>
              <p>
                凭借搜索引擎、网络爬虫、Python等强大工具，它不仅能提供即时洞察、全面报告、制作引人入胜的播客，更能将研究成果瞬间转化为精美前端网站。让从探索到呈现，一气呵成。
              </p>
            </div>

            <div className="flex gap-4 pt-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`px-8 py-3 rounded font-bold transition-all ${
                      isDarkMode
                        ? "bg-white text-black hover:bg-gray-200"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    开始使用 ›
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem
                    onClick={() => router.push("/chat")}
                    className="cursor-pointer"
                  >
                    深度研究
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => router.push("/web-dev")}
                    className="cursor-pointer"
                  >
                    网页开发
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a 
                href="https://github.com/ipvoov/Craft-Agent" 
                target="_blank" 
                className={`px-8 py-3 border rounded font-bold transition-all ${
                  isDarkMode 
                    ? "border-white/30 hover:bg-white/10" 
                    : "border-black/30 hover:bg-black/10"
                }`}
              >
                了解更多
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-auto px-4 md:px-12 pb-8">
          <div className="flex space-x-6 text-sm font-mono opacity-60">
            <span>Links</span>
            <a href="https://twitter.com" target="_blank" className="hover:underline">Twitter</a>
            <a href="mailto:contact@deepflow.ai" className="hover:underline">Email</a>
            <a href="https://github.com/ipvoov/Craft-Agent" target="_blank" className="hover:underline">GitHub</a>
          </div>
        </div>
      </div>

      {/* Right Side - Dithering Effect */}
      <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto bg-black overflow-hidden">
        <Dithering
          style={{ height: "100%", width: "100%" }}
          colorBack={isDarkMode ? "#000000" : "#f5f5f5"}
          colorFront={isDarkMode ? "hsl(320, 100%, 70%)" : "hsl(220, 100%, 70%)"}
          shape="dots"
          type="4x4"
          pxSize={4}
          offsetX={0}
          offsetY={0}
          scale={0.8}
          rotation={0}
          speed={0.1}
        />
      </div>
    </div>
  )
}
