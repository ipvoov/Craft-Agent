// 文章数据
const articles = [
    {
        id: 1,
        title: "现代前端开发技术趋势",
        excerpt: "探讨2024年前端开发领域的最新趋势和技术方向，包括框架、工具和最佳实践。了解行业变化，把握未来方向，为项目选择合适技术栈。",
        image: "https://tse2.mm.bing.net/th/id/OIP.Zdf1_rquZvsnXmSffzpGOQHaFj?w=250&h=250&c=7&rs=1&o=5&pid=1.1",
        tags: ["前端开发", "JavaScript"],
        date: "2024-11-20",
        readTime: "5 分钟"
    },
    {
        id: 2,
        title: "UI/UX设计原则解析",
        excerpt: "深入了解用户界面和用户体验设计的核心原则，以及如何应用于实际项目中。通过真实案例分析，展示优秀设计如何提升产品价值。",
        image: "https://tse1.mm.bing.net/th/id/OIP.pS6Apv7y6JOVH3ygsSPE7AHaFj?w=250&h=250&c=7&rs=1&o=5&pid=1.1",
        tags: ["设计", "用户体验"],
        date: "2024-11-18",
        readTime: "7 分钟"
    },
    {
        id: 3,
        title: "提升开发效率的工具推荐",
        excerpt: "分享几款能够显著提升开发效率的工具和插件，涵盖代码编辑、调试和部署等环节。包含使用技巧和配置建议，助你事半功倍。",
        image: "https://tse1.mm.bing.net/th/id/OIP.0GNShlIPWV1G8CjUEAiAlwHaKa?w=250&h=250&c=7&rs=1&o=5&pid=1.1",
        tags: ["工具", "效率"],
        date: "2024-11-15",
        readTime: "6 分钟"
    },
    {
        id: 4,
        title: "Node.js最佳实践指南",
        excerpt: "深入探讨Node.js开发中的最佳实践，包括错误处理、性能优化和安全防护。通过实际案例演示如何构建高效、稳定的后端服务。",
        image: "https://tse1.mm.bing.net/th/id/OIP.8b1Uqc0bBCJPVozy86dn7wHaEK?w=250&h=250&c=7&rs=1&o=5&pid=1.1",
        tags: ["后端开发", "Node.js"],
        date: "2024-11-10",
        readTime: "8 分钟"
    },
    {
        id: 5,
        title: "CSS Grid布局完全指南",
        excerpt: "详细介绍CSS Grid布局的各个方面，从基础概念到高级技巧。通过实例演示如何使用Grid构建复杂而灵活的网页布局。",
        image: "https://tse2.mm.bing.net/th/id/OIP.6wCH2SNhmVpjtZzylAjJ1QHaFj?w=250&h=250&c=7&rs=1&o=5&pid=1.1",
        tags: ["前端开发", "CSS"],
        date: "2024-11-05",
        readTime: "10 分钟"
    },
    {
        id: 6,
        title: "React性能优化策略",
        excerpt: "探讨在React应用中进行性能优化的各种策略，包括组件懒加载、状态管理优化和虚拟列表等技术。提升用户体验的关键。",
        image: "https://tse4.mm.bing.net/th/id/OIP.qUZaFQkMN3aWano-teWWzQHaEy?w=250&h=250&c=7&rs=1&o=5&pid=1.1",
        tags: ["前端开发", "React"],
        date: "2024-10-28",
        readTime: "9 分钟"
    }
];

// 当前页面
const currentPage = window.location.pathname.split('/').pop();

// 初始化页面
function initPage() {
    if (currentPage === 'index.html' || currentPage === '') {
        renderFeaturedArticles();
    } else if (currentPage === 'articles.html') {
        renderArticleList();
        setupFilter();
    }
}

// 渲染首页精选文章
function renderFeaturedArticles() {
    const featuredContainer = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3.gap-6');
    if (featuredContainer) {
        const featuredArticles = articles.slice(0, 3);
        featuredContainer.innerHTML = '';
        
        featuredArticles.forEach(article => {
            const articleCard = document.createElement('div');
            articleCard.className = 'article-card bg-white rounded-xl shadow-md overflow-hidden';
            articleCard.innerHTML = `
                <img src="${article.image}" alt="文章配图" class="w-full h-48 object-cover">
                <div class="p-6">
                    <div class="flex flex-wrap mb-3">
                        ${article.tags.map(tag => `<span class="tag bg-indigo-100 text-indigo-800">${tag}</span>`).join('')}
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">${article.title}</h3>
                    <p class="text-gray-600 mb-4">${article.excerpt}</p>
                    <a href="#" class="text-indigo-600 font-medium hover:underline">阅读更多 →</a>
                </div>
            `;
            featuredContainer.appendChild(articleCard);
        });
    }
}

// 渲染文章列表页
function renderArticleList(articlesToRender = articles) {
    const listContainer = document.querySelector('.space-y-6');
    if (listContainer) {
        listContainer.innerHTML = '';
        
        articlesToRender.forEach(article => {
            const articleItem = document.createElement('div');
            articleItem.className = 'article-card bg-white rounded-xl shadow-md overflow-hidden';
            articleItem.innerHTML = `
                <div class="p-6">
                    <div class="flex justify-between items-start">
                        <div>
                            <div class="flex flex-wrap mb-3">
                                ${article.tags.map(tag => `<span class="tag bg-indigo-100 text-indigo-800">${tag}</span>`).join('')}
                            </div>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">${article.title}</h3>
                            <p class="text-gray-600 mb-4">${article.excerpt}</p>
                            <div class="flex items-center text-sm text-gray-500">
                                <span>发布于 ${formatDate(article.date)}</span>
                                <span class="mx-2">•</span>
                                <span>阅读时长 ${article.readTime}</span>
                            </div>
                        </div>
                        <img src="${article.image}" alt="文章配图" class="w-32 h-32 rounded-lg object-cover hidden md:block">
                    </div>
                </div>
            `;
            listContainer.appendChild(articleItem);
        });
    }
}

// 设置过滤功能
function setupFilter() {
    const searchInput = document.querySelector('input[placeholder="搜索文章..."]');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = articles.filter(article => 
                article.title.toLowerCase().includes(query) || 
                article.excerpt.toLowerCase().includes(query) ||
                article.tags.some(tag => tag.toLowerCase().includes(query))
            );
            renderArticleList(filtered);
        });
    }
    
    // 添加分类过滤
    const categoryItems = document.querySelectorAll('.sidebar-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            // 移除所有激活状态
            categoryItems.forEach(i => i.classList.remove('active'));
            // 添加当前激活状态
            item.classList.add('active');
            
            const category = item.textContent.trim();
            if (category === '全部文章') {
                renderArticleList(articles);
            } else {
                const filtered = articles.filter(article => 
                    article.tags.includes(category)
                );
                renderArticleList(filtered);
            }
        });
    });
}

// 格式化日期
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('zh-CN', options);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initPage);