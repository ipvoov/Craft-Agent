// 主要JavaScript文件 - 处理所有页面的交互逻辑

// 初始化函数
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initParticleBackground();
    initCharityChart();
    initScrollAnimations();
    initCharityCounter();
});

// 移动端菜单
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// 粒子背景效果
function initParticleBackground() {
    const container = document.getElementById('particle-container');
    if (!container) return;

    const app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0xFFFFFF,
        transparent: true
    });
    
    container.appendChild(app.view);

    // 创建粒子
    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = new PIXI.Graphics();
        particle.beginFill(0x000000, 0.1);
        particle.drawCircle(0, 0, Math.random() * 3 + 1);
        particle.endFill();
        
        particle.x = Math.random() * app.screen.width;
        particle.y = Math.random() * app.screen.height;
        particle.vx = (Math.random() - 0.5) * 0.5;
        particle.vy = (Math.random() - 0.5) * 0.5;
        
        app.stage.addChild(particle);
        particles.push(particle);
    }

    // 动画循环
    app.ticker.add(() => {
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0) particle.x = app.screen.width;
            if (particle.x > app.screen.width) particle.x = 0;
            if (particle.y < 0) particle.y = app.screen.height;
            if (particle.y > app.screen.height) particle.y = 0;
        });
    });

    // 响应式调整
    window.addEventListener('resize', () => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
    });
}

// 公益统计图表
function initCharityChart() {
    const chartContainer = document.getElementById('charity-chart');
    if (!chartContainer) return;

    const chart = echarts.init(chartContainer);
    
    const option = {
        backgroundColor: 'transparent',
        textStyle: {
            color: '#FFFFFF'
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0,0,0,0.8)',
            borderColor: '#D4AF37',
            textStyle: {
                color: '#FFFFFF'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLine: {
                lineStyle: {
                    color: '#666'
                }
            },
            axisLabel: {
                color: '#CCCCCC'
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#666'
                }
            },
            axisLabel: {
                color: '#CCCCCC'
            },
            splitLine: {
                lineStyle: {
                    color: '#333'
                }
            }
        },
        series: [{
            name: '捐赠金额',
            type: 'line',
            data: [1200, 1900, 3000, 5000, 7000, 8800, 10200, 11500, 12000, 12580, 13200, 14000],
            smooth: true,
            lineStyle: {
                color: '#D4AF37',
                width: 3
            },
            itemStyle: {
                color: '#D4AF37'
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(212, 175, 55, 0.3)'
                    }, {
                        offset: 1, color: 'rgba(212, 175, 55, 0.05)'
                    }]
                }
            }
        }]
    };

    chart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', () => {
        chart.resize();
    });
}

// 滚动动画
function initScrollAnimations() {
    const cards = document.querySelectorAll('.card-hover');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    translateY: [50, 0],
                    opacity: [0, 1],
                    duration: 800,
                    easing: 'easeOutQuad',
                    delay: Math.random() * 200
                });
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        observer.observe(card);
    });
}

// 公益数字动画
function initCharityCounter() {
    const counters = [
        { id: 'donation-amount', target: 12580, suffix: '¥', prefix: '' },
        { id: 'rescued-dogs', target: 1258, suffix: '', prefix: '' },
        { id: 'support-items', target: 1258, suffix: '', prefix: '' }
    ];

    counters.forEach(counter => {
        const element = document.getElementById(counter.id);
        if (element) {
            animateCounter(element, counter.target, counter.prefix, counter.suffix);
        }
    });
}

function animateCounter(element, target, prefix, suffix) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
    }, 30);
}

