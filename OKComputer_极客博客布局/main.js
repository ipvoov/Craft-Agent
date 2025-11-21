// GeekBlog Main JavaScript
class GeekBlog {
    constructor() {
        this.tabs = new Map();
        this.activeTab = 'welcome';
        this.directoryTree = new Map();
        this.minimap = null;
        this.particleSystem = null;
        
        this.init();
    }

    init() {
        this.initParticleBackground();
        this.initDirectoryTree();
        this.initTabSystem();
        this.initSearch();
        this.initMinimap();
        this.initThemeToggle();
        this.initScrollEffects();
        this.loadWelcomeContent();
    }

    // Particle Background System
    initParticleBackground() {
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 100;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 122, 204, ${this.opacity})`;
                ctx.fill();
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            particles.forEach((particle, i) => {
                particles.slice(i + 1).forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `rgba(0, 122, 204, ${0.1 * (1 - distance / 100)})`;
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animate);
        };

        animate();

        // Resize handler
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    // Directory Tree System
    initDirectoryTree() {
        const treeItems = document.querySelectorAll('.tree-item');
        
        treeItems.forEach(item => {
            const node = item.querySelector('.tree-node');
            const children = item.querySelector('.tree-children');
            
            if (node && children) {
                node.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.toggleDirectory(node, children);
                });
            }

            // File click handler
            if (item.dataset.type === 'file') {
                node.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const filePath = item.dataset.path;
                    this.openFile(filePath);
                });
            }
        });

        // Collapse all button
        document.getElementById('collapse-all').addEventListener('click', () => {
            this.collapseAllDirectories();
        });
    }

    toggleDirectory(node, children) {
        const isExpanded = node.dataset.expanded === 'true';
        
        if (isExpanded) {
            // Collapse
            anime({
                targets: children,
                height: 0,
                opacity: 0,
                duration: 300,
                easing: 'easeOutQuad',
                complete: () => {
                    children.classList.add('hidden');
                }
            });
            node.dataset.expanded = 'false';
        } else {
            // Expand
            children.classList.remove('hidden');
            anime({
                targets: children,
                height: 'auto',
                opacity: 1,
                duration: 300,
                easing: 'easeOutQuad'
            });
            node.dataset.expanded = 'true';
        }
    }

    collapseAllDirectories() {
        const expandedNodes = document.querySelectorAll('.tree-node[data-expanded="true"]');
        expandedNodes.forEach(node => {
            const children = node.parentElement.querySelector('.tree-children');
            if (children && !children.classList.contains('hidden')) {
                this.toggleDirectory(node, children);
            }
        });
    }

    // Tab System
    initTabSystem() {
        this.tabs.set('welcome', {
            title: '欢迎.md',
            content: 'welcome-content',
            active: true
        });

        // Tab container event delegation
        document.getElementById('tab-container').addEventListener('click', (e) => {
            const tab = e.target.closest('.tab');
            if (tab) {
                const tabId = tab.dataset.tab;
                
                if (e.target.classList.contains('tab-close')) {
                    this.closeTab(tabId);
                } else {
                    this.switchTab(tabId);
                }
            }
        });
    }

    createTab(tabId, title, content) {
        if (this.tabs.has(tabId)) {
            this.switchTab(tabId);
            return;
        }

        // Create tab element
        const tabContainer = document.getElementById('tab-container');
        const newTab = document.createElement('div');
        newTab.className = 'tab';
        newTab.dataset.tab = tabId;
        newTab.innerHTML = `
            <span class="font-mono text-sm">${title}</span>
            <span class="tab-close" data-close="${tabId}">×</span>
        `;

        // Add tab with animation
        anime({
            targets: newTab,
            translateX: [-50, 0],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutQuad'
        });

        tabContainer.appendChild(newTab);

        // Store tab data
        this.tabs.set(tabId, {
            title,
            content,
            active: false
        });

        this.switchTab(tabId);
    }

    switchTab(tabId) {
        // Update tab appearance
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        const activeTab = document.querySelector(`[data-tab="${tabId}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }

        // Update content
        document.querySelectorAll('.content-tab').forEach(content => {
            content.style.display = 'none';
        });

        const content = document.getElementById(`content-${tabId}`);
        if (content) {
            content.style.display = 'block';
            anime({
                targets: content,
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 300,
                easing: 'easeOutQuad'
            });
        }

        this.activeTab = tabId;
        this.updateMinimap();
    }

