<template>
  <div class="about-page">
    <h1>关于我</h1>
    
    <div class="about-container">
      <div class="profile-section">
        <div class="avatar-container">
          <img :src="avatarUrl" alt="我的头像" class="avatar">
        </div>
        <div class="profile-info">
          <h2>张明</h2>
          <p class="title">高级前端开发工程师</p>
          <div class="social-links">
            <a href="#" class="social-link">GitHub</a>
            <a href="#" class="social-link">知乎</a>
            <a href="#" class="social-link">微博</a>
          </div>
        </div>
      </div>
      
      <div class="bio-section">
        <h3>个人简介</h3>
        <p>我是一名热爱技术的前端开发工程师，拥有8年Web开发经验。专注于Vue.js生态系统和现代前端工程化实践。</p>
        <p>在日常工作中，我负责构建高性能、可维护的前端架构，优化用户体验和开发工作流程。</p>
        <p>我相信持续学习和知识分享的力量，通过写作和开源项目回馈技术社区。</p>
      </div>
      
      <div class="skills-section">
        <h3>技术栈</h3>
        <div class="skills-grid">
          <div class="skill-category">
            <h4>前端技术</h4>
            <ul>
              <li>Vue 2/3</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Webpack/Vite</li>
            </ul>
          </div>
          <div class="skill-category">
            <h4>后端技术</h4>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>RESTful API</li>
            </ul>
          </div>
          <div class="skill-category">
            <h4>工具 & DevOps</h4>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>CI/CD</li>
              <li>测试自动化</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="contact-section">
        <h3>联系我</h3>
        <p>如果您有任何问题或合作意向，欢迎通过以下方式联系：</p>
        <ul class="contact-methods">
          <li>邮箱：<a href="mailto:contact@example.com">contact@example.com</a></li>
          <li>微信：tech_blogger</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const avatarUrl = ref('https://picsum.photos/200/200?random=10')
</script>

<style>
.about-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 2px solid #42b983;
}

.about-container {
  display: grid;
  gap: 40px;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 30px;
  background-color: #f8f9fa;
  padding: 30px;
  border-radius: 8px;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-info h2 {
  font-size: 1.8rem;
  margin-bottom: 5px;
}

.title {
  color: #666;
  margin-bottom: 15px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  display: inline-block;
  padding: 8px 15px;
  background-color: #e9f5f0;
  color: #42b983;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.social-link:hover {
  background-color: #d4eddf;
}

.bio-section p {
  line-height: 1.8;
  margin-bottom: 15px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
}

.skill-category {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
}

.skill-category h4 {
  margin-bottom: 15px;
  color: #42b983;
}

.skill-category ul {
  list-style: none;
  padding: 0;
}

.skill-category li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.contact-methods {
  list-style: none;
  padding: 0;
}

.contact-methods li {
  margin-bottom: 10px;
}

.contact-methods a {
  color: #42b983;
}

@media (max-width: 768px) {
  .profile-section {
    flex-direction: column;
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>