// 日历生成器相关功能
const CalendarGenerator = {
    currentMonth: 0,
    currentStyle: 'modern',
    
    months: [
        '一月', '二月', '三月', '四月', '五月', '六月',
        '七月', '八月', '九月', '十月', '十一月', '十二月'
    ],
    
    styles: {
        modern: { name: '现代简约', class: 'modern' },
        vintage: { name: '复古经典', class: 'vintage' },
        artistic: { name: '艺术风格', class: 'artistic' },
        festive: { name: '节日主题', class: 'festive' }
    },

    init() {
        this.setupEventListeners();
        this.generatePreview();
    },

    setupEventListeners() {
        const monthSelect = document.getElementById('month-select');
        const styleSelect = document.getElementById('style-select');
        const generateBtn = document.getElementById('generate-btn');
        const downloadBtn = document.getElementById('download-btn');

        if (monthSelect) {
            monthSelect.addEventListener('change', (e) => {
                this.currentMonth = parseInt(e.target.value);
                this.generatePreview();
            });
        }

        if (styleSelect) {
            styleSelect.addEventListener('change', (e) => {
                this.currentStyle = e.target.value;
                this.generatePreview();
            });
        }

        if (generateBtn) {
            generateBtn.addEventListener('click', () => {
                this.generateCalendar();
            });
        }

        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => {
                this.downloadCalendar();
            });
        }
    },

    generatePreview() {
        const preview = document.getElementById('calendar-preview');
        if (!preview) return;

        const monthName = this.months[this.currentMonth];
        const style = this.styles[this.currentStyle];
        
        preview.innerHTML = `
            <div class="calendar-container ${style.class}">
                <div class="calendar-header">
                    <h3>${monthName} 2024</h3>
                </div>
                <div class="calendar-image">
                    <img src="resources/calendar-${this.getMonthKey(this.currentMonth)}.png" alt="${monthName}">
                </div>
                <div class="calendar-grid">
                    ${this.generateCalendarGrid(this.currentMonth)}
                </div>
            </div>
        `;
    },

    getMonthKey(monthIndex) {
        const keys = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        return keys[monthIndex] || 'jan';
    },

    generateCalendarGrid(monthIndex) {
        const daysInMonth = new Date(2024, monthIndex + 1, 0).getDate();
        const firstDay = new Date(2024, monthIndex, 1).getDay();
        
        let grid = '<div class="calendar-weekdays">';
        const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
        weekdays.forEach(day => {
            grid += `<div class="weekday">${day}</div>`;
        });
        grid += '</div>';
        
        grid += '<div class="calendar-days">';
        
        // 空白天数
        for (let i = 0; i < firstDay; i++) {
            grid += '<div class="day empty"></div>';
        }
        
        // 日期
        for (let day = 1; day <= daysInMonth; day++) {
            grid += `<div class="day">${day}</div>`;
        }
        
        grid += '</div>';
        return grid;
    },

    generateCalendar() {
        // 这里可以添加更复杂的日历生成逻辑
        this.generatePreview();
        
        // 显示成功消息
        this.showNotification('日历生成成功！');
    },

    downloadCalendar() {
        // 模拟下载功能
        const link = document.createElement('a');
        link.download = `西高地日历-${this.months[this.currentMonth]}.png`;
        link.href = 'resources/calendar-jan.png'; // 临时使用示例图片
        link.click();
        
        this.showNotification('日历下载开始！');
    },

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'fixed top-20 right-4 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
};

// 养护百科搜索功能
const CareSearch = {
    data: [
        {
            title: '西高地白梗日常护理指南',
            category: '美容',
            summary: '每日梳理、定期洗澡、耳部清洁等基础护理知识',
            content: '西高地白梗需要每日梳理毛发，定期洗澡，注意耳部清洁...'
        },
        {
            title: '西高地白梗饮食营养搭配',
            category: '饮食',
            summary: '科学搭配营养，避免过敏食物，保持健康体重',
            content: '选择高质量狗粮，避免牛肉、玉米等过敏原...'
        },
        {
            title: '西高地白梗常见疾病预防',
            category: '健康',
            summary: '皮肤护理、牙齿保健、眼部护理等预防知识',
            content: '定期检查皮肤状况，注意牙齿清洁，预防眼部疾病...'
        },
        {
            title: '西高地白梗基础训练技巧',
            category: '训练',
            summary: '社交训练、服从训练、行为纠正等训练方法',
            content: '从小开始社交训练，使用正面强化方法，保持训练一致性...'
        }
    ],

    init() {
        this.setupEventListeners();
        this.displayResults(this.data);
    },

    setupEventListeners() {
        const searchInput = document.getElementById('care-search');
        const categoryFilter = document.getElementById('category-filter');
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.search(e.target.value);
            });
        }
        
        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                this.filterByCategory(e.target.value);
            });
        }
    },

    search(query) {
        const filtered = this.data.filter(item => 
            item.title.includes(query) || 
            item.summary.includes(query) ||
            item.content.includes(query)
        );
        this.displayResults(filtered);
    },

    filterByCategory(category) {
        if (category === 'all') {
            this.displayResults(this.data);
        } else {
            const filtered = this.data.filter(item => item.category === category);
            this.displayResults(filtered);
        }
    },

    displayResults(results) {
        const container = document.getElementById('care-results');
        if (!container) return;

        container.innerHTML = results.map(item => `
            <div class="care-item bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div class="flex justify-between items-start mb-3">
                    <h3 class="text-xl font-bold text-gray-900">${item.title}</h3>
                    <span class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">${item.category}</span>
                </div>
                <p class="text-gray-600 mb-4">${item.summary}</p>
                <button class="text-black hover:text-gray-600 font-medium" onclick="CareSearch.showDetail('${item.title}')">
                    阅读全文 →
                </button>
            </div>
        `).join('');
    },

    showDetail(title) {
        const item = this.data.find(item => item.title === title);
        if (item) {
            alert(`${item.title}\n\n${item.content}`);
        }
    }
};

