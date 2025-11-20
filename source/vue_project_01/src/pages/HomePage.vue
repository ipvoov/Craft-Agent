<template>
  <div class="home-page">
    <div class="hero-section">
      <h1>欢迎来到我的技术博客</h1>
      <p>分享前端开发、JavaScript 和 Vue.js 相关技术文章</p>
    </div>
    
    <div class="featured-posts">
      <h2>精选文章</h2>
      <div class="post-grid">
        <PostCard 
          v-for="post in featuredPosts" 
          :key="post.id" 
          :post="post" 
          class="featured-post"
        />
      </div>
    </div>
    
    <div class="about-preview">
      <h2>关于作者</h2>
      <div class="about-content">
        <div class="avatar-container">
          <img :src="avatarUrl" alt="作者头像" class="avatar">
        </div>
        <div class="bio">
          <p>前端开发工程师，专注于 Vue.js 和现代 Web 技术。</p>
          <p>热爱开源和技术分享，喜欢探索新技术解决实际问题。</p>
          <router-link to="/about" class="read-more">查看更多 →</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PostCard from '@/components/PostCard.vue'

const featuredPosts = ref([
  {
    id: 1,
    title: 'Vue3 组合式 API 最佳实践',
    excerpt: '探索 Vue3 组合式 API 在实际项目中的应用技巧和最佳实践方案',
    date: '2023-06-15',
    category: '前端开发',
    image: 'https://picsum.photos/600/400?random=1'
  },
  {
    id: 2,
    title: '现代 CSS 布局完全指南',
    excerpt: '从 Flexbox 到 Grid，全面解析现代 CSS 布局技术的使用场景和技巧',
    date: '2023-05-22',
    category: 'CSS',
    image: 'https://picsum.photos/600/400?random=2'
  },
  {
    id: 3,
    title: 'JavaScript 性能优化策略',
    excerpt: '深入探讨 JavaScript 性能优化的核心策略和实用技巧',
    date: '2023-04-10',
    category: 'JavaScript',
    image: 'https://picsum.photos/600/400?random=3'
  }
])

const avatarUrl = ref('https://picsum.photos/150/150?random=4')
</script>

<style>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
}

.hero-section {
  text-align: center;
  padding: 40px 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 40px;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.hero-section p {
  font-size: 1.2rem;
  color: #666;
}

.featured-posts {
  margin-bottom: 40px;
}

.featured-posts h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #42b983;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.about-preview {
  background-color: #f8f9fa;
  padding: 30px;
  border-radius: 8px;
}

.about-preview h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.about-content {
  display: flex;
  gap: 30px;
  align-items: center;
}

.avatar-container {
  flex-shrink: 0;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.bio {
  line-height: 1.6;
}

.read-more {
  display: inline-block;
  margin-top: 10px;
  color: #42b983;
  font-weight: bold;
  text-decoration: none;
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-section h1 {
    font-size: 2rem;
  }
}
</style>