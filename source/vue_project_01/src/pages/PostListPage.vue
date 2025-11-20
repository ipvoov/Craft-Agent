<template>
  <div class="post-list-page">
    <h1>所有文章</h1>
    
    <div class="category-filter">
      <button 
        v-for="category in categories" 
        :key="category" 
        @click="selectCategory = category"
        :class="{ active: selectCategory === category }"
      >
        {{ category }}
      </button>
    </div>
    
    <div class="post-list">
      <PostCard 
        v-for="post in filteredPosts" 
        :key="post.id" 
        :post="post" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PostCard from '@/components/PostCard.vue'

const categories = ref(['全部', '前端开发', 'JavaScript', 'CSS', '工具推荐'])
const selectCategory = ref('全部')

const posts = ref([
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
  },
  {
    id: 4,
    title: 'Vite 配置优化技巧',
    excerpt: '分享 Vite 项目中实用的配置优化和开发技巧',
    date: '2023-03-18',
    category: '工具推荐',
    image: 'https://picsum.photos/600/400?random=4'
  },
  {
    id: 5,
    title: '响应式设计核心原理',
    excerpt: '深入理解响应式设计的核心原理和实现方法',
    date: '2023-02-05',
    category: 'CSS',
    image: 'https://picsum.photos/600/400?random=5'
  },
  {
    id: 6,
    title: 'TypeScript 类型体操入门',
    excerpt: 'TypeScript 高级类型技巧和实践指南',
    date: '2023-01-12',
    category: '前端开发',
    image: 'https://picsum.photos/600/400?random=6'
  }
])

const filteredPosts = computed(() => {
  if (selectCategory.value === '全部') return posts.value
  return posts.value.filter(post => post.category === selectCategory.value)
})
</script>

<style>
.post-list-page {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 2rem;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 2px solid #42b983;
}

.category-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.category-filter button {
  padding: 8px 16px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.category-filter button:hover {
  background-color: #e0e0e0;
}

.category-filter button.active {
  background-color: #42b983;
  color: white;
}

.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

@media (max-width: 768px) {
  .post-list {
    grid-template-columns: 1fr;
  }
}
</style>