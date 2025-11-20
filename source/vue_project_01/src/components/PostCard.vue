<template>
  <article class="post-card">
    <router-link :to="`/post/${post.id}`" class="post-link">
      <div class="post-image-container">
        <img :src="post.image" :alt="post.title" class="post-image">
      </div>
      <div class="post-content">
        <div class="post-meta">
          <span class="post-date">{{ post.date }}</span>
          <span class="post-category">{{ post.category }}</span>
        </div>
        <h3 class="post-title">{{ post.title }}</h3>
        <p class="post-excerpt">{{ post.excerpt }}</p>
      </div>
    </router-link>
  </article>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>

<style>
.post-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  background: white;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.post-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.post-image-container {
  position: relative;
  padding-top: 56.25%; /* 16:9 宽高比 */
}

.post-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-content {
  padding: 20px;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 0.85rem;
  color: #666;
}

.post-category {
  background-color: #e9f5f0;
  color: #42b983;
  padding: 3px 8px;
  border-radius: 4px;
  font-weight: bold;
}

.post-title {
  font-size: 1.25rem;
  margin: 0 0 10px 0;
  line-height: 1.3;
}

.post-excerpt {
  color: #666;
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 480px) {
  .post-content {
    padding: 15px;
  }
  
  .post-title {
    font-size: 1.1rem;
  }
}
</style>