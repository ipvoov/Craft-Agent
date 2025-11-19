# 🦌 DeerFlow

## 快速启动

### 使用启动脚本（推荐）

我们提供了便捷的启动脚本来同时启动前后端服务：

```bash
# 启动前后端服务
./start.sh

# 停止所有服务
./stop.sh
```

启动后可访问：
- 前端：http://localhost:3001
- 后端API：http://localhost:8001

### 手动启动

#### 1. 启动后端服务

确保已安装 `uv` 包管理器：

```bash
# 使用 uv 运行后端服务（8001端口）
uv run uvicorn src.server.app:app --host 0.0.0.0 --port 8001 --reload
```

#### 2. 启动前端服务

```bash
cd web
pnpm install  # 首次运行需要安装依赖
pnpm dev      # 启动前端开发服务器（3001端口）
```

## 配置说明

### 端口配置

- **后端端口**: 8001
- **前端端口**: 3001

如需修改端口，请调整以下文件：
- 后端：`src/server/app.py` 中的 CORS 配置
- 前端：`web/package.json` 中的启动脚本
- 前端API地址：`web/.env` 中的 `NEXT_PUBLIC_API_URL`

### 环境变量

后端配置文件：`config.yaml`
前端环境变量：`web/.env`（可从 `web/.env.example` 复制）

```bash
cd web
cp .env.example .env
# 编辑 .env 文件，设置 NEXT_PUBLIC_API_URL=http://localhost:8001/api
```

## 项目结构

```
deer/
├── src/                    # 后端源码
│   ├── server/            # FastAPI 服务
│   └── graph/             # Agent 工作流
├── web/                   # 前端源码（Next.js）
├── config.yaml            # 后端配置文件
├── start.sh              # 启动脚本
├── stop.sh               # 停止脚本
└── pyproject.toml        # Python 项目配置
```

## 依赖管理

- **后端**: 使用 `uv` 进行依赖管理
- **前端**: 使用 `pnpm` 进行依赖管理

## 日志查看

启动脚本会将日志保存到 `logs/` 目录：

```bash
# 查看后端日志
tail -f logs/backend.log

# 查看前端日志
tail -f logs/frontend.log
```

## 开发说明

1. 后端使用 FastAPI 框架，支持热重载
2. 前端使用 Next.js 14+ 和 Turbopack，开发体验流畅
3. 前后端通过 RESTful API 和 SSE（Server-Sent Events）通信

## 常见问题

### 端口被占用

如果遇到端口被占用的问题，可以：
1. 使用 `./stop.sh` 清理残留进程
2. 手动检查并释放端口：
   ```bash
   # 查看占用端口的进程
   lsof -i:8001
   lsof -i:3001
   
   # 杀死进程
   kill -9 <PID>
   ```

### 前端无法连接后端

1. 确保后端服务已启动并运行在 8001 端口
2. 检查 `web/.env` 中的 `NEXT_PUBLIC_API_URL` 配置是否正确
3. 查看浏览器控制台和后端日志排查错误

## License

MIT License
