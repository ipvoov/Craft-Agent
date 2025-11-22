// 全局JavaScript逻辑

// 文章管理系统
class ArticleManager {
    constructor() {
        this.articles = JSON.parse(localStorage.getItem('articles')) || [
            {
                id: 1,
                title: "前端开发技术趋势2025",
                content: "探讨2025年前端开发的主要技术趋势，包括WebAssembly、Web Components、CSS的新特性等...",
                date: "2025-01-15",
                tags: ["技术", "前端"],
                cover: "https://tse2.mm.bing.net/th/id/OIP.DKfwOUVGyuKtR5OP-dKLIgHaE7?w=250&h=250&c=7&rs=1&o=5&pid=1.1"
            },
            {
                id: 2,
                title: "React最佳实践指南",
                content: "在React项目中应用最佳实践，提高代码质量和开发效率...",
                date: "2025-01-10",
                tags: ["React", "JavaScript"],
                cover: "https://tse2.mm.bing.net/th/id/OIP.pg0NCnwsB3awtssfpk_uTgHaFE?w=250&h=250&c=7&rs=1&o=5&pid=1.1"
            },
            {
                id: 3,
                title: "CSS Grid布局完全指南",
                content: "深入学习CSS Grid布局，掌握现代响应式设计的核心技术...",
                date: "2025-01-05",
                tags: ["CSS", "布局"],
                cover: "https://tse4.mm.bing.net/th/id/OIP.w3IRqqIiNhqTfk5hE1uUEwHaCe?w=250&h=250&c=7&rs=1&o=5&pid=1.1"
            },
            {
                id: 4,
                title: "Node.js性能优化技巧",
                content: "分享Node.js应用性能优化的实战技巧，包括内存管理、异步处理等方面...",
                date: "2024-12-28",
                tags: ["后端", "Node.js"],
                cover: "https://tse3.mm.bing.net/th/id/OIP.MCC-UGoPFCAQ0MQxtlOamQHaHa?w=250&h=250&c=7&rs=1&o=5&pid=1.1"
            },
            {
                id: 5,
                title: "UI设计原则与实践",
                content: "探讨现代UI设计的核心原则，以及如何在实际项目中应用这些原则...",
                date: "2024-12-20",
                tags: ["设计", "UI"],
                cover: "https://tse4.mm.bing.net/th/id/OIP.EyUvrKX51GrNsH40J0V3RgHaHl?w=250&h=250&c=7&rs=1&o=5&pid=1.1"
            },
            {
                id: 6,
                title: "生活感悟：时间管理的艺术",
                content: "分享个人在时间管理方面的心得体会，探讨如何在忙碌的工作中保持生活平衡...",
                date: "2024-12-15",
                tags: ["生活", "感悟"],
                cover: "https://tse4.mm.bing.net/th/id/OIP.KGSJANOzw9v80wShD3BXfAHaHa?w=250&h=250&c=7&rs=1&o=5&pid=1.1"
            },
            {
                id: 7,
                title: "Vue 3新特性解读",
                content: "深入解析Vue 3的核心新特性，包括Composition API、性能提升等...",
                date: "2024-12-10",
                tags: ["技术", "Vue"],
                cover: "https://tse2.mm.bing.net/th/id/OIP.nXzTdVx8-vngpIWn8KlESAHaE7?w=250&h=250&c=7&rs=1&o=5&pid=1.1"
            },
            {
                id: 8,
                title: "数据库设计最佳实践",
                content: "介绍数据库设计的核心原则，以及如何在实际项目中应用这些原则...",
                date: "2024-12-05",
                tags: ["后端", "数据库"],
                cover: "https://tse3.mm.bing.net/th/id/OIP.PfdGp2dUuqQ4pn0VkwaXpQHaFj?w=250&h=250&c=7&rs=1&o=5&pid=1.1"
            }
        ];
        this.readingHistory = JSON.parse(localStorage.getItem('readingHistory')) || [];
        this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    }

    // 获取所有文章
    getAllArticles() {
        return this.articles;
    }

    // 根据ID获取文章
    getArticleById(id) {
        return this.articles.find(article => article.id === id);
    }

    // 根据标签筛选文章
    filterByTag(tag) {
        if (tag === 'all') return this.articles;
        return this.articles.filter(article => article.tags.includes(tag));
    }

    // 搜索文章
    searchArticles(query) {
        const q = query.toLowerCase();
        return this.articles.filter(article => 
            article.title.toLowerCase().includes(q) ||
            article.content.toLowerCase().includes(q) ||
            article.tags.some(tag => tag.toLowerCase().includes(q))
        );
    }

    // 添加阅读历史
    addReadingHistory(articleId) {
        if (!this.readingHistory.includes(articleId)) {
            this.readingHistory.unshift(articleId);
            this.readingHistory = this.readingHistory.slice(0, 20); // 只保留最近20条
            this.saveToLocalStorage();
        }
    }

    // 获取阅读历史文章
    getReadingHistory() {
        return this.readingHistory.map(id => this.getArticleById(id)).filter(Boolean);
    }

