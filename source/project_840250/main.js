// 学术博客核心JavaScript功能

// 主题管理
class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.applyTheme(this.currentTheme);
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
  }

  applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
  }
}

// 文章管理
class ArticleManager {
  constructor() {
    this.articles = [
      {
        id: 'web-dev-practices',
        title: '现代Web开发最佳实践',
        content: '探讨现代Web开发中的核心概念与最佳实践，包括性能优化、可访问性、安全性等关键主题...',
        tags: ['前端', 'Web开发', '性能优化'],
        metadata: {
          date: '2025-01-15',
          readTime: '15分钟',
          wordCount: 4250
        }
      },
      {
        id: 'structured-data-academic',
        title: '结构化数据在学术研究中的应用',
        content: '分析结构化数据如何提升学术研究的效率和准确性，包括数据建模、存储和分析方法...',
        tags: ['数据科学', '学术研究', '数据分析'],
        metadata: {
          date: '2025-01-10',
          readTime: '12分钟',
          wordCount: 3800
        }
      },
      {
        id: 'responsive-design',
        title: '响应式设计的理论与实践',
        content: '深入探讨响应式设计的原理，从断点设计到交互优化，构建跨设备的用户体验...',
        tags: ['UI/UX', '设计理论', '用户体验'],
        metadata: {
          date: '2025-01-05',
          readTime: '18分钟',
          wordCount: 5100
        }
      }
    ];
  }

  getArticlesByTag(tag) {
    return this.articles.filter(article => 
      article.tags.some(t => t === tag)
    );
  }

  searchArticles(query) {
    const lowerQuery = query.toLowerCase();
    return this.articles.filter(article => 
      article.title.toLowerCase().includes(lowerQuery) || 
      article.content.toLowerCase().includes(lowerQuery) ||
      article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  }
}

// 搜索功能
class SearchManager {
  constructor() {
    this.searchInput = document.querySelector('.search-box');
    this.initEventListeners();
  }

  initEventListeners() {
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.performSearch(e.target.value);
      });
    }
  }

  performSearch(query) {
    // 这里可以实现搜索逻辑
    console.log('搜索:', query);
  }
}

// 响应式菜单
class ResponsiveMenu {
  constructor() {
    this.menuBtn = document.querySelector('.mobile-menu-btn');
    this.navLinks = document.querySelector('.nav-links');
    this.initEventListeners();
  }

  initEventListeners() {
    if (this.menuBtn && this.navLinks) {
      this.menuBtn.addEventListener('click', () => {
        this.navLinks.style.display = this.navLinks.style.display === 'flex' ? 'none' : 'flex';
      });
    }
  }
}

// 页面初始化
document.addEventListener('DOMContentLoaded', function() {
  // 初始化主题管理器
  const themeManager = new ThemeManager();
  
  // 为主题切换按钮添加事件
  const themeToggleBtn = document.querySelector('.theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      themeManager.toggleTheme();
    });
  }

  // 初始化文章管理器
  const articleManager = new ArticleManager();

  // 初始化搜索管理器
  const searchManager = new SearchManager();

  // 初始化响应式菜单
  const responsiveMenu = new ResponsiveMenu();

  // 为分类过滤按钮添加事件
  const filterButtons = document.querySelectorAll('.filter-tags button');
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // 为文章卡片添加悬停效果
  const articleCards = document.querySelectorAll('.article-card');
  articleCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});

// 工具函数
function debounce(func, wait) {
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

// 平滑滚动功能
function smoothScrollTo(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

// 页面加载完成后执行
window.addEventListener('load', function() {
  // 添加页面加载动画
  const sections = document.querySelectorAll('.section, .article-card');
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }, 100 * index);
  });
});