// 商城购物车功能
const ShopCart = {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    
    products: [
        {
            id: 1,
            name: '西高地头像卫衣',
            price: 199,
            image: 'resources/hoodie-1.png',
            description: '高品质纯棉卫衣，精美西高地头像印花'
        },
        {
            id: 2,
            name: '限量银箔海报',
            price: 89,
            image: 'resources/poster-silver-1.png',
            description: '艺术级银箔海报，专业摄影品质'
        },
        {
            id: 3,
            name: '西高地摄影集',
            price: 299,
            image: 'resources/calendar-jan.png',
            description: '精选西高地摄影作品合集'
        }
    ],

    init() {
        this.setupEventListeners();
        this.displayProducts();
        this.updateCartDisplay();
    },

    setupEventListeners() {
        // 购物车相关事件监听将在相应的HTML页面中设置
    },

    displayProducts() {
        const container = document.getElementById('products-grid');
        if (!container) return;

        container.innerHTML = this.products.map(product => `
            <div class="product-card bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">${product.name}</h3>
                    <p class="text-gray-600 mb-4">${product.description}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-black">¥${product.price}</span>
                        <button onclick="ShopCart.addToCart(${product.id})" 
                                class="bg-black text-white px-6 py-2 rounded-none hover:bg-gray-800 transition-colors">
                            加入购物车
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    },

    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.items.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({ ...product, quantity: 1 });
        }

        this.saveCart();
        this.updateCartDisplay();
        this.showNotification('商品已添加到购物车！');
    },

    removeFromCart(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartDisplay();
    },

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, quantity);
            this.saveCart();
            this.updateCartDisplay();
        }
    },

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    getDonationAmount() {
        return this.items.length * 10; // 每件商品捐赠10元
    },

    saveCart() {
        localStorage.setItem('cartItems', JSON.stringify(this.items));
    },

    updateCartDisplay() {
        const cartCount = document.getElementById('cart-count');
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        const donationAmount = document.getElementById('donation-amount');

        if (cartCount) {
            cartCount.textContent = this.items.length;
        }

        if (cartItems) {
            cartItems.innerHTML = this.items.map(item => `
                <div class="cart-item flex items-center justify-between py-4 border-b border-gray-200">
                    <div class="flex items-center">
                        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                        <div class="ml-4">
                            <h4 class="font-medium">${item.name}</h4>
                            <p class="text-gray-600">¥${item.price}</p>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <button onclick="ShopCart.updateQuantity(${item.id}, ${item.quantity - 1})" 
                                class="bg-gray-200 text-black px-2 py-1 rounded">-</button>
                        <span class="mx-3">${item.quantity}</span>
                        <button onclick="ShopCart.updateQuantity(${item.id}, ${item.quantity + 1})" 
                                class="bg-gray-200 text-black px-2 py-1 rounded">+</button>
                        <button onclick="ShopCart.removeFromCart(${item.id})" 
                                class="ml-4 text-red-500 hover:text-red-700">删除</button>
                    </div>
                </div>
            `).join('');
        }

        if (cartTotal) {
            cartTotal.textContent = `¥${this.getTotal()}`;
        }

        if (donationAmount) {
            donationAmount.textContent = `¥${this.getDonationAmount()}`;
        }
    },

    checkout() {
        if (this.items.length === 0) {
            alert('购物车为空！');
            return;
        }

        const total = this.getTotal();
        const donation = this.getDonationAmount();
        
        alert(`订单确认：\n商品总计：¥${total}\n公益捐赠：¥${donation}\n\n感谢您的爱心支持！`);
        
        // 清空购物车
        this.items = [];
        this.saveCart();
        this.updateCartDisplay();
    },

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'fixed top-20 right-4 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
};

// 根据当前页面初始化相应功能
if (window.location.pathname.includes('calendar.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        CalendarGenerator.init();
    });
} else if (window.location.pathname.includes('care.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        CareSearch.init();
    });
} else if (window.location.pathname.includes('shop.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        ShopCart.init();
    });
}