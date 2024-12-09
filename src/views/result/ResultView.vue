<script setup>
import { ElIcon, ElButton } from 'element-plus'
import { Connection } from '@element-plus/icons-vue'
import { useTestFormStore } from '../test/stores/testForm'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useTestFormStore()
const { person1, person2 } = storeToRefs(store)

const handleRetry = () => {
  store.reset()
  router.push('/test')
}
</script>

<template>
  <div class="result-container">
    <h2 class="result-title">分析结果</h2>

    <div class="result-content">
      <div class="persons-info">
        <div class="person-card">
          <h3>{{ person1.name }}</h3>
          <p>MBTI: {{ person1.mbti }}</p>
          <p>星座: {{ person1.zodiac }}</p>
        </div>

        <div class="match-icon">
          <el-icon><Connection /></el-icon>
        </div>

        <div class="person-card">
          <h3>{{ person2.name }}</h3>
          <p>MBTI: {{ person2.mbti }}</p>
          <p>星座: {{ person2.zodiac }}</p>
        </div>
      </div>

      <div class="analysis-result">
        <div class="score-section">
          <div class="score">
            <span class="number">85</span>
            <span class="percent">%</span>
          </div>
          <p class="score-desc">契合度</p>
        </div>

        <div class="analysis-details">
          <h4>详细分析</h4>
          <div class="analysis-item">
            <h5>MBTI 匹配度</h5>
            <p>
              你们的性格类型具有很好的互补性。INTJ和ENFP的组合通常能够相互理解和欣赏对方的特点。
            </p>
          </div>
          <div class="analysis-item">
            <h5>星座相性</h5>
            <p>双子座和天秤座都属于风向星座，在沟通和理解方面有着天然的默契。</p>
          </div>
        </div>
      </div>

      <div class="result-actions">
        <el-button @click="handleRetry" class="retry-button">重新测试</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.result-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #ffebee 0%, #fce4ec 100%);
  animation: fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.result-title {
  text-align: center;
  color: #1d1d1f;
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
  animation: fadeInDown 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.result-content {
  background: rgba(255, 255, 255, 0.9);
  padding: 3rem;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 40px rgba(255, 192, 203, 0.2);
  animation: fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
}

.persons-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.person-card {
  flex: 1;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 18px;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.person-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(255, 192, 203, 0.2);
  background: rgba(255, 255, 255, 0.9);
}

.person-card h3 {
  color: #1d1d1f;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.person-card p {
  color: #86868b;
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

.match-icon {
  padding: 0 3rem;
  color: #ff4081;
  font-size: 2.5rem;
}

.analysis-result {
  margin-top: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 18px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.score-section {
  text-align: center;
  margin-bottom: 3rem;
}

.score {
  font-size: 4rem;
  color: #ff4081;
  font-weight: 500;
  line-height: 1;
}

.number {
  font-size: 5rem;
}

.percent {
  font-size: 3rem;
  margin-left: 0.2rem;
}

.score-desc {
  color: #86868b;
  font-size: 1.2rem;
  margin-top: 1rem;
}

.analysis-details {
  margin-top: 2rem;
}

.analysis-details h4 {
  color: #1d1d1f;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  text-align: center;
}

.analysis-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.analysis-item h5 {
  color: #1d1d1f;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.analysis-item p {
  color: #86868b;
  line-height: 1.6;
  font-size: 1.1rem;
}

.result-actions {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

:deep(.retry-button) {
  height: 50px;
  padding: 0 48px;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 25px;
  background: #ff4081;
  border: none;
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.retry-button:hover) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 64, 129, 0.3);
  background: #f50057;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .result-container {
    padding: 1rem;
  }

  .result-content {
    padding: 1.5rem;
  }

  .persons-info {
    flex-direction: column;
    gap: 1.5rem;
  }

  .match-icon {
    padding: 1.5rem 0;
  }

  .person-card {
    padding: 1.5rem;
  }

  .score {
    font-size: 3rem;
  }

  .number {
    font-size: 4rem;
  }

  .percent {
    font-size: 2rem;
  }

  .analysis-item {
    padding: 1rem;
  }
}
</style>
