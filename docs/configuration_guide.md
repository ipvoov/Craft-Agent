# 📖 配置指南

本文档详细介绍 Craft-Agent 的配置选项和使用方法。

---

## 📁 配置文件概览

Craft-Agent 使用两个主要配置文件：

| 文件 | 用途 | 示例文件 |
|------|------|----------|
| `config.yaml` | 模型和 API 配置 | `config.yaml.example` |
| `.env` | 环境变量配置 | `.env.example` |

---

## ⚙️ config.yaml 配置

### 基础配置

```yaml
# 智能体递归调用限制（防止无限循环）
AGENT_RECURSION_LIMIT: 20
```

### 🤖 模型配置

Craft-Agent 支持配置三种不同用途的模型：

#### 1. 基础模型（BASIC_MODEL）

用于一般对话和研究任务。

```yaml
BASIC_MODEL:
  base_url: "https://api.openai.com/v1"  # API 地址
  model: "gpt-4o"                         # 模型名称
  api_key: "sk-xxx"                       # API 密钥
```

#### 2. 推理模型（REASONING_MODEL）

用于复杂推理任务，如深度分析、逻辑推导等。

```yaml
REASONING_MODEL:
  base_url: "https://api.openai.com/v1"
  model: "o1-preview"                     # 推荐使用推理能力强的模型
  api_key: "sk-xxx"
  max_retries: 3                          # 调用失败时的最大重试次数
```

#### 3. 代码模型（CODER_MODEL）

用于代码生成、重构等编程任务。

```yaml
CODER_MODEL:
  base_url: "https://api.openai.com/v1"
  model: "gpt-4o"                         # 推荐使用代码能力强的模型
  api_key: "sk-xxx"
```

### 🔍 搜索配置

#### Tavily 搜索 API

Tavily 是一个专为 AI 优化的搜索引擎，用于深度研究功能。

```yaml
TAVILY_API_KEY: "tvly-xxx"    # 获取地址: https://app.tavily.com
TAVILY_MAX_RESULTS: 3         # 每次搜索返回的最大结果数
```

#### Jina Reader API（可选）

用于网页内容抓取，可提升爬取速度。

```yaml
JINA_API_KEY: "jina_xxx"      # 获取地址: https://jina.ai/reader
```

> 💡 不配置 Jina API 也可以使用，但爬取速度会慢一些。

---

## 🔐 .env 环境变量配置

### Python 代码执行

```env
# 是否开启 Python 代码执行工具
ENABLE_PYTHON_REPL=true
```

> ⚠️ 开启此功能存在安全风险，请在受信任的环境中使用。

### LangSmith 监控（可选）

用于调试和监控模型行为。

```env
LANGCHAIN_TRACING=true
LANGCHAIN_API_KEY=your_langsmith_api_key
LANGCHAIN_ENDPOINT=https://api.smith.langchain.com
LANGCHAIN_PROJECT_NAME=craft-agent
```

---

## 🌐 支持的模型提供商

Craft-Agent 兼容 OpenAI API 格式，支持以下提供商：

| 提供商 | base_url | 推荐模型 |
|--------|----------|----------|
| OpenAI | `https://api.openai.com/v1` | gpt-4o, o1-preview |
| Azure OpenAI | `https://xxx.openai.azure.com/` | gpt-4o |
| 阿里云通义 | `https://dashscope.aliyuncs.com/compatible-mode/v1` | qwen-max |
| 智谱 AI | `https://open.bigmodel.cn/api/paas/v4` | glm-4 |
| DeepSeek | `https://api.deepseek.com/v1` | deepseek-chat |
| 月之暗面 | `https://api.moonshot.cn/v1` | moonshot-v1-128k |

---

## 🐳 Docker 部署配置

### 本地开发

```bash
# 默认使用 localhost
docker compose up -d --build
```

### 服务器部署

```bash
# 指定服务器公网 IP
NEXT_PUBLIC_API_URL=http://你的公网IP:8001/api docker compose up -d --build
```

### 挂载目录

```yaml
volumes:
  - ./.env:/app/.env           # 环境变量
  - ./config.yaml:/app/config.yaml  # 配置文件
  - ./source:/app/source       # 生成的网站文件
```

---

## 📝 配置示例

### 完整 config.yaml 示例

```yaml
AGENT_RECURSION_LIMIT: 20

BASIC_MODEL:
  base_url: "https://api.openai.com/v1"
  model: "gpt-4o"
  api_key: "sk-xxx"

REASONING_MODEL:
  base_url: "https://api.openai.com/v1"
  model: "o1-preview"
  api_key: "sk-xxx"
  max_retries: 3

CODER_MODEL:
  base_url: "https://api.openai.com/v1"
  model: "gpt-4o"
  api_key: "sk-xxx"

TAVILY_API_KEY: "tvly-xxx"
TAVILY_MAX_RESULTS: 3

# JINA_API_KEY: "jina_xxx"
```

### 完整 .env 示例

```env
ENABLE_PYTHON_REPL=true

# LangSmith（可选）
# LANGCHAIN_TRACING=true
# LANGCHAIN_API_KEY=xxx
# LANGCHAIN_ENDPOINT=https://api.smith.langchain.com
# LANGCHAIN_PROJECT_NAME=craft-agent
```

---

## 🔗 相关链接

- [Tavily API](https://app.tavily.com) - 搜索 API
- [Jina Reader](https://jina.ai/reader) - 网页抓取 API
- [LangSmith](https://smith.langchain.com) - 模型监控
- [OpenAI API](https://platform.openai.com) - OpenAI 模型
