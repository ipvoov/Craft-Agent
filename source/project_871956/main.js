// 文章数据存储
const articleData = [
    {
        id: 1,
        title: "人工智能的未来发展趋势",
        summary: "探讨AI技术的最新进展与未来发展方向",
        category: "tech",
        date: "2024-05-15",
        readTime: "8分钟",
        readCount: 1200,
        coverImage: "https://tse4.mm.bing.net/th/id/OIP.WredsDNZFqcjrFZPZKDjVAHaKf?w=250&h=250&c=7&rs=1&o=5&pid=1.1",
        content: "人工智能（AI）技术在过去几年中取得了显著进展，从深度学习到自然语言处理，AI的应用范围不断扩大。本文将探讨AI领域的最新趋势及其未来发展方向。生成式AI，特别是大型语言模型（LLMs），已经成为AI领域的焦点。这些模型能够生成高质量的文本、图像和代码，为各行各业带来了革命性的变化。多模态AI能够同时处理文本、图像、音频等多种类型的数据，为更复杂的任务提供了可能性。这种技术正在推动人机交互的边界。随着AI技术的广泛应用，伦理和监管问题变得尤为重要。确保AI系统的公平性、透明性和可解释性是未来发展的重要方向。将AI能力部署到边缘设备上，如智能手机和物联网设备，能够提供更快的响应时间和更好的隐私保护。"
    },
    {
        id: 2,
        title: "前端开发最佳实践",
        summary: "分享现代前端开发中的最佳实践和技巧",
        category: "tech",
        date: "2024-05-10",
        readTime: "6分钟",
        readCount: 950,
        coverImage: "https://tse2.mm.bing.net/th/id/OIP.DI-g9zMsjP646MFVWoPT0wHaFf?w=250&h=250&c=7&rs=1&o=5&pid=1.1",
        content: "现代前端开发涉及多种技术和工具，从HTML、CSS、JavaScript到各种框架和库。本指南将分享一些最佳实践，帮助开发者提高代码质量和开发效率。模块化是现代前端开发的核心概念之一。通过将代码拆分为小的、可重用的模块，我们可以提高代码的可维护性和可扩展性。状态管理是复杂前端应用的重要组成部分。选择合适的state管理方案可以显著提高应用的性能和可维护性。性能优化是前端开发中的重要环节。通过代码分割、懒加载、缓存等技术，我们可以显著提升应用的加载速度和用户体验。"
    },
    {
        id: 3,
        title: "编程语言选择指南",
        summary: "为不同场景选择最合适的编程语言",
        category: "tech",
        date: "2024-05-05",
        readTime: "10分钟",
        readCount: 1400,
        coverImage: "https://tse4.mm.bing.net/th/id/OIP.JPkB5ig_Ovt730gilT8SpgHaEK?w=250&h=250&c=7&rs=1&o=5&pid=1.1",
        content: "在软件开发中，选择合适的编程语言是项目成功的关键因素之一。不同的编程语言有不同的特点和适用场景。本指南将帮助您为不同类型的项目选择最合适的编程语言。Python是一种多用途的编程语言，以其简洁的语法和强大的库支持而闻名。它广泛应用于数据科学、人工智能、Web开发等领域。JavaScript是Web开发的核心语言，随着Node.js的出现，它也可以用于后端开发。现代JavaScript框架如React、Vue和Angular极大地简化了前端开发。Java是一种静态类型的面向对象语言，以其稳定性和跨平台特性而著称。它广泛应用于企业级应用开发。C++提供了高性能和底层控制能力，是游戏开发、系统编程和高性能计算的首选语言。"
    }
];

// 评论数据存储
const commentData = [
    {
        id: 1,
        articleId: 1,
        name: "编程爱好者",
        content: "非常有见地的分析！AI的发展确实令人期待，特别是多模态AI的应用前景。",
        date: "2024-05-16",
        likes: 5
    },
    {
        id: 2,
        articleId: 1,
        name: "技术探索者",
        content: "边缘AI的普及将是一个重要的转折点，期待看到更多实际应用案例。",
        date: "2024-05-15",
        likes: 3
    }
];

