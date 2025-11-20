<template>
  <div class="app-container">
    <NavBar />
    <main class="main-content">
      <router-view />
    </main>
    <FooterBar />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
}

@media (min-width: 768px) {
  .main-content {
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>