    // 添加到收藏
    addToFavorites(articleId) {
        if (!this.favorites.includes(articleId)) {
            this.favorites.push(articleId);
            this.saveToLocalStorage();
            return true;
        }
        return false;
    }

    // 从收藏移除
    removeFromFavorites(articleId) {
        this.favorites = this.favorites.filter(id => id !== articleId);
        this.saveToLocalStorage();
    }

    // 检查是否在收藏中
    isInFavorites(articleId) {
        return this.favorites.includes(articleId);
    }

    // 获取收藏文章
    getFavorites() {
        return this.favorites.map(id => this.getArticleById(id)).filter(Boolean);
    }

    // 保存到本地存储
    saveToLocalStorage() {
        localStorage.setItem('articles', JSON.stringify(this.articles));
        localStorage.setItem('readingHistory', JSON.stringify(this.readingHistory));
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
}

// 用户交互模块
class UserInteraction {
    constructor() {
        this.darkMode = localStorage.getItem('darkMode') === 'true';
        this.applyDarkMode();
    }

    // 切换深色模式
    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        this.applyDarkMode();
        localStorage.setItem('darkMode', this.darkMode);
    }

    // 应用深色模式
    applyDarkMode() {
        if (this.darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }
}

// 工具函数
class Utils {
    // 格式化日期
    static formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // 获取唯一ID
    static generateId() {
        return Date.now();
    }

    // 防抖函数
    static debounce(func, wait) {
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

    // 节流函数
    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
}

// 初始化全局实例
const articleManager = new ArticleManager();
const userInteraction = new UserInteraction();

// DOM加载完成后执行的初始化函数
document.addEventListener('DOMContentLoaded', function() {
    // 初始化导航高亮
    initNavigation();
    
    // 初始化页面特定功能
    initPageSpecificFeatures();
    
    // 绑定全局事件
    bindGlobalEvents();
});

// 初始化导航高亮
function initNavigation() {
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

// 初始化页面特定功能
function initPageSpecificFeatures() {
    const currentPath = window.location.pathname.split('/').pop();
    
    switch(currentPath) {
        case 'articles.html':
            initArticlesPage();
            break;
        case 'index.html':
            initHomePage();
            break;
        case 'about.html':
            initAboutPage();
            break;
    }
}

// 初始化首页功能
function initHomePage() {
    const articles = articleManager.getAllArticles().slice(0, 3);
    renderArticles(articles, 'home');
}

// 初始化文章页功能
function initArticlesPage() {
    initSearchAndFilter();
    initPagination();
    updateArticlesDisplay();
}

// 初始化关于页功能
function initAboutPage() {
    // 已在about.html中实现技能条动画
}

// 初始化搜索和筛选功能
function initSearchAndFilter() {
    const searchBox = document.getElementById('searchBox');
    const filterTags = document.querySelectorAll('.filter-tag');
    
    if (searchBox) {
        const debouncedSearch = Utils.debounce(() => {
            updateArticlesDisplay();
        }, 300);
        
        searchBox.addEventListener('input', debouncedSearch);
    }
    
    if (filterTags.length > 0) {
        filterTags.forEach(tag => {
            tag.addEventListener('click', () => {
                filterTags.forEach(t => t.classList.remove('active'));
                tag.classList.add('active');
                updateArticlesDisplay();
            });
        });
    }
}

// 初始化分页功能
function initPagination() {
    // 分页逻辑在articles.html中已实现
}

// 更新文章显示
function updateArticlesDisplay() {
    const searchQuery = document.getElementById('searchBox')?.value || '';
    const activeFilter = document.querySelector('.filter-tag.active')?.dataset.tag || 'all';
    
    let articles = articleManager.getAllArticles();
    
    if (activeFilter !== 'all') {
        articles = articleManager.filterByTag(activeFilter);
    }
    
    if (searchQuery) {
        articles = articleManager.searchArticles(searchQuery);
    }
    
    renderArticles(articles, 'articles');
}

// 渲染文章函数
function renderArticles(articles, pageType) {
    const container = document.getElementById('articles-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    articles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.className = 'article-card';
        
        const tagsHtml = article.tags.map(tag => 
            `<span class="tag">${tag}</span>`
        ).join('');
        
        articleCard.innerHTML = `
            <img src="${article.cover}" alt="${article.title}" class="article-image">
            <div class="article-content">
                <h3 class="article-title">${article.title}</h3>
                <div class="article-date">${Utils.formatDate(article.date)}</div>
                <p class="article-excerpt">${article.content}</p>
                <div class="article-tags">${tagsHtml}</div>
            </div>
        `;
        
        // 添加点击事件记录阅读历史
        articleCard.addEventListener('click', () => {
            articleManager.addReadingHistory(article.id);
        });
        
        container.appendChild(articleCard);
    });
}

// 绑定全局事件
function bindGlobalEvents() {
    // 回到顶部按钮
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', Utils.throttle(() => {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        }, 100));
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// 导出模块，以备在其他地方使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ArticleManager,
        UserInteraction,
        Utils,
        articleManager,
        userInteraction
    };
}