// 工具函数
const utils = {
    // 获取URL参数
    getUrlParameter: function(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    },
    
    // 格式化日期
    formatDate: function(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('zh-CN');
    },
    
    // 简单的模板渲染函数
    renderTemplate: function(template, data) {
        let result = template;
        for (const key in data) {
            result = result.replace(new RegExp(`{{${key}}}`, 'g'), data[key]);
        }
        return result;
    }
};

// 文章管理模块
const articleManager = {
    // 获取所有文章
    getAllArticles: function() {
        const stored = localStorage.getItem('articles');
        return stored ? JSON.parse(stored) : articleData;
    },
    
    // 获取单篇文章
    getArticleById: function(id) {
        const articles = this.getAllArticles();
        return articles.find(article => article.id == id);
    },
    
    // 获取分类文章
    getArticlesByCategory: function(category) {
        if (category === 'all') {
            return this.getAllArticles();
        }
        const articles = this.getAllArticles();
        return articles.filter(article => article.category === category);
    },
    
    // 搜索文章
    searchArticles: function(query) {
        const articles = this.getAllArticles();
        return articles.filter(article => 
            article.title.toLowerCase().includes(query.toLowerCase()) || 
            article.summary.toLowerCase().includes(query.toLowerCase())
        );
    },
    
    // 更新阅读量
    incrementReadCount: function(id) {
        const articles = this.getAllArticles();
        const article = articles.find(a => a.id == id);
        if (article) {
            article.readCount = (article.readCount || 0) + 1;
            localStorage.setItem('articles', JSON.stringify(articles));
        }
    }
};

// 评论管理模块
const commentManager = {
    // 获取文章评论
    getCommentsByArticle: function(articleId) {
        const stored = localStorage.getItem('comments');
        const comments = stored ? JSON.parse(stored) : commentData;
        return comments.filter(comment => comment.articleId == articleId);
    },
    
    // 添加评论
    addComment: function(articleId, name, content) {
        const newComment = {
            id: Date.now(),
            articleId: articleId,
            name: name,
            content: content,
            date: new Date().toISOString().split('T')[0],
            likes: 0
        };
        
        const comments = this.getCommentsByArticle(articleId);
        comments.push(newComment);
        
        // 保存到localStorage
        const allComments = localStorage.getItem('comments') ? 
            JSON.parse(localStorage.getItem('comments')) : commentData;
        allComments.push(newComment);
        localStorage.setItem('comments', JSON.stringify(allComments));
        
        return newComment;
    }
};

// 搜索功能
const search = {
    init: function() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', this.handleSearch.bind(this));
        }
    },
    
    handleSearch: function(e) {
        const query = e.target.value.trim();
        if (query.length > 0) {
            const results = articleManager.searchArticles(query);
            this.displaySearchResults(results);
        } else {
            this.clearSearchResults();
        }
    },
    
    displaySearchResults: function(results) {
        // 在实际应用中，这里会更新页面上的结果列表
        console.log('搜索结果:', results);
    },
    
    clearSearchResults: function() {
        // 清除搜索结果
    }
};

// 页面初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化数据存储
    if (!localStorage.getItem('articles')) {
        localStorage.setItem('articles', JSON.stringify(articleData));
    }
    
    if (!localStorage.getItem('comments')) {
        localStorage.setItem('comments', JSON.stringify(commentData));
    }
    
    // 初始化搜索功能
    search.init();
    
    // 检查是否是文章详情页，如果是则增加阅读量
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    if (articleId && window.location.pathname.includes('post-detail.html')) {
        articleManager.incrementReadCount(parseInt(articleId));
    }
});

// 导出模块供其他脚本使用
window.GEEK_BLOG = {
    utils: utils,
    articleManager: articleManager,
    commentManager: commentManager
};