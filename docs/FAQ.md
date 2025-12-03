# 🤔 常见问题（FAQ）

本文档收集了 Craft-Agent 使用过程中的常见问题和解决方案。

---

## 🚀 安装与部署

### Q: Docker 镜像拉取失败怎么办？

**症状：** `docker pull` 超时或返回错误

**解决方案：**

1. **配置国内镜像加速**
   ```bash
   sudo tee /etc/docker/daemon.json << 'EOF'
   {
     "registry-mirrors": [
       "https://hub.rat.dev",
       "https://docker.rainbond.cc"
     ]
   }
   EOF
   sudo systemctl restart docker
   ```

2. **使用镜像代理**
   
   在 `docker-compose.yml` 中使用代理地址：
   ```yaml
   image: hub.rat.dev/ipvoov/craft-agent-backend:latest
   ```

---

### Q: 前端无法连接后端 API？

**症状：** 浏览器控制台显示 404 或 CORS 错误

**原因：** `NEXT_PUBLIC_API_URL` 配置不正确

**解决方案：**

1. **本地开发**：确保使用 `http://localhost:8001/api`
2. **服务器部署**：使用公网 IP，如 `http://你的IP:8001/api`

重新构建前端：
```bash
NEXT_PUBLIC_API_URL=http://你的IP:8001/api docker compose up -d --build
```

---

### Q: 云服务器无法访问服务？

**症状：** 本地可以访问，但外网无法访问

**解决方案：**

1. **检查防火墙**
   ```bash
   # 开放端口
   sudo firewall-cmd --add-port=3001/tcp --permanent
   sudo firewall-cmd --add-port=8001/tcp --permanent
   sudo firewall-cmd --reload
   ```

2. **检查安全组**
   
   在云服务商控制台（阿里云/腾讯云等）的安全组中添加入站规则：
   - 端口 3001（前端）
   - 端口 8001（后端）
   - 来源：0.0.0.0/0

---

### Q: Mac M1/M2 构建的镜像在服务器上无法运行？

**症状：** `no matching manifest for linux/amd64`

**原因：** Mac Apple Silicon 默认构建 arm64 架构镜像

**解决方案：** 构建多架构镜像
```bash
docker buildx create --name multiarch --use

docker buildx build --platform linux/amd64,linux/arm64 \
  -f Dockerfile.backend \
  -t ipvoov/craft-agent-backend:latest \
  --push .
```

---

## ⚙️ 配置问题

### Q: Tavily API Key 无效？

**症状：** `InvalidAPIKeyError: Invalid API key`

**解决方案：**

1. 确认 `config.yaml` 中配置了正确的 API Key
2. 去 [Tavily](https://app.tavily.com) 检查 API Key 是否有效
3. 确认 Docker 挂载了正确的配置文件：
   ```yaml
   volumes:
     - ./config.yaml:/app/config.yaml
   ```

---

### Q: 模型调用失败？

**症状：** `Connection error` 或 `API error`

**排查步骤：**

1. **检查 API Key** 是否正确
2. **检查 base_url** 是否正确（注意结尾是否需要 `/v1`）
3. **检查网络** 服务器是否能访问模型 API
4. **检查余额** API 账户是否有足够余额

**测试连接：**
```bash
curl -X POST "你的base_url/chat/completions" \
  -H "Authorization: Bearer 你的API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model": "gpt-4o", "messages": [{"role": "user", "content": "hello"}]}'
```

---

### Q: 如何使用国产模型？

**示例配置：**

```yaml
# 阿里云通义千问
BASIC_MODEL:
  base_url: "https://dashscope.aliyuncs.com/compatible-mode/v1"
  model: "qwen-max"
  api_key: "sk-xxx"

# DeepSeek
REASONING_MODEL:
  base_url: "https://api.deepseek.com/v1"
  model: "deepseek-reasoner"
  api_key: "sk-xxx"
```

---

## 🔧 运行问题

### Q: 容器启动失败？

**排查步骤：**

1. **查看日志**
   ```bash
   docker compose logs backend
   docker compose logs frontend
   ```

2. **检查配置文件挂载**
   ```bash
   docker exec craft-agent-backend cat /app/config.yaml
   ```

3. **检查文件权限**
   ```bash
   ls -la config.yaml .env
   ```

---

### Q: 生成的网站文件在哪里？

**位置：** `source/` 目录

**Docker 部署时需要挂载：**
```yaml
volumes:
  - ./source:/app/source
```

---

### Q: 内存占用过高？

**解决方案：**

1. **限制容器内存**
   ```yaml
   services:
     backend:
       deploy:
         resources:
           limits:
             memory: 2G
   ```

2. **减少搜索结果数量**
   ```yaml
   TAVILY_MAX_RESULTS: 2
   ```

---

## 🌐 功能问题

### Q: 深度研究功能不工作？

**检查项：**

1. ✅ Tavily API Key 是否配置
2. ✅ 网络是否能访问 Tavily API
3. ✅ 模型是否正常响应

---

### Q: 网站生成功能不工作？

**检查项：**

1. ✅ CODER_MODEL 是否配置
2. ✅ source 目录是否有写入权限
3. ✅ Docker 是否挂载了 source 目录

---

### Q: 如何查看后端日志？

```bash
# Docker 部署
docker compose logs -f backend

# 本地开发
tail -f logs/backend.log
```

---

## 📞 获取帮助

如果以上方案都无法解决你的问题：

1. 📝 [提交 Issue](https://github.com/ipvoov/Craft-Agent/issues)
2. 💬 [GitHub Discussions](https://github.com/ipvoov/Craft-Agent/discussions)

提交问题时请附上：
- 错误日志
- 配置文件（隐藏敏感信息）
- 运行环境（操作系统、Docker 版本等）
