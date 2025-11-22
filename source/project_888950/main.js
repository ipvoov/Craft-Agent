// 文章数据管理
class ArticleManager {
    constructor() {
        this.articles = [
            {
                id: 1,
                title: "前端开发趋势 2024",
                summary: "探讨现代前端开发技术栈的发展趋势，包括框架选择、性能优化等方面。",
                cover: "https://tse2.mm.bing.net/th/id/OIP.6wCH2SNhmVpjtZzylAjJ1QHaFj?w=250&h=250&c=7&rs=1&o=5&pid=1.1",
                date: "2024-01-15",
                tags: ["前端", "JavaScript"],
                views: 120
            },
            {
                id: 2,
                title: "JavaScript 异步编程",
                summary: "深入理解 JavaScript 中的异步编程概念，包括 Promise、async/await 等。",
                cover: "https://tse2.mm.bing.net/th/id/OIP.Zdf1_rquZvsnXmSffzpGOQHaFj?w=250&h=250&c=7&rs=1&o=5&pid=1.1",
                date: "2024-01-10",
                tags: ["JavaScript", "异步"],
                views: 95
            },
            {
                id: 3,
                title: "CSS Grid 布局完全指南",
                summary: "全面介绍 CSS Grid 布局的使用方法，帮助你构建现代化的响应式页面。",
                cover: "https://tse3.mm.bing.net/th/id/OIP.hpPS1N8FKsI58dOEfTZRqwAAAA?w=250&h=250&c=7&rs=1&o=5&pid=1.1",
                date: "2024-01-05",
                tags: ["CSS", "布局"],
                views: 150
            },
            {
                id: 4,
                title: "React 性能优化技巧",
                summary: "分享 React 应用性能优化的实用技巧，提升用户体验。",
                cover: "https://tse1.mm.bing.net/th/id/OIP.8b1Uqc0bBCJPVozy86dn7wHaEK?w=250&h=250&c=7&rs=1&o=5&pid=1.1",
                date: "2023-12-20",
                tags: ["React", "性能"],
                views: 210
            },
            {
                id: 5,
                title: "Node.js 最佳实践",
                summary: "探讨 Node.js 开发中的最佳实践，包括错误处理、性能优化等方面。",
                cover: "https://tse1.mm.bing.net/th/id/OIP.pS6Apv7y6JOVH3ygsSPE7AHaFj?w=250&h=250&c=7&rs=1&o=5&pid=1.1",
                date: "2023-12-10",
                tags: ["Node.js", "后端"],
                views: 175
            },
            {
                id: 6,
                title: "Python 数据分析入门",
                summary: "介绍 Python 在数据分析领域的应用，包括常用库和工具。",
                cover: "https://tse1.mm.bing.net/th/id/OIP.sRMkxIu96sTnz7veeZpWlQHaF1?w=250&h=250&c=7&rs=1&o=5&pid=1.1",
                date: "2023-12-01",
                tags: ["Python", "数据分析"],
                views: 130
            }
        ];
    }

    getAllArticles() {
        return this.articles;
    }

    getLatestArticles(count = 3) {
        return this.articles.slice(0, count);
    }

    getArticleById(id) {
        return this.articles.find(article => article.id === id);
    }

    getArticlesByTag(tag) {
        return this.articles.filter(article => article.tags.includes(tag));
    }

    getAllTags() {
        const tags = new Set();
        this.articles.forEach(article => {
            article.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags);
    }

    incrementView(id) {
        const article = this.getArticleById(id);
        if (article) {
            article.views += 1;
        }
    }
}

// 主题管理器
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.applyTheme(this.currentTheme);
    }

    toggleTheme() {
        if (this.currentTheme === 'light') {
            this.currentTheme = 'dark';
        } else {
            this.currentTheme = 'light';
        }
        this.applyTheme(this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
    }

    applyTheme(theme) {
        const body = document.body;
        if (theme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }

    getTheme() {
        return this.currentTheme;
    }
}

// 页面交互管理器
class PageManager {
    constructor() {
        this.articleManager = new ArticleManager();
        this.themeManager = new ThemeManager();
        this.bindEvents();
    }

    bindEvents() {
        // 主题切换事件
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.themeManager.toggleTheme();
                this.updateThemeIcon();
            });
        }

        // 页面加载时更新图标
        this.updateThemeIcon();
    }

    updateThemeIcon() {
        const themeIcon = document.getElementById('theme-icon');
        if (!themeIcon) return;

        if (this.themeManager.getTheme() === 'dark') {
            themeIcon.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z');
        } else {
            themeIcon.setAttribute('d', 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z');
        }
    }

    // 初始化回到顶部按钮
    initBackToTop() {
        const backToTopButton = document.getElementById('back-to-top');
        if (!backToTopButton) return;

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 初始化技能进度条动画
    initSkillBars() {
        const skillProgresses = document.querySelectorAll('.skill-progress');
        if (!skillProgresses.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillProgresses.forEach(progress => {
                        const width = progress.style.width;
                        progress.style.width = '0%';
                        setTimeout(() => {
                            progress.style.width = width;
                        }, 500);
                    });
                    observer.unobserve(entry.target);
                }
            });
        });

        const skillSection = document.querySelector('.skill-bar');
        if (skillSection) {
            observer.observe(skillSection);
        }
    }

    // 初始化文章过滤
    initArticleFilter() {
        const filterLinks = document.querySelectorAll('.filter-link');
        filterLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const tag = e.target.getAttribute('data-tag');
                this.filterArticles(tag);
            });
        });
    }

    filterArticles(tag) {
        const allArticles = this.articleManager.getAllArticles();
        let filteredArticles;
        
        if (tag === 'all') {
            filteredArticles = allArticles;
        } else {
            filteredArticles = this.articleManager.getArticlesByTag(tag);
        }

        this.renderArticles(filteredArticles);
    }

    renderArticles(articles) {
        const articlesContainer = document.getElementById('articles-container');
        if (!articlesContainer) return;

        articlesContainer.innerHTML = articles.map(article => `
            <div class="article-card bg-white dark:bg-gray-800 p-6">
                <img src="${article.cover}" alt="${article.title}" class="w-full h-48 object-cover rounded-md mb-4">
                <h3 class="text-xl font-bold mb-2">${article.title}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">${article.summary}</p>
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-500 dark:text-gray-400">${article.date}</span>
                    <span class="tag bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">${article.tags[0]}</span>
                </div>
            </div>
        `).join('');
    }
}

// 初始化页面管理器
document.addEventListener('DOMContentLoaded', () => {
    const pageManager = new PageManager();
    pageManager.initBackToTop();
    pageManager.initSkillBars();
    pageManager.initArticleFilter();
});