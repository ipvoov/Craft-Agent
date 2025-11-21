// 全局变量
let currentModel = 'researcher';
let messages = [];
let isTyping = false;

// DOM元素
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');
const charCount = document.getElementById('char-count');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const sidebarToggle = document.getElementById('sidebar-toggle');

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    createParticleBackground();
    initializeAnimations();
});

// 初始化应用
function initializeApp() {
    // 设置输入框自动调整高度
    messageInput.addEventListener('input', function() {
        adjustTextareaHeight();
        updateCharCount();
    });
    
    // 初始化字符计数
    updateCharCount();
}

// 设置事件监听器
function setupEventListeners() {
    // 发送消息
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // 模型选择器
    document.querySelectorAll('.model-selector').forEach(selector => {
        selector.addEventListener('click', function() {
            switchModel(this.dataset.model);
        });
    });
    
    // 示例问题按钮
    document.querySelectorAll('.tool-card').forEach(card => {
        card.addEventListener('click', function() {
            const question = this.querySelector('p').textContent;
            messageInput.value = question;
            adjustTextareaHeight();
            updateCharCount();
        });
    });
    
    // 侧边栏切换
    sidebarToggle.addEventListener('click', toggleSidebar);
    
    // 新建聊天按钮
    document.querySelector('button:has(svg):has(path[d*="M12 4v16m8-8H4"])').addEventListener('click', function() {
        if (confirm('确定要新建聊天吗？当前的对话将被清除。')) {
            clearChat();
        }
    });
    
    // 响应式处理
    window.addEventListener('resize', handleResize);
}

// 发送消息
function sendMessage() {
    const message = messageInput.value.trim();
    if (!message || isTyping) return;
    
    // 添加用户消息
    addUserMessage(message);
    
    // 清空输入框
    messageInput.value = '';
    adjustTextareaHeight();
    updateCharCount();
    
    // 显示AI正在输入
    showTypingIndicator();
    
    // 模拟AI回复
    setTimeout(() => {
        const response = generateAIResponse(message);
        addAIMessage(response);
        hideTypingIndicator();
    }, 1000 + Math.random() * 2000);
}

// 添加用户消息
function addUserMessage(message) {
    const messageElement = createMessageElement(message, 'user');
    chatMessages.appendChild(messageElement);
    scrollToBottom();
    
    // 添加动画
    anime({
        targets: messageElement,
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutQuart'
    });
}

// 添加AI消息
function addAIMessage(message) {
    const messageElement = createMessageElement(message, 'ai');
    chatMessages.appendChild(messageElement);
    scrollToBottom();
    
    // 添加打字机效果
    typeMessage(messageElement.querySelector('p'), message);
}

// 创建消息元素
function createMessageElement(message, type) {
    const div = document.createElement('div');
    div.className = `chat-bubble mb-6`;
    
    const messageClass = type === 'user' ? 'message-user ml-auto' : 'message-ai';
    const maxWidth = type === 'user' ? 'max-w-md' : 'max-w-3xl';
    
    div.innerHTML = `
        <div class="${messageClass} p-4 rounded-lg ${maxWidth}">
            <div class="flex items-start space-x-3">
                ${type === 'ai' ? `
                    <div class="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <span class="text-white font-bold text-sm">K</span>
                    </div>
                ` : ''}
                <div class="flex-1">
                    <p class="text-gray-100 leading-relaxed">${type === 'user' ? message : ''}</p>
                </div>
            </div>
        </div>
    `;
    
    if (type === 'user') {
        div.querySelector('.message-user').style.marginLeft = 'auto';
    }
    
    return div;
}

// 打字机效果
function typeMessage(element, message) {
    element.textContent = '';
    let i = 0;
    
    function type() {
        if (i < message.length) {
            element.textContent += message.charAt(i);
            i++;
            setTimeout(type, 30 + Math.random() * 20);
        }
    }
    
    type();
}

// 显示打字指示器
function showTypingIndicator() {
    isTyping = true;
    sendButton.disabled = true;
    sendButton.style.opacity = '0.5';
    
    const typingElement = document.createElement('div');
    typingElement.id = 'typing-indicator';
    typingElement.className = 'chat-bubble mb-6';
    typingElement.innerHTML = `
        <div class="message-ai p-4 rounded-lg max-w-xs">
            <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-white font-bold text-sm">K</span>
                </div>
                <div class="flex space-x-1">
                    <div class="w-2 h-2 bg-gray-400 rounded-full typing-indicator"></div>
                    <div class="w-2 h-2 bg-gray-400 rounded-full typing-indicator" style="animation-delay: 0.2s;"></div>
                    <div class="w-2 h-2 bg-gray-400 rounded-full typing-indicator" style="animation-delay: 0.4s;"></div>
                </div>
            </div>
        </div>
    `;
    
    chatMessages.appendChild(typingElement);
    scrollToBottom();
}

// 隐藏打字指示器
function hideTypingIndicator() {
    isTyping = false;
    sendButton.disabled = false;
    sendButton.style.opacity = '1';
    
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// 生成AI回复
function generateAIResponse(message) {
    const responses = [
        '我理解你的问题。这是一个很有趣的话题，让我来为你详细分析一下...',
        '根据我的分析，我认为最好的解决方案是...',
        '你提出了一个很好的观点。从多个角度来看，我们可以考虑...',
        '让我为你提供一些相关的信息和数据支持...',
        '这个问题涉及到多个方面，我会从以下几个角度来回答...',
        '基于最新的研究和实践经验，我建议...',
        '这是一个复杂的问题，需要综合考虑多个因素...',
        '我可以帮你查找相关的资料和信息，让我们深入了解这个话题...'
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
}

// 切换模型
function switchModel(model) {
    currentModel = model;
    
    // 更新UI
    document.querySelectorAll('.model-selector').forEach(selector => {
        selector.classList.remove('active');
    });
    
    document.querySelector(`[data-model="${model}"]`).classList.add('active');
    
    // 添加切换动画
    anime({
        targets: '.model-selector.active',
        scale: [0.95, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });
}

// 调整文本框高度
function adjustTextareaHeight() {
    messageInput.style.height = 'auto';
    messageInput.style.height = messageInput.scrollHeight + 'px';
}

// 更新字符计数
function updateCharCount() {
    const count = messageInput.value.length;
    charCount.textContent = count;
    
    if (count > 3500) {
        charCount.style.color = '#ef4444';
    } else if (count > 3000) {
        charCount.style.color = '#f59e0b';
    } else {
        charCount.style.color = '#9ca3af';
    }
}

// 滚动到底部
function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// 清空聊天
function clearChat() {
    // 保留欢迎消息
    const welcomeMessage = chatMessages.querySelector('.chat-bubble');
    chatMessages.innerHTML = '';
    chatMessages.appendChild(welcomeMessage);
    
    // 重新添加示例问题
    const examplesDiv = document.createElement('div');
    examplesDiv.className = 'grid grid-cols-1 md:grid-cols-2 gap-4 mb-6';
    examplesDiv.innerHTML = `
        <button class="tool-card p-4 rounded-lg hover-lift text-left transition-all duration-300">
            <div class="flex items-center space-x-3 mb-2">
                <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                </div>
                <span class="font-medium">数据分析</span>
            </div>
            <p class="text-sm text-gray-400">帮我分析这份销售数据，找出趋势和异常</p>
        </button>
        
        <button class="tool-card p-4 rounded-lg hover-lift text-left transition-all duration-300">
            <div class="flex items-center space-x-3 mb-2">
                <div class="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                </div>
                <span class="font-medium">代码编写</span>
            </div>
            <p class="text-sm text-gray-400">用Python写一个网页爬虫程序</p>
        </button>
        
        <button class="tool-card p-4 rounded-lg hover-lift text-left transition-all duration-300">
            <div class="flex items-center space-x-3 mb-2">
                <div class="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                    </svg>
                </div>
                <span class="font-medium">创意写作</span>
            </div>
            <p class="text-sm text-gray-400">帮我写一篇关于人工智能的科普文章</p>
        </button>
        
        <button class="tool-card p-4 rounded-lg hover-lift text-left transition-all duration-300">
            <div class="flex items-center space-x-3 mb-2">
                <div class="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                </div>
                <span class="font-medium">学习辅导</span>
            </div>
            <p class="text-sm text-gray-400">解释量子计算的基本原理</p>
        </button>
    `;
    chatMessages.appendChild(examplesDiv);
    
    // 重新绑定示例问题事件
    examplesDiv.querySelectorAll('.tool-card').forEach(card => {
        card.addEventListener('click', function() {
            const question = this.querySelector('p').textContent;
            messageInput.value = question;
            adjustTextareaHeight();
            updateCharCount();
        });
    });
}

// 切换侧边栏
function toggleSidebar() {
    sidebar.classList.toggle('sidebar-collapsed');
    mainContent.classList.toggle('main-content-expanded');
}

// 响应式处理
function handleResize() {
    if (window.innerWidth >= 768) {
        sidebar.classList.remove('sidebar-collapsed');
        mainContent.classList.remove('main-content-expanded');
    }
}

// 创建粒子背景
function createParticleBackground() {
    const sketch = (p) => {
        let particles = [];
        
        p.setup = () => {
            const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
            canvas.parent('particles-bg');
            
            // 创建粒子
            for (let i = 0; i < 50; i++) {
                particles.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    vx: p.random(-0.5, 0.5),
                    vy: p.random(-0.5, 0.5),
                    size: p.random(2, 4)
                });
            }
        };
        
        p.draw = () => {
            p.clear();
            
            // 绘制连接线
            p.stroke(255, 107, 53, 30);
            p.strokeWeight(1);
            
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dist = p.dist(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
                    if (dist < 100) {
                        p.line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
                    }
                }
            }
            
            // 绘制和更新粒子
            p.fill(255, 107, 53, 100);
            p.noStroke();
            
            particles.forEach(particle => {
                p.ellipse(particle.x, particle.y, particle.size);
                
                // 更新位置
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // 边界检测
                if (particle.x < 0 || particle.x > p.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > p.height) particle.vy *= -1;
            });
        };
        
        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
    };
    
    new p5(sketch);
}

// 初始化动画
function initializeAnimations() {
    // 页面加载动画
    anime({
        targets: 'nav',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuart',
        delay: 200
    });
    
    anime({
        targets: '#sidebar',
        translateX: [-300, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuart',
        delay: 400
    });
    
    anime({
        targets: '#main-content',
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutQuart',
        delay: 600
    });
    
    // 工具卡片悬停动画
    document.querySelectorAll('.tool-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            anime({
                targets: card,
                scale: 1.02,
                duration: 200,
                easing: 'easeOutQuart'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            anime({
                targets: card,
                scale: 1,
                duration: 200,
                easing: 'easeOutQuart'
            });
        });
    });
}