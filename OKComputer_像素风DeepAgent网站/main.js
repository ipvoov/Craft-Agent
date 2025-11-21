// DeepAgent 主要应用逻辑
const { createApp, ref, reactive, computed, onMounted, watch, nextTick } = Vue;

// 类型定义
/**
 * @typedef {Object} Message
 * @property {'user' | 'ai'} type - 消息类型
 * @property {string} content - 消息内容
 * @property {string} timestamp - 时间戳
 * @property {string} [mode] - 消息模式
 */

/**
 * @typedef {Object} Conversation
 * @property {string} id - 会话ID
 * @property {string} title - 会话标题
 * @property {string} lastMessage - 最后一条消息
 * @property {string} time - 时间字符串
 * @property {Message[]} messages - 消息列表
 */

// 存储管理类
class StorageManager {
    static STORAGE_KEYS = {
        CONVERSATIONS: 'deepagent_conversations',
        SETTINGS: 'deepagent_settings',
        CURRENT_CONVERSATION: 'deepagent_current_conversation'
    };

    /**
     * 保存会话数据
     * @param {Conversation[]} conversations 
     */
    static saveConversations(conversations) {
        localStorage.setItem(this.STORAGE_KEYS.CONVERSATIONS, JSON.stringify(conversations));
    }

    /**
     * 获取会话数据
     * @returns {Conversation[]}
     */
    static getConversations() {
        const data = localStorage.getItem(this.STORAGE_KEYS.CONVERSATIONS);
        return data ? JSON.parse(data) : [];
    }

    /**
     * 保存设置
     * @param {Object} settings 
     */
    static saveSettings(settings) {
        localStorage.setItem(this.STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    }

    /**
     * 获取设置
     * @returns {Object}
     */
    static getSettings() {
        const data = localStorage.getItem(this.STORAGE_KEYS.SETTINGS);
        return data ? JSON.parse(data) : {
            userName: '用户',
            userRole: '开发者',
            theme: 'dark',
            autoSave: true
        };
    }

    /**
     * 保存当前会话ID
     * @param {string} conversationId 
     */
    static saveCurrentConversation(conversationId) {
        localStorage.setItem(this.STORAGE_KEYS.CURRENT_CONVERSATION, conversationId);
    }

    /**
     * 获取当前会话ID
     * @returns {string}
     */
    static getCurrentConversation() {
        return localStorage.getItem(this.STORAGE_KEYS.CURRENT_CONVERSATION) || null;
    }
}

// 导出管理类
class ExportManager {
    /**
     * 导出为Markdown格式
     * @param {Conversation} conversation 
     * @returns {string}
     */
    static toMarkdown(conversation) {
        let markdown = `# ${conversation.title}\n\n`;
        markdown += `**会话时间:** ${conversation.time}\n\n`;
        markdown += `---\n\n`;
        
        conversation.messages.forEach(message => {
            const role = message.type === 'user' ? '**用户**' : '**AI**';
            markdown += `${role} (${message.timestamp}):\n\n`;
            markdown += `${message.content}\n\n`;
            markdown += `---\n\n`;
        });
        
        return markdown;
    }

