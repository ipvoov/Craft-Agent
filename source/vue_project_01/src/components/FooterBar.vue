<template>
  <footer class="footer">
    <div class="footer-content">
      <p>© 2023 我的个人博客 | 记录技术与生活</p>
      <div class="social-links">
        <a href="#">GitHub</a>
        <a href="#">微博</a>
        <a href="#">知乎</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style>
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.social-links {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-links a {
  color: #42b983;
  text-decoration: none;
}

.social-links a:hover {
  text-decoration: underline;
}
</style>