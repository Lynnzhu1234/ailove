<script setup>
import { ElButton } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()
const handleStart = () => {
  router.push('/test')
}
</script>

<template>
  <div class="home-intro">
    <div class="intro-content">
      <h1 class="title">AI 恋爱契合度预测系统</h1>
      <p class="subtitle">基于MBTI性格分析和星座相性，智能预测你们的契合程度</p>

      <div class="action-area">
        <el-button type="primary" size="large" @click="handleStart" class="start-button">
          开始测试
        </el-button>
      </div>

      <div class="intro-features">
        <h3>主要功能</h3>
        <ul>
          <li>MBTI性格匹配分析</li>
          <li>星座相性深度解读</li>
          <li>AI智能匹配评分</li>
          <li>专业情感建议</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-intro {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  color: #409eff;
  margin-bottom: 1rem;
  animation: fadeInDown 0.8s ease-out;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  animation: fadeInUp 0.8s ease-out;
}

.action-area {
  margin: 2rem 0;
  animation: fadeIn 1s ease-out;
}

.start-button {
  padding: 12px 36px;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.start-button:hover {
  transform: translateY(-2px);
}

.intro-features {
  text-align: left;
  margin-top: 3rem;
  padding: 1.5rem;
  background: #f5f7fa;
  border-radius: 8px;
  animation: fadeInUp 1s ease-out;
}

.intro-features h3 {
  color: #409eff;
  margin-bottom: 1rem;
}

.intro-features ul {
  list-style: none;
  padding: 0;
}

.intro-features li {
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.intro-features li::before {
  content: '•';
  color: #409eff;
  position: absolute;
  left: 0;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
