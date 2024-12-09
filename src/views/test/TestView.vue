<script setup>
import { useTestFormStore } from './stores/testForm'
import TestForm from './components/TestForm/TestForm.vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const store = useTestFormStore()
const router = useRouter()

const handleSubmit = () => {
  if (!store.isValid) {
    ElMessage.error('请完整填写所有信息')
    return
  }

  ElMessage.success('验证通过，即将开始分析')
  // TODO: 跳转到结果页面
  router.push('/result')
}
</script>

<template>
  <div class="test-container">
    <h2 class="test-title">AI爱情契合度测试</h2>
    <TestForm @submit="handleSubmit" />
  </div>
</template>

<style scoped>
.test-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #ffebee 0%, #fce4ec 100%);
}

.test-title {
  text-align: center;
  color: #1d1d1f;
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
}
</style>
