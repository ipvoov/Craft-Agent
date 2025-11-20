<template>
  <div class="post-detail-page" v-if="post">
    <div class="post-header">
      <h1>{{ post.title }}</h1>
      <div class="post-meta">
        <span class="post-date">{{ formattedDate }}</span>
        <span class="post-category">{{ post.category }}</span>
      </div>
      <img :src="post.image" :alt="post.title" class="post-image">
    </div>
    
    <div class="post-content">
      <p>在前端开发领域，Vue3的组合式API带来了革命性的变化。它使我们能够更灵活地组织代码...</p>
      <p>组合式API的核心思想是将相关的逻辑组织在一起，而不是分散在不同的选项对象中...</p>
      <p>在实际项目中，我们可以将复杂的业务逻辑拆分成可复用的组合函数...</p>
      <p>例如，下面是一个处理用户认证的组合函数：</p>
      
      <pre><code>function useAuth() {
  const user = ref(null)
  const isAuthenticated = computed(() => !!user.value)
  
  const login = async (credentials) => {
    // 登录逻辑
  }
  
  const logout = () => {
    // 登出逻辑
  }
  
  return {
    user,
    isAuthenticated,
    login,
    logout
  }
}</code></pre>
      
      <p>通过这种方式，我们可以将认证逻辑封装在一个单独的函数中，并在多个组件中复用...</p>
      <p>组合式API还提供了更好的TypeScript支持，使我们的代码更加健壮...</p>
    </div>
    
    <div class="post-navigation">
      <router-link to="/posts" class="back-link">← 返回文章列表</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const postId = parseInt(route.params.id)
const post = ref(null)

const samplePosts = [
  {
    id: 1,
    title: 'Vue3 组合式 API 最佳实践',
    excerpt: '探索 Vue3 组合式 API 在实际项目中的应用技巧和最佳实践方案',
    date: '2023-06-15',
    category: '前端开发',
    image: 'https://picsum.photos/800/450?random=1'
  },
  {
    id: 2,
    title: '现代 CSS 布局完全指南',
    excerpt: '从 Flexbox 到 Grid，全面解析现代 CSS 布局技术的使用场景和技巧',
    date: '2023-05-22',
    category: 'CSS',
    image: 'https://picsum.photos/800/450?random=2'
  }
]

onMounted(() => {
  post.value = samplePosts.find(p => p.id === postId) || null
})

const formattedDate = computed(() => {
  if (!post.value) return ''
  const date = new Date(post.value.date)
  return date.toLocaleDateString('zh-CN', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
})
</script>

<style>
.post-detail-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.post-header {
  margin-bottom: 40px;
}

.post-header h1 {
  font-size: 2.2rem;
  margin-bottom: 15px;
}

.post-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  color: #666;
}

.post-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.post-content {
  line-height: 1.8;
  font-size: 1.1rem;
}

.post-content p {
  margin-bottom: 20px;
}

.post-content pre {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
  margin: 20px 0;
}

.post-navigation {
  margin-top: 50px;
  text-align: center;
}

.back-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s;
}

.back-link:hover {
  background-color: #e0e0e0;
}

@media (min-width: 768px) {
  .post-detail-page {
    padding: 40px 20px;
  }
  
  .post-header h1 {
    font-size: 2.5rem;
  }
}
</style>