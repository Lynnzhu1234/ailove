<script setup>
import { ref } from 'vue'
import { useTestFormStore } from '../../stores/testForm'
import { ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElButton } from 'element-plus'
import { storeToRefs } from 'pinia'

const store = useTestFormStore()
const { person1, person2 } = storeToRefs(store)
const formRef = ref(null)

const mbtiOptions = [
  { value: 'INTJ', label: 'INTJ - 建筑师' },
  { value: 'INTP', label: 'INTP - 逻辑学家' },
  { value: 'ENTJ', label: 'ENTJ - 指挥官' },
  { value: 'ENTP', label: 'ENTP - 辩论家' },
  { value: 'INFJ', label: 'INFJ - 提倡者' },
  { value: 'INFP', label: 'INFP - 调停者' },
  { value: 'ENFJ', label: 'ENFJ - 主人公' },
  { value: 'ENFP', label: 'ENFP - 竞选者' },
  { value: 'ISTJ', label: 'ISTJ - 物流师' },
  { value: 'ISFJ', label: 'ISFJ - 守卫者' },
  { value: 'ESTJ', label: 'ESTJ - 总经理' },
  { value: 'ESFJ', label: 'ESFJ - 执政官' },
  { value: 'ISTP', label: 'ISTP - 鉴赏家' },
  { value: 'ISFP', label: 'ISFP - 探险家' },
  { value: 'ESTP', label: 'ESTP - 企业家' },
  { value: 'ESFP', label: 'ESFP - 表演者' },
]

const zodiacOptions = [
  { value: '白羊座', label: '白羊座 (3.21-4.19)' },
  { value: '金牛座', label: '金牛座 (4.20-5.20)' },
  { value: '双子座', label: '双子座 (5.21-6.21)' },
  { value: '巨蟹座', label: '巨蟹座 (6.22-7.22)' },
  { value: '狮子座', label: '狮子座 (7.23-8.22)' },
  { value: '处女座', label: '处女座 (8.23-9.22)' },
  { value: '天秤座', label: '天秤座 (9.23-10.23)' },
  { value: '天蝎座', label: '天蝎座 (10.24-11.22)' },
  { value: '射手座', label: '射手座 (11.23-12.21)' },
  { value: '摩羯座', label: '摩羯座 (12.22-1.19)' },
  { value: '水瓶座', label: '水瓶座 (1.20-2.18)' },
  { value: '双鱼座', label: '双鱼座 (2.19-3.20)' },
]

const validateForm = async () => {
  if (!formRef.value) return false
  try {
    await formRef.value.validate()
    return true
  } catch {
    return false
  }
}

const handleSubmit = async () => {
  if (await validateForm()) {
    emit('submit')
  }
}

const emit = defineEmits(['submit'])
</script>

<template>
  <div class="test-form-container">
    <el-form
      ref="formRef"
      :model="{ person1, person2 }"
      :rules="store.rules"
      label-position="top"
      class="test-form"
      size="large"
    >
      <div class="persons-container">
        <!-- 第一个人的信息 -->
        <div class="person-form">
          <div class="form-header">
            <h3>你的信息</h3>
          </div>

          <el-form-item label="昵称" prop="person1.name">
            <el-input
              v-model="person1.name"
              placeholder="输入你的昵称"
              maxlength="20"
              show-word-limit
            />
          </el-form-item>

          <el-form-item label="MBTI 性格类型" prop="person1.mbti">
            <el-select v-model="person1.mbti" placeholder="选择你的 MBTI 类型" filterable>
              <el-option
                v-for="item in mbtiOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

          <el-form-item label="星座" prop="person1.zodiac">
            <el-select v-model="person1.zodiac" placeholder="选择你的星座" filterable>
              <el-option
                v-for="item in zodiacOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </div>

        <!-- 分隔线 -->
        <div class="form-divider">
          <div class="divider-line"></div>
          <div class="divider-text">❤️</div>
          <div class="divider-line"></div>
        </div>

        <!-- 第二个人的信息 -->
        <div class="person-form">
          <div class="form-header">
            <h3>TA的信息</h3>
          </div>

          <el-form-item label="昵称" prop="person2.name">
            <el-input
              v-model="person2.name"
              placeholder="输入对方的昵称"
              maxlength="20"
              show-word-limit
            />
          </el-form-item>

          <el-form-item label="MBTI 性格类型" prop="person2.mbti">
            <el-select v-model="person2.mbti" placeholder="选择对方的 MBTI 类型" filterable>
              <el-option
                v-for="item in mbtiOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

          <el-form-item label="星座" prop="person2.zodiac">
            <el-select v-model="person2.zodiac" placeholder="选择对方的星座" filterable>
              <el-option
                v-for="item in zodiacOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </div>
      </div>

      <div class="form-actions">
        <el-button type="primary" @click="handleSubmit">开始��析你们的契合度</el-button>
      </div>
    </el-form>
  </div>
</template>

<style scoped>
.test-form-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  animation: fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1);
  background: #ffebee;
}

.test-form {
  background: rgba(255, 255, 255, 0.9);
  padding: 3rem;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
}

.persons-container {
  display: flex;
  gap: 3rem;
  margin-bottom: 3rem;
}

.person-form {
  flex: 1;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 18px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.person-form:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(255, 192, 203, 0.2);
  background: rgba(255, 255, 255, 0.9);
}

.form-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.form-header h3 {
  color: #1d1d1f;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.form-divider {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
}

.divider-line {
  width: 1px;
  height: 120px;
  background: rgba(0, 0, 0, 0.1);
  margin: 1.5rem 0;
}

.divider-text {
  color: #86868b;
  font-size: 1.4rem;
  padding: 0.5rem;
  font-weight: 300;
}

.form-actions {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

:deep(.el-form-item) {
  margin-bottom: 2rem;
}

:deep(.el-form-item__label) {
  color: #1d1d1f;
  font-size: 0.95rem;
  font-weight: 500;
  padding-bottom: 0.5rem;
}

:deep(.el-input__wrapper),
:deep(.el-select__wrapper) {
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: none !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.el-input__wrapper:hover),
:deep(.el-select__wrapper:hover) {
  border-color: rgba(0, 0, 0, 0.2);
  transform: translateY(-1px);
}

:deep(.el-input__wrapper:focus-within),
:deep(.el-select__wrapper:focus-within) {
  border-color: #000;
  background: #fff;
}

:deep(.el-input__inner),
:deep(.el-select__input) {
  color: #1d1d1f;
  font-size: 1rem;
  height: 45px;
  line-height: 45px;
}

:deep(.el-select) {
  width: 100%;
}

:deep(.el-button) {
  height: 50px;
  padding: 0 48px;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 25px;
  background: #ff4081;
  border: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.el-button:hover) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 64, 129, 0.3);
  background: #f50057;
}

:deep(.el-select-dropdown__item) {
  padding: 12px 20px;
  font-size: 0.95rem;
}

:deep(.el-select-dropdown__item.selected) {
  color: #000;
  font-weight: 500;
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

@media (max-width: 768px) {
  .test-form-container {
    padding: 1rem;
  }

  .test-form {
    padding: 1.5rem;
  }

  .persons-container {
    flex-direction: column;
    gap: 2rem;
  }

  .form-divider {
    flex-direction: row;
    padding: 1.5rem 0;
  }

  .divider-line {
    width: 80px;
    height: 1px;
    margin: 0 1rem;
  }

  .person-form {
    padding: 1.5rem;
  }

  .form-header h3 {
    font-size: 1.5rem;
  }
}

.form-desc {
  color: #86868b;
  font-size: 1rem;
  margin-top: 0.5rem;
}
</style>