    /**
     * 导出为HTML格式
     * @param {Conversation} conversation 
     * @returns {string}
     */
    static toHTML(conversation) {
        let html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${conversation.title}</title>
    <style>
        body { font-family: 'Inter', sans-serif; margin: 20px; background: #f5f5f5; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { border-bottom: 2px solid #e0e0e0; padding-bottom: 20px; margin-bottom: 30px; }
        .message { margin-bottom: 20px; padding: 15px; border-radius: 8px; }
        .user-message { background: #e3f2fd; margin-left: 50px; }
        .ai-message { background: #f5f5f5; margin-right: 50px; }
        .timestamp { font-size: 12px; color: #666; margin-top: 5px; }
        .role { font-weight: bold; margin-bottom: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>${conversation.title}</h1>
            <p><strong>会话时间:</strong> ${conversation.time}</p>
        </div>`;
        
        conversation.messages.forEach(message => {
            const role = message.type === 'user' ? '用户' : 'AI';
            const className = message.type === 'user' ? 'user-message' : 'ai-message';
            html += `
        <div class="message ${className}">
            <div class="role">${role}</div>
            <div>${message.content.replace(/\n/g, '<br>')}</div>
            <div class="timestamp">${message.timestamp}</div>
        </div>`;
        });
        
        html += `
    </div>
</body>
</html>`;
        
        return html;
    }

    /**
     * 导出为JSON格式
     * @param {Conversation} conversation 
     * @returns {string}
     */
    static toJSON(conversation) {
        return JSON.stringify(conversation, null, 2);
    }

    /**
     * 下载文件
     * @param {string} content - 文件内容
     * @param {string} filename - 文件名
     * @param {string} mimeType - MIME类型
     */
    static downloadFile(content, filename, mimeType) {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// AI响应模拟器
class AIResponseSimulator {
    static responses = {
        'deep-research': [
            '我将为您进行深度研究和分析。基于我的分析，这个问题的关键点在于...',
            '让我从多个角度来深入研究这个话题。首先，我们需要考虑...',
            '这是一个复杂的问题，我会进行全面的调研和分析...'
        ],
        'web-generation': [
            '我来为您生成一个专业的网页。首先让我了解您的需求...',
            '我将创建一个现代化的网页设计，包含响应式布局和优雅的用户界面...',
            '让我为您生成一个功能完整的网页，包含HTML、CSS和JavaScript代码...'
        ],
        'default': [
            '我理解您的问题，让我为您提供详细的回答...',
            '这是一个很有趣的问题，我来为您分析一下...',
            '基于我的知识库，我可以为您提供以下信息...'
        ]
    };

    /**
     * 生成AI响应
     * @param {string} userMessage 
     * @param {string} mode 
     * @returns {string}
     */
    static generateResponse(userMessage, mode) {
        const modeResponses = this.responses[mode] || this.responses['default'];
        const randomResponse = modeResponses[Math.floor(Math.random() * modeResponses.length)];
        
        // 根据用户消息生成更相关的响应
        if (userMessage.includes('数据') || userMessage.includes('分析')) {
            return `关于数据分析，我会采用以下方法：\n\n1. **数据收集和清洗** - 确保数据质量\n2. **探索性数据分析** - 了解数据分布和特征\n3. **统计建模** - 应用适当的统计方法\n4. **结果可视化** - 生成清晰的图表和报告\n\n让我为您进行详细的分析...`;
        }
        
        if (userMessage.includes('网页') || userMessage.includes('网站')) {
            return `我来为您生成一个现代化的网页。这个网页将包含：\n\n\`\`\`html\n<!DOCTYPE html>\n<html lang=\"zh-CN\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>生成的网页</title>\n    <style>\n        body {\n            font-family: 'Inter', sans-serif;\n            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n            margin: 0;\n            padding: 0;\n            min-height: 100vh;\n        }\n    </style>\n</head>\n<body>\n    <h1>欢迎使用生成的网页</h1>\n</body>\n</html>\n\`\`\`\n\n这个网页具有响应式设计，现代化的样式，并且完全可定制。`;
        }
        
        return `${randomResponse}\n\n关于"${userMessage}"，我认为：`;
    }
}

// 创建Vue应用
createApp({
    setup() {
        // 响应式数据
        const searchQuery = ref('');
        const inputMessage = ref('');
        const isTyping = ref(false);
        const showExportDropdown = ref(false);
        const showSettings = ref(false);
        const currentMode = ref('default');
        const currentConversationId = ref(null);
        const userName = ref('用户');
        const userRole = ref('开发者');
        const theme = ref('dark');
        const autoSave = ref(true);
        
        // 会话和消息数据
        const conversations = ref([]);
        const messages = ref([]);
        
        // 计算属性
        const filteredConversations = computed(() => {
            if (!searchQuery.value) return conversations.value;
            return conversations.value.filter(conv => 
                conv.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                conv.lastMessage.toLowerCase().includes(searchQuery.value.toLowerCase())
            );
        });
        
        // 方法定义
        /**
         * 初始化应用
         */
        const initializeApp = () => {
            // 加载设置
            const settings = StorageManager.getSettings();
            userName.value = settings.userName;
            userRole.value = settings.userRole;
            theme.value = settings.theme;
            autoSave.value = settings.autoSave;
            
            // 加载会话数据
            conversations.value = StorageManager.getConversations();
            
            // 加载当前会话
            const currentId = StorageManager.getCurrentConversation();
            if (currentId && conversations.value.find(c => c.id === currentId)) {
                selectConversation(currentId);
            } else if (conversations.value.length > 0) {
                selectConversation(conversations.value[0].id);
            }
        };
        
        /**
         * 新建会话
         */
        const newConversation = () => {
            const newConv = {
                id: Date.now().toString(),
                title: '新会话',
                lastMessage: '开始新的对话',
                time: new Date().toLocaleString('zh-CN'),
                messages: []
            };
            
            conversations.value.unshift(newConv);
            selectConversation(newConv.id);
            StorageManager.saveConversations(conversations.value);
        };
        
        /**
         * 选择会话
         * @param {string} conversationId 
         */
        const selectConversation = (conversationId) => {
            currentConversationId.value = conversationId;
            const conversation = conversations.value.find(c => c.id === conversationId);
            if (conversation) {
                messages.value = [...conversation.messages];
                StorageManager.saveCurrentConversation(conversationId);
            }
            
            // 滚动到底部
            nextTick(() => {
                scrollToBottom();
            });
        };
        
        /**
         * 删除会话
         * @param {string} conversationId 
         */
        const deleteConversation = (conversationId) => {
            if (confirm('确定要删除这个会话吗？')) {
                conversations.value = conversations.value.filter(c => c.id !== conversationId);
                StorageManager.saveConversations(conversations.value);
                
                if (currentConversationId.value === conversationId) {
                    if (conversations.value.length > 0) {
                        selectConversation(conversations.value[0].id);
                    } else {
                        currentConversationId.value = null;
                        messages.value = [];
                    }
                }
            }
        };
        
        /**
         * 发送消息
         */
        const sendMessage = () => {
            if (!inputMessage.value.trim() || isTyping.value) return;
            
            const userMessage = inputMessage.value.trim();
            inputMessage.value = '';
            
            // 创建用户消息
            const userMsg = {
                type: 'user',
                content: userMessage,
                timestamp: new Date().toLocaleString('zh-CN'),
                mode: currentMode.value
            };
            
            messages.value.push(userMsg);
            isTyping.value = true;
            
            // 确保有当前会话
            if (!currentConversationId.value) {
                newConversation();
            }
            
            // 更新会话
            updateCurrentConversation();
            
            // 模拟AI响应
            setTimeout(() => {
                const aiResponse = AIResponseSimulator.generateResponse(userMessage, currentMode.value);
                const aiMsg = {
                    type: 'ai',
                    content: aiResponse,
                    timestamp: new Date().toLocaleString('zh-CN'),
                    mode: currentMode.value
                };
                
                messages.value.push(aiMsg);
                isTyping.value = false;
                updateCurrentConversation();
                
                // 滚动到底部
                nextTick(() => {
                    scrollToBottom();
                });
            }, 1000 + Math.random() * 2000);
            
            // 滚动到底部
            nextTick(() => {
                scrollToBottom();
            });
        };
        
        /**
         * 添加换行
         * @param {Event} event 
         */
        const addNewline = (event) => {
            event.preventDefault();
            inputMessage.value += '\n';
        };
        
        /**
         * 切换模式
         * @param {string} mode 
         */
        const toggleMode = (mode) => {
            if (currentMode.value === mode) {
                currentMode.value = 'default';
            } else {
                currentMode.value = mode;
            }
        };
        
        /**
         * 切换导出下拉菜单
         */
        const toggleExportDropdown = () => {
            showExportDropdown.value = !showExportDropdown.value;
        };
        
        /**
         * 导出会话
         * @param {string} format 
         */
        const exportConversation = (format) => {
            if (!currentConversationId.value) {
                alert('请先选择一个会话');
                return;
            }
            
            const conversation = conversations.value.find(c => c.id === currentConversationId.value);
            if (!conversation) return;
            
            let content, filename, mimeType;
            
            switch (format) {
                case 'md':
                    content = ExportManager.toMarkdown(conversation);
                    filename = `${conversation.title}.md`;
                    mimeType = 'text/markdown';
                    break;
                case 'html':
                    content = ExportManager.toHTML(conversation);
                    filename = `${conversation.title}.html`;
                    mimeType = 'text/html';
                    break;
                case 'json':
                    content = ExportManager.toJSON(conversation);
                    filename = `${conversation.title}.json`;
                    mimeType = 'application/json';
                    break;
                default:
                    return;
            }
            
            ExportManager.downloadFile(content, filename, mimeType);
            showExportDropdown.value = false;
        };
        
        /**
         * 设置快速消息
         * @param {string} message 
         */
        const setQuickMessage = (message) => {
            inputMessage.value = message;
            // 聚焦到输入框
            const textarea = document.querySelector('textarea');
            if (textarea) {
                textarea.focus();
            }
        };
        
        /**
         * 更新当前会话
         */
        const updateCurrentConversation = () => {
            if (!currentConversationId.value) return;
            
            const conversation = conversations.value.find(c => c.id === currentConversationId.value);
            if (conversation) {
                conversation.messages = [...messages.value];
                conversation.lastMessage = messages.value.length > 0 ? 
                    messages.value[messages.value.length - 1].content.substring(0, 50) + '...' : '暂无消息';
                conversation.time = new Date().toLocaleString('zh-CN');
                
                // 根据第一条消息更新标题
                if (messages.value.length === 1) {
                    const firstMessage = messages.value[0].content;
                    conversation.title = firstMessage.length > 20 ? 
                        firstMessage.substring(0, 20) + '...' : firstMessage;
                }
                
                StorageManager.saveConversations(conversations.value);
            }
        };
        
        /**
         * 滚动到底部
         */
        const scrollToBottom = () => {
            const chatContainer = document.querySelector('.chat-scroll');
            if (chatContainer) {
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }
        };
        
        /**
         * 保存设置
         */
        const saveSettings = () => {
            const settings = {
                userName: userName.value,
                userRole: userRole.value,
                theme: theme.value,
                autoSave: autoSave.value
            };
            
            StorageManager.saveSettings(settings);
            showSettings.value = false;
            
            // 应用主题
            if (theme.value === 'light') {
                document.body.classList.add('light-theme');
            } else {
                document.body.classList.remove('light-theme');
            }
        };
        
        // 点击外部关闭下拉菜单
        const handleClickOutside = (event) => {
            if (showExportDropdown.value && !event.target.closest('.relative')) {
                showExportDropdown.value = false;
            }
        };
        
        // 生命周期钩子
        onMounted(() => {
            initializeApp();
            document.addEventListener('click', handleClickOutside);
            
            // 添加动画效果
            anime({
                targets: '.fade-in',
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 500,
                delay: anime.stagger(100),
                easing: 'easeOutQuart'
            });
        });
        
        // 监听数据变化
        watch(messages, () => {
            if (autoSave.value) {
                updateCurrentConversation();
            }
        }, { deep: true });
        
        // 返回模板中需要使用的数据和方法
        return {
            // 数据
            searchQuery,
            inputMessage,
            isTyping,
            showExportDropdown,
            showSettings,
            currentMode,
            currentConversationId,
            userName,
            userRole,
            theme,
            autoSave,
            conversations,
            messages,
            
            // 计算属性
            filteredConversations,
            
            // 方法
            newConversation,
            selectConversation,
            deleteConversation,
            sendMessage,
            addNewline,
            toggleMode,
            toggleExportDropdown,
            exportConversation,
            setQuickMessage,
            saveSettings
        };
    }
}).mount('#app');