    closeTab(tabId) {
        if (this.tabs.size <= 1) return; // Keep at least one tab

        const tab = this.tabs.get(tabId);
        if (!tab) return;

        // Remove tab element
        const tabElement = document.querySelector(`[data-tab="${tabId}"]`);
        if (tabElement) {
            anime({
                targets: tabElement,
                translateX: [0, 50],
                opacity: [1, 0],
                duration: 200,
                easing: 'easeOutQuad',
                complete: () => {
                    tabElement.remove();
                }
            });
        }

        // Remove content
        const contentElement = document.getElementById(`content-${tabId}`);
        if (contentElement) {
            contentElement.remove();
        }

        this.tabs.delete(tabId);

        // Switch to another tab if this was active
        if (this.activeTab === tabId) {
            const remainingTabs = Array.from(this.tabs.keys());
            if (remainingTabs.length > 0) {
                this.switchTab(remainingTabs[0]);
            }
        }
    }

    // File Operations
    openFile(filePath) {
        const fileName = filePath.split('/').pop();
        const tabId = fileName.replace(/[^a-zA-Z0-9]/g, '-');
        
        // Check if file is already open
        if (this.tabs.has(tabId)) {
            this.switchTab(tabId);
            return;
        }

        // Load file content
        const content = this.loadFileContent(filePath);
        this.createTab(tabId, fileName, content);
        this.renderFileContent(tabId, content);
    }

    loadFileContent(filePath) {
        // Mock file content - in real app this would be fetched
        const mockContent = {
            '/javascript/es6-features.md': {
                title: 'ES6新特性详解',
                content: `
# ES6新特性详解

## 简介
ECMAScript 6（简称ES6）是JavaScript语言的一次重大更新，带来了许多革命性的新特性。

## 主要特性

### 1. 箭头函数 (Arrow Functions)
\`\`\`javascript
// 传统函数
const add = function(a, b) {
    return a + b;
};

// 箭头函数
const add = (a, b) => a + b;
\`\`\`

### 2. 解构赋值 (Destructuring)
\`\`\`javascript
// 数组解构
const [first, second] = [1, 2];

// 对象解构
const { name, age } = { name: 'John', age: 30 };
\`\`\`

### 3. 模板字符串 (Template Literals)
\`\`\`javascript
const name = 'World';
const greeting = \`Hello, ${name}!\`;
\`\`\`

### 4. Promise
\`\`\`javascript
const fetchData = () => {
    return new Promise((resolve, reject) => {
        // 异步操作
        setTimeout(() => resolve('数据获取成功'), 1000);
    });
};
\`\`\`

## 总结
ES6为JavaScript带来了更现代化的语法和编程范式，大大提高了开发效率和代码可读性。
                `
            },
            '/react/hooks-deep-dive.md': {
                title: 'React Hooks深度解析',
                content: `
# React Hooks深度解析

## 什么是Hooks

Hooks是React 16.8引入的新特性，让你可以在函数组件中使用state和其他React特性。

## 基础Hooks

### useState
\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>你点击了 {count} 次</p>
            <button onClick={() => setCount(count + 1)}>
                点击我
            </button>
        </div>
    );
}
\`\`\`

### useEffect
\`\`\`javascript
import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        document.title = \`你点击了 ${count} 次\`;
    });
    
    return (
        <div>
            <p>你点击了 {count} 次</p>
            <button onClick={() => setCount(count + 1)}>
                点击我
            </button>
        </div>
    );
}
\`\`\`

## 自定义Hooks

\`\`\`javascript
function useWindowSize() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return size;
}
\`\`\`

## 最佳实践

1. 只在顶层调用Hooks，不要在循环、条件或嵌套函数中调用
2. 只在React函数组件或自定义Hooks中调用Hooks
                `
            }
        };

        return mockContent[filePath] || {
            title: '文章标题',
            content: '# 文章标题\\n\\n文章内容正在加载中...'
        };
    }

    renderFileContent(tabId, fileData) {
        const contentArea = document.getElementById('content-area');
        
        // Create new content container
        const contentDiv = document.createElement('div');
        contentDiv.id = `content-${tabId}`;
        contentDiv.className = 'content-tab';
        contentDiv.style.display = 'none';
        
        // Render markdown-like content
        const htmlContent = this.renderMarkdown(fileData.content);
        
        contentDiv.innerHTML = `
            <div class="max-w-4xl mx-auto">
                <div class="prose prose-invert prose-lg">
                    ${htmlContent}
                </div>
            </div>
        `;
        
        contentArea.appendChild(contentDiv);
    }

    renderMarkdown(markdown) {
        // Simple markdown parser
        let html = markdown
            .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-4 accent-green">$1</h1>')
            .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mb-3 accent-blue">$1</h2>')
            .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mb-2 accent-purple">$1</h3>')
            .replace(/```javascript\n([\s\S]*?)\n```/g, '<div class="code-block font-mono text-sm mb-4"><pre><code>$1</code></pre></div>')
            .replace(/`([^`]+)`/g, '<code class="bg-tertiary px-2 py-1 rounded text-accent-orange">$1</code>')
            .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-accent-green">$1</strong>')
            .replace(/\*([^*]+)\*/g, '<em class="text-accent-blue">$1</em>')
            .replace(/^- (.*$)/gm, '<li class="ml-4 mb-1">$1</li>')
            .replace(/(<li[^>]*>.*<\/li>)/s, '<ul class="list-disc mb-4">$1</ul>')
            .replace(/\n\n/g, '</p><p class="mb-4">')
            .replace(/^/, '<p class="mb-4">')
            .replace(/$/, '</p>');

        return html;
    }

    // Search Functionality
    initSearch() {
        const searchInput = document.getElementById('search-input');
        let searchTimeout;

        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.performSearch(e.target.value);
            }, 300);
        });
    }

    performSearch(query) {
        const treeItems = document.querySelectorAll('.tree-item');
        
        if (!query.trim()) {
            // Show all items
            treeItems.forEach(item => {
                item.style.display = 'block';
                item.classList.remove('search-highlight');
            });
            return;
        }

        const regex = new RegExp(query, 'gi');
        let hasResults = false;

        treeItems.forEach(item => {
            const text = item.textContent;
            const matches = regex.test(text);

            if (matches) {
                item.style.display = 'block';
                item.classList.add('search-highlight');
                hasResults = true;

                // Highlight matching text
                const node = item.querySelector('.tree-node span');
                if (node) {
                    node.innerHTML = node.textContent.replace(
                        regex,
                        `<span class="bg-accent-orange text-white px-1 rounded">${query}</span>`
                    );
                }
            } else {
                item.style.display = 'none';
                item.classList.remove('search-highlight');
            }
        });

        // Expand parent folders of search results
        if (hasResults) {
            const visibleItems = document.querySelectorAll('.tree-item[style="display: block;"]');
            visibleItems.forEach(item => {
                let parent = item.parentElement;
                while (parent && !parent.classList.contains('tree-children')) {
                    parent = parent.parentElement;
                }
                if (parent && parent.previousElementSibling) {
                    const folderNode = parent.previousElementSibling;
                    if (folderNode.dataset.expanded === 'false') {
                        this.toggleDirectory(folderNode, parent);
                    }
                }
            });
        }
    }

    // Mini Map System
    initMinimap() {
        this.minimap = document.getElementById('minimap');
        this.updateMinimap();
    }

    updateMinimap() {
        const activeContent = document.getElementById(`content-${this.activeTab}`);
        if (!activeContent) return;

        const headings = activeContent.querySelectorAll('h1, h2, h3, h4, h5, h6');
        const minimapContent = this.minimap.querySelector('.font-mono');
        
        if (headings.length === 0) {
            minimapContent.innerHTML = '<div class="text-secondary">暂无导航结构</div>';
            return;
        }

        let minimapHTML = '';
        headings.forEach((heading, index) => {
            const level = parseInt(heading.tagName.substring(1));
            const indent = '  '.repeat(level - 1);
            const text = heading.textContent.trim();
            
            minimapHTML += `<div class="mb-1" style="padding-left: ${(level - 1) * 8}px">
                <span class="cursor-pointer hover:text-accent-blue transition-colors" data-heading="${index}">
                    ${text}
                </span>
            </div>`;
        });

        minimapContent.innerHTML = minimapHTML;

        // Add click handlers for minimap navigation
        minimapContent.querySelectorAll('[data-heading]').forEach((item, index) => {
            item.addEventListener('click', () => {
                headings[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        this.updateMinimapViewport();
    }

    updateMinimapViewport() {
        const activeContent = document.getElementById(`content-${this.activeTab}`);
        const viewport = this.minimap.querySelector('.minimap-viewport');
        
        if (!activeContent || !viewport) return;

        const scrollTop = activeContent.scrollTop;
        const scrollHeight = activeContent.scrollHeight;
        const clientHeight = activeContent.clientHeight;
        
        const viewportTop = (scrollTop / scrollHeight) * 100;
        const viewportHeight = (clientHeight / scrollHeight) * 100;

        viewport.style.top = `${viewportTop}%`;
        viewport.style.height = `${viewportHeight}%`;
    }

    // Theme Toggle
    initThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const currentTheme = localStorage.getItem('theme') || 'dark';
        
        if (currentTheme === 'light') {
            this.toggleTheme();
        }

        themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    toggleTheme() {
        const root = document.documentElement;
        const isDark = root.style.getPropertyValue('--bg-primary') === '#1e1e1e';
        
        if (isDark) {
            // Switch to light theme
            root.style.setProperty('--bg-primary', '#ffffff');
            root.style.setProperty('--bg-secondary', '#f8f9fa');
            root.style.setProperty('--bg-tertiary', '#e9ecef');
            root.style.setProperty('--text-primary', '#212529');
            root.style.setProperty('--text-secondary', '#6c757d');
            localStorage.setItem('theme', 'light');
        } else {
            // Switch to dark theme
            root.style.setProperty('--bg-primary', '#1e1e1e');
            root.style.setProperty('--bg-secondary', '#2d2d30');
            root.style.setProperty('--bg-tertiary', '#3e3e42');
            root.style.setProperty('--text-primary', '#cccccc');
            root.style.setProperty('--text-secondary', '#808080');
            localStorage.setItem('theme', 'dark');
        }
    }

    // Scroll Effects
    initScrollEffects() {
        const contentArea = document.getElementById('content-area');
        
        contentArea.addEventListener('scroll', () => {
            this.updateMinimapViewport();
            this.updateReadingProgress();
        });

        // Smooth scroll for internal links
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const target = document.querySelector(e.target.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }

    updateReadingProgress() {
        const activeContent = document.getElementById(`content-${this.activeTab}`);
        if (!activeContent) return;

        const scrollTop = activeContent.scrollTop;
        const scrollHeight = activeContent.scrollHeight - activeContent.clientHeight;
        const progress = Math.round((scrollTop / scrollHeight) * 100);

        const progressBar = document.querySelector('.bg-accent-green');
        const progressText = document.querySelector('.accent-green');
        
        if (progressBar && progressText) {
            progressBar.style.width = `${progress}%`;
            progressText.textContent = `${progress}%`;
        }
    }

    // Welcome Content
    loadWelcomeContent() {
        // Add some interactive elements to welcome page
        const stats = document.querySelectorAll('.hover-glow');
        stats.forEach((stat, index) => {
            anime({
                targets: stat,
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 600,
                delay: index * 200,
                easing: 'easeOutElastic(1, .8)'
            });
        });

        // Animate featured articles
        const articles = document.querySelectorAll('.hover-lift');
        articles.forEach((article, index) => {
            anime({
                targets: article,
                translateY: [50, 0],
                opacity: [0, 1],
                duration: 800,
                delay: 1000 + index * 300,
                easing: 'easeOutQuad'
            });
        });
    }

    // Utility Methods
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-20 right-4 p-4 rounded-lg shadow-lg z-50 ${
            type === 'success' ? 'bg-accent-green' : 
            type === 'error' ? 'bg-accent-orange' : 'bg-accent-blue'
        } text-white`;
        notification.textContent = message;

        document.body.appendChild(notification);

        anime({
            targets: notification,
            translateX: [300, 0],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutQuad'
        });

        setTimeout(() => {
            anime({
                targets: notification,
                translateX: [0, 300],
                opacity: [1, 0],
                duration: 300,
                easing: 'easeOutQuad',
                complete: () => {
                    notification.remove();
                }
            });
        }, 3000);
    }
}

// Global functions
function openArticle(articleId) {
    const blog = window.geekBlog;
    if (blog) {
        blog.showNotification('正在打开文章...', 'info');
        // Simulate article opening
        setTimeout(() => {
            blog.showNotification('文章已打开', 'success');
        }, 1000);
    }
}

// Initialize the blog when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.geekBlog = new GeekBlog();
    
    // Add some CSS for search highlighting
    const style = document.createElement('style');
    style.textContent = `
        .search-highlight {
            animation: searchPulse 0.3s ease-out;
        }
        
        @keyframes searchPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); background-color: var(--bg-tertiary); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    const blog = window.geekBlog;
    if (!blog) return;

    // Ctrl/Cmd + K: Focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('search-input').focus();
    }

    // Ctrl/Cmd + W: Close current tab
    if ((e.ctrlKey || e.metaKey) && e.key === 'w') {
        e.preventDefault();
        blog.closeTab(blog.activeTab);
    }

    // Ctrl/Cmd + 1-9: Switch to tab
    if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '9') {
        e.preventDefault();
        const tabIndex = parseInt(e.key) - 1;
        const tabs = Array.from(blog.tabs.keys());
        if (tabs[tabIndex]) {
            blog.switchTab(tabs[tabIndex]);
        }
    }
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GeekBlog;
}