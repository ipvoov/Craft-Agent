// 文章数据
const articles = [
    {
        id: 1,
        title: "现代Web开发技术栈解析",
        excerpt: "探讨当前最流行的前端框架与后端技术，为开发者提供技术选型建议...",
        date: "2024-05-15",
        views: 125,
        category: "技术",
        image: "https://tse2.mm.bing.net/th/id/OIP.2Y8ehYKa4Nt3kEjpNqmNNQAAAA?w=250&h=250&c=7&rs=1&o=5&pid=1.1"
    },
    {
        id: 2,
        title: "高效学习方法分享",
        excerpt: "基于认知科学的高效学习策略，帮助你在短时间内掌握更多知识...",
        date: "2024-05-10",
        views: 98,
        category: "生活",
        image: "https://tse1.mm.bing.net/th/id/OIP.Rfxu5dSPAlFNTAPoKUOMzAHaKa?w=250&h=250&c=7&rs=1&o=5&pid=1.1"
    },
    {
        id: 3,
        title: "城市漫步与摄影",
        excerpt: "记录城市街头的瞬间美好，分享摄影技巧与构图心得...",
        date: "2024-05-05",
        views: 142,
        category: "旅行",
        image: "https://tse2.mm.bing.net/th/id/OIP.uH0mAgxyE6NWV5iJxehHmAHaFN?w=250&h=250&c=7&rs=1&o=5&pid=1.1"
    },
    {
        id: 4,
        title: "读书笔记：《人性的弱点》",
        excerpt: "总结阅读《人性的弱点》后的收获与感悟，探讨人际关系的智慧...",
        date: "2024-04-28",
        views: 87,
        category: "读书",
        image: "https://tse1.mm.bing.net/th/id/OIP.zfH9zP2NDdlX9z8jWnjVfAAAAA?w=250&h=250&c=7&rs=1&o=5&pid=1.1"
    },
    {
        id: 5,
        title: "人工智能发展趋势",
        excerpt: "分析当前AI技术的发展现状与未来趋势，探讨对社会的影响...",
        date: "2024-04-20",
        views: 210,
        category: "技术",
        image: "https://tse4.mm.bing.net/th/id/OIP.Bej9cmw3d4N0hV0ckMBCZgHaFC?w=250&h=250&c=7&rs=1&o=5&pid=1.1"
    }
];

// 分类数据
const categories = [
    { name: "全部", count: 5 },
    { name: "技术", count: 2 },
    { name: "生活", count: 1 },
    { name: "旅行", count: 1 },
    { name: "读书", count: 1 }
];

// 当前页面状态
const state = {
    currentPage: 1,
    articlesPerPage: 3,
    selectedCategory: "全部",
    selectedTag: "全部"
};

// 工具函数
const renderArticles = () => {
    const filteredArticles = articles.filter(article => {
        const matchesCategory = state.selectedCategory === "全部" || article.category === state.selectedCategory;
        const matchesTag = state.selectedTag === "全部" || article.category === state.selectedTag;
        return matchesCategory && matchesTag;
    });

    const startIndex = (state.currentPage - 1) * state.articlesPerPage;
    const paginatedArticles = filteredArticles.slice(startIndex, startIndex + state.articlesPerPage);

    const articlesContainer = document.querySelector('.articles-grid') || document.querySelector('.article-list');
    if (!articlesContainer) return;

    articlesContainer.innerHTML = '';
    
    if(document.querySelector('.articles-grid')) {
        // 首页文章网格
        paginatedArticles.forEach(article => {
            const articleCard = document.createElement('div');
            articleCard.className = 'article-card';
            articleCard.innerHTML = `
                <img src="${article.image}" alt="文章封面" class="article-image">
                <div class="article-content">
                    <h3 class="article-title">${article.title}</h3>
                    <p class="article-excerpt">${article.excerpt}</p>
                    <div class="article-meta">
                        <span>${article.date}</span>
                        <span>阅读: ${article.views}</span>
                    </div>
                </div>
            `;
            articlesContainer.appendChild(articleCard);
        });
    } else {
        // 文章列表页
        paginatedArticles.forEach(article => {
            const articleItem = document.createElement('div');
            articleItem.className = 'article-item';
            articleItem.innerHTML = `
                <div class="article-header">
                    <img src="${article.image}" alt="文章封面" class="article-thumb">
                    <div class="article-info">
                        <h3 class="article-title"><a href="#">${article.title}</a></h3>
                        <p class="article-excerpt">${article.excerpt}</p>
                        <div class="article-meta">
                            <span>${article.date}</span>
                            <span>阅读: ${article.views}</span>
                            <span>分类: ${article.category}</span>
                        </div>
                    </div>
                </div>
            `;
            articlesContainer.appendChild(articleItem);
        });
    }
};

const renderPagination = () => {
    const filteredArticles = articles.filter(article => {
        const matchesCategory = state.selectedCategory === "全部" || article.category === state.selectedCategory;
        const matchesTag = state.selectedTag === "全部" || article.category === state.selectedTag;
        return matchesCategory && matchesTag;
    });

    const totalPages = Math.ceil(filteredArticles.length / state.articlesPerPage);
    
    const paginationContainer = document.querySelector('.pagination');
    if (!paginationContainer) return;

    paginationContainer.innerHTML = '';
    
    if(totalPages <= 1) {
        paginationContainer.style.display = 'none';
        return;
    }
    
    paginationContainer.style.display = 'flex';
    
    // 上一页按钮
    const prevButton = document.createElement('button');
    prevButton.className = `page-btn ${state.currentPage === 1 ? 'disabled' : ''}`;
    prevButton.textContent = '上一页';
    prevButton.disabled = state.currentPage === 1;
    prevButton.addEventListener('click', () => {
        if(state.currentPage > 1) {
            state.currentPage--;
            updatePage();
        }
    });
    paginationContainer.appendChild(prevButton);

    // 页码按钮
    for(let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = `page-btn ${i === state.currentPage ? 'active' : ''}`;
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
            state.currentPage = i;
            updatePage();
        });
        paginationContainer.appendChild(pageButton);
    }

    // 下一页按钮
    const nextButton = document.createElement('button');
    nextButton.className = `page-btn ${state.currentPage === totalPages ? 'disabled' : ''}`;
    nextButton.textContent = '下一页';
    nextButton.disabled = state.currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if(state.currentPage < totalPages) {
            state.currentPage++;
            updatePage();
        }
    });
    paginationContainer.appendChild(nextButton);
};

const updatePage = () => {
    renderArticles();
    renderPagination();
    updateActiveStates();
};

const updateActiveStates = () => {
    // 更新标签激活状态
    document.querySelectorAll('.tag').forEach(tag => {
        tag.classList.toggle('active', tag.textContent === state.selectedTag);
    });
    
    // 更新分类激活状态
    document.querySelectorAll('.category').forEach(cat => {
        cat.classList.toggle('active', cat.textContent.includes(state.selectedCategory));
    });
    
    // 更新页码激活状态
    document.querySelectorAll('.page-btn').forEach(btn => {
        if(!btn.textContent.match(/\d+/)) return;
        btn.classList.toggle('active', parseInt(btn.textContent) === state.currentPage);
    });
};

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    // 为标签添加点击事件
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', () => {
            state.selectedTag = tag.textContent;
            state.currentPage = 1;
            updatePage();
        });
    });

    // 为分类添加点击事件
    document.querySelectorAll('.category').forEach(cat => {
        cat.addEventListener('click', () => {
            // 提取分类名称（去掉计数部分）
            const categoryName = cat.textContent.replace(/\s*\(\d+\)$/, '');
            state.selectedCategory = categoryName;
            state.currentPage = 1;
            updatePage();
        });
    });

    // 初始化页面
    if(document.querySelector('.articles-grid')) {
        renderArticles();
    } else if(document.querySelector('.article-list')) {
        renderArticles();
        renderPagination();
    }
});