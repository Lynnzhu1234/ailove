import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTestFormStore = defineStore('testForm', () => {
  // 状态
  const person1 = ref({
    name: '',
    mbti: '',
    zodiac: '',
  })

  const person2 = ref({
    name: '',
    mbti: '',
    zodiac: '',
  })

  const step = ref(1)

  // 计算属性
  const isValid = computed(() => {
    const p1Valid = person1.value.name && person1.value.mbti && person1.value.zodiac
    const p2Valid = person2.value.name && person2.value.mbti && person2.value.zodiac
    return p1Valid && p2Valid
  })

  // 表单验证规则
  const rules = {
    'person1.name': [{ required: true, message: '请输入姓名', trigger: 'blur' }],
    'person1.mbti': [{ required: true, message: '请选择MBTI类型', trigger: 'change' }],
    'person1.zodiac': [{ required: true, message: '请选择星座', trigger: 'change' }],
    'person2.name': [{ required: true, message: '请输入姓名', trigger: 'blur' }],
    'person2.mbti': [{ required: true, message: '请选择MBTI类型', trigger: 'change' }],
    'person2.zodiac': [{ required: true, message: '请选择星座', trigger: 'change' }],
  }

  // Actions
  function updatePerson1(data) {
    person1.value = { ...person1.value, ...data }
  }

  function updatePerson2(data) {
    person2.value = { ...person2.value, ...data }
  }

  function nextStep() {
    if (step.value < 2) step.value++
  }

  function prevStep() {
    if (step.value > 1) step.value--
  }

  function reset() {
    person1.value = { name: '', mbti: '', zodiac: '' }
    person2.value = { name: '', mbti: '', zodiac: '' }
    step.value = 1
  }

  return {
    person1,
    person2,
    step,
    isValid,
    rules,
    updatePerson1,
    updatePerson2,
    nextStep,
    prevStep,
    reset,
  }
})
