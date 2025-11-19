#!/bin/bash

# DeerFlow 前后端统一启动脚本
# 该脚本会同时启动后端API服务（8001端口）和前端Web服务（3001端口）

# 颜色输出定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}🦌 DeerFlow 启动脚本${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# 检查uv是否安装
if ! command -v uv &> /dev/null; then
    echo -e "${RED}错误: uv 未安装${NC}"
    echo -e "${YELLOW}请先安装 uv: curl -LsSf https://astral.sh/uv/install.sh | sh${NC}"
    exit 1
fi

# 检查pnpm是否安装
if ! command -v pnpm &> /dev/null; then
    echo -e "${RED}错误: pnpm 未安装${NC}"
    echo -e "${YELLOW}请先安装 pnpm: npm install -g pnpm${NC}"
    exit 1
fi

# 检查配置文件
if [ ! -f "$SCRIPT_DIR/config.yaml" ]; then
    echo -e "${RED}错误: config.yaml 不存在${NC}"
    echo -e "${YELLOW}请确保项目根目录有 config.yaml 配置文件${NC}"
    exit 1
fi

# 检查前端依赖
if [ ! -d "$SCRIPT_DIR/web/node_modules" ]; then
    echo -e "${YELLOW}前端依赖未安装，正在安装...${NC}"
    cd "$SCRIPT_DIR/web" || exit 1
    pnpm install
    cd "$SCRIPT_DIR" || exit 1
fi

# 创建日志目录
LOG_DIR="$SCRIPT_DIR/logs"
mkdir -p "$LOG_DIR"

# 日志文件路径
BACKEND_LOG="$LOG_DIR/backend.log"
FRONTEND_LOG="$LOG_DIR/frontend.log"

# 清空旧日志
> "$BACKEND_LOG"
> "$FRONTEND_LOG"

echo -e "${GREEN}[1/2] 启动后端服务 (端口: 8001)...${NC}"
# 启动后端服务
cd "$SCRIPT_DIR" || exit 1
uv run uvicorn src.server.app:app --host 0.0.0.0 --port 8001 --reload > "$BACKEND_LOG" 2>&1 &
BACKEND_PID=$!
echo -e "${GREEN}✓ 后端服务已启动 (PID: $BACKEND_PID)${NC}"
echo -e "${YELLOW}  后端日志: $BACKEND_LOG${NC}"
echo ""

# 等待后端启动
echo -e "${YELLOW}等待后端服务就绪...${NC}"
sleep 3

# 检查后端是否启动成功
if ! ps -p $BACKEND_PID > /dev/null; then
    echo -e "${RED}错误: 后端服务启动失败${NC}"
    echo -e "${YELLOW}查看日志: cat $BACKEND_LOG${NC}"
    exit 1
fi

echo -e "${GREEN}[2/2] 启动前端服务 (端口: 3001)...${NC}"
# 启动前端服务
cd "$SCRIPT_DIR/web" || exit 1
pnpm dev > "$FRONTEND_LOG" 2>&1 &
FRONTEND_PID=$!
echo -e "${GREEN}✓ 前端服务已启动 (PID: $FRONTEND_PID)${NC}"
echo -e "${YELLOW}  前端日志: $FRONTEND_LOG${NC}"
echo ""

# 保存PID到文件，方便后续停止
echo "$BACKEND_PID" > "$SCRIPT_DIR/.backend.pid"
echo "$FRONTEND_PID" > "$SCRIPT_DIR/.frontend.pid"

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}🎉 DeerFlow 已成功启动！${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "${GREEN}访问地址:${NC}"
echo -e "  前端: ${GREEN}http://localhost:3001${NC}"
echo -e "  后端: ${GREEN}http://localhost:8001${NC}"
echo ""
echo -e "${YELLOW}提示:${NC}"
echo -e "  - 按 ${RED}Ctrl+C${NC} 停止所有服务"
echo -e "  - 查看后端日志: ${YELLOW}tail -f $BACKEND_LOG${NC}"
echo -e "  - 查看前端日志: ${YELLOW}tail -f $FRONTEND_LOG${NC}"
echo -e "  - 使用 ${YELLOW}./stop.sh${NC} 停止服务"
echo ""

# 等待用户中断
trap "echo ''; echo -e '${YELLOW}正在停止服务...${NC}'; kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; rm -f $SCRIPT_DIR/.backend.pid $SCRIPT_DIR/.frontend.pid; echo -e '${GREEN}服务已停止${NC}'; exit 0" INT TERM

# 保持脚本运行并监控进程
while true; do
    # 检查后端进程是否还在运行
    if ! ps -p $BACKEND_PID > /dev/null; then
        echo -e "${RED}后端服务已停止${NC}"
        kill $FRONTEND_PID 2>/dev/null
        rm -f "$SCRIPT_DIR/.backend.pid" "$SCRIPT_DIR/.frontend.pid"
        exit 1
    fi
    
    # 检查前端进程是否还在运行
    if ! ps -p $FRONTEND_PID > /dev/null; then
        echo -e "${RED}前端服务已停止${NC}"
        kill $BACKEND_PID 2>/dev/null
        rm -f "$SCRIPT_DIR/.backend.pid" "$SCRIPT_DIR/.frontend.pid"
        exit 1
    fi
    
    sleep 2
done
