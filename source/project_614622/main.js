// 文章数据管理
const articleData = {
    articles: [
        {
            id: 1,
            title: "现代前端框架对比分析",
            excerpt: "深入探讨React、Vue和Svelte等现代前端框架的优缺点及适用场景",
            date: "2024-05-15",
            tags: ["前端", "React", "Vue"],
            image: "resources/post-sample-1.jpg",
            content: "# 现代前端框架对比分析\n\n## React\n\nReact 是 Facebook 开发的用于构建用户界面的 JavaScript 库。其核心思想是组件化，允许开发者将 UI 拆分为独立的、可复用的部分。\n\n### 优点\n- 组件化架构\n- 虚拟DOM\n- 庞大的生态系统\n\n## Vue\n\nVue 是一个渐进式 JavaScript 框架，易于上手且功能强大。\n\n### 优点\n- 学习曲线平缓\n- 双向数据绑定\n- 完整的解决方案\n\n## Svelte\n\nSvelte 将组件转换为高效的 JavaScript 代码，运行时不需要额外的框架库。\n\n### 优点\n- 更小的打包体积\n- 简洁的API\n- 编译时优化"
        },
        {
            id: 2,
            title: "JavaScript异步编程完全指南",
            excerpt: "全面解析JavaScript中的异步编程模式，包括Promise、async/await等",
            date: "2024-05-10",
            tags: ["JavaScript", "异步编程"],
            image: "https://tse3.mm.bing.net/th/id/OIP.VPq17NfjMQ1GifYp2x1QTAHaEJ?w=250&h=250&c=7&rs=1&o=5&pid=1.1",
            content: "# JavaScript异步编程完全指南\n\n## 回调函数\n\n早期 JavaScript 使用回调函数处理异步操作，但容易形成回调地狱。\n\n```javascript\ngetData(function(a) {\n  getMoreData(a, function(b) {\n    getEvenMoreData(b, function(c) {\n      // ...\n    });\n  });\n});\n```\n\n## Promise\n\nPromise 是异步编程的一种解决方案，避免了回调地狱的问题。\n\n```javascript\nfetch('/api/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(error));\n```\n\n## async/await\n\nasync/await 是基于 Promise 的语法糖，使异步代码看起来像同步代码。\n\n```javascript\nasync function fetchData() {\n  try {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error(error);\n  }\n}\n```"
        },
        {
            id: 3,
            title: "CSS Grid布局实战技巧",
            excerpt: "通过实际案例展示CSS Grid的强大功能和实用技巧",
            date: "2024-05-05",
            tags: ["CSS", "布局"],
            image: "https://tse2.mm.bing.net/th/id/OIP.E3WZVnuubIK4OqhSTF3cqwHaEK?w=250&h=250&c=7&rs=1&o=5&pid=1.1",
            content: "# CSS Grid布局实战技巧\n\n## Grid基础\n\nCSS Grid 是一个二维布局系统，可以同时处理行和列。\n\n```css\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 20px;\n}\n```\n\n## 项目定位\n\nGrid 允许精确控制每个项目的行列位置。\n\n```css\n.grid-item {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n}\n```\n\n## 响应式网格\n\n结合媒体查询实现响应式设计。\n\n```css\n@media (max-width: 768px) {\n  .grid-container {\n    grid-template-columns: 1fr;\n  }\n}\n```"
        }
    ],
    
    // 获取所有文章
    getAllArticles: function() {
        return this.articles;
    },
    
    // 根据ID获取文章
    getArticleById: function(id) {
        return this.articles.find(article => article.id == id);
    },
    
    // 根据标签筛选文章
    getArticlesByTag: function(tag) {
        return this.articles.filter(article => article.tags.includes(tag));
    }
};

// 主题管理
const themeManager = {
    // 检查当前是否为夜间模式
    isDarkMode: function() {
        return localStorage.getItem('darkMode') === 'true';
    },
    
    // 切换主题
    toggle: function() {
        const isDarkMode = this.isDarkMode();
        const newMode = !isDarkMode;
        localStorage.setItem('darkMode', newMode);
        this.apply(newMode);
    },
    
    // 应用主题
    apply: function(isDarkMode) {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.querySelector('nav').classList.add('nav-dark');
        } else {
            document.body.classList.remove('dark-mode');
            document.querySelector('nav').classList.remove('nav-dark');
        }
        
        // 更新按钮文本
        const themeBtn = document.getElementById('themeToggle');
        if (themeBtn) {
            themeBtn.textContent = isDarkMode ? '日间模式' : '夜间模式';
        }
    },
    
    // 初始化主题
    init: function() {
        const isDarkMode = this.isDarkMode();
        this.apply(isDarkMode);
    }
};

// 搜索功能
const search = {
    // 搜索文章
    articles: function(query) {
        return articleData.getAllArticles().filter(article => {
            return article.title.toLowerCase().includes(query.toLowerCase()) ||
                   article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
                   article.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
        });
    }
};

// 阅读进度
const readingProgress = {
    // 更新滚动进度条
    updateScrollProgress: function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            progressBar.style.width = scrolled + '%';
        }
    },
    
    // 更新阅读进度条（文章详情页专用）
    updateReadingProgress: function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const readingProgress = document.getElementById('readingProgress');
        if (readingProgress) {
            readingProgress.style.width = scrolled + '%';
        }
    }
};

// 工具函数
const utils = {
    // URL参数解析
    getUrlParameter: function(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    },
    
    // 防抖函数
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// 生成文章卡片的工具函数
function generateArticleCard(article) {
    const tagsHtml = article.tags.map(tag => 
        `<span class="tag bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">${tag}</span>`
    ).join('');
    
    return `
        <div class="card bg-white dark:bg-slate-800 shadow-md overflow-hidden">
            <img src="${article.image}" alt="${article.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${article.title}</h3>
                <p class="text-slate-600 dark:text-slate-400 mb-4">${article.excerpt}</p>
                <div class="flex justify-between items-center">
                    <span class="text-sm text-slate-500 dark:text-slate-400">${article.date}</span>
                    <a href="articles.html?article=${article.id}" class="text-blue-600 dark:text-blue-400 hover:underline">阅读更多</a>
                </div>
                <div class="mt-4">
                    ${tagsHtml}
                </div>
            </div>
        </div>
    `;
}

// 滚动到指定元素
function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// 初始化全局功能
function initGlobalFeatures() {
    // 初始化主题
    themeManager.init();
    
    // 添加主题切换事件监听
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', themeManager.toggle);
    }
    
    // 添加滚动进度监听
    window.addEventListener('scroll', utils.debounce(readingProgress.updateScrollProgress, 10));
}

// 在DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', initGlobalFeatures);