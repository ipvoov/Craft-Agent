<template>
  <nav class="navbar">
    <router-link to="/" class="logo">我的博客</router-link>
    <div class="nav-links">
      <router-link to="/">首页</router-link>
      <router-link to="/posts">所有文章</router-link>
      <router-link to="/about">关于我</router-link>
    </div>
  </nav>
</template>

<script setup>
</script>

<style>
.navbar {
  background-color: #2c3e50;
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s;
}

.nav-links a:hover {
  opacity: 0.8;
}

.nav-links a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 10px;
  }
}
</style>