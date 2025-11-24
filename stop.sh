#!/bin/bash

# Craft-Agent 停止脚本

# 颜色输出定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo -e "${YELLOW}正在停止 Craft-Agent 服务...${NC}"
echo ""

# 读取PID文件
BACKEND_PID_FILE="$SCRIPT_DIR/.backend.pid"
FRONTEND_PID_FILE="$SCRIPT_DIR/.frontend.pid"

# 停止后端服务
if [ -f "$BACKEND_PID_FILE" ]; then
    BACKEND_PID=$(cat "$BACKEND_PID_FILE")
    if ps -p "$BACKEND_PID" > /dev/null 2>&1; then
        echo -e "${YELLOW}停止后端服务 (PID: $BACKEND_PID)...${NC}"
        kill "$BACKEND_PID" 2>/dev/null
        sleep 1
        
        # 如果进程还在运行，强制杀死
        if ps -p "$BACKEND_PID" > /dev/null 2>&1; then
            kill -9 "$BACKEND_PID" 2>/dev/null
        fi
        echo -e "${GREEN}✓ 后端服务已停止${NC}"
    else
        echo -e "${YELLOW}后端服务未运行${NC}"
    fi
    rm -f "$BACKEND_PID_FILE"
else
    echo -e "${YELLOW}未找到后端PID文件${NC}"
fi

# 停止前端服务
if [ -f "$FRONTEND_PID_FILE" ]; then
    FRONTEND_PID=$(cat "$FRONTEND_PID_FILE")
    if ps -p "$FRONTEND_PID" > /dev/null 2>&1; then
        echo -e "${YELLOW}停止前端服务 (PID: $FRONTEND_PID)...${NC}"
        kill "$FRONTEND_PID" 2>/dev/null
        sleep 1
        
        # 如果进程还在运行，强制杀死
        if ps -p "$FRONTEND_PID" > /dev/null 2>&1; then
            kill -9 "$FRONTEND_PID" 2>/dev/null
        fi
        echo -e "${GREEN}✓ 前端服务已停止${NC}"
    else
        echo -e "${YELLOW}前端服务未运行${NC}"
    fi
    rm -f "$FRONTEND_PID_FILE"
else
    echo -e "${YELLOW}未找到前端PID文件${NC}"
fi

# 清理可能残留的进程
echo ""
echo -e "${YELLOW}清理残留进程...${NC}"

# 查找并杀死占用8001端口的进程
BACKEND_PORT_PID=$(lsof -ti:8001 2>/dev/null)
if [ -n "$BACKEND_PORT_PID" ]; then
    echo -e "${YELLOW}发现占用8001端口的进程 (PID: $BACKEND_PORT_PID)，正在清理...${NC}"
    kill -9 "$BACKEND_PORT_PID" 2>/dev/null
    echo -e "${GREEN}✓ 已清理8001端口${NC}"
fi

# 查找并杀死占用3001端口的进程
FRONTEND_PORT_PID=$(lsof -ti:3001 2>/dev/null)
if [ -n "$FRONTEND_PORT_PID" ]; then
    echo -e "${YELLOW}发现占用3001端口的进程 (PID: $FRONTEND_PORT_PID)，正在清理...${NC}"
    kill -9 "$FRONTEND_PORT_PID" 2>/dev/null
    echo -e "${GREEN}✓ 已清理3001端口${NC}"
fi

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}✅ Craft-Agent 服务已完全停止${NC}"
echo -e "${GREEN}========================================${NC}"
