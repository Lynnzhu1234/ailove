# 信息输入页开发文档

#目录结构
src/views/test/
├── components/ # 页面组件
│ ├── TestForm/ # 表单组件
│ ├── MBTISelector/ # MBTI选择器
│ └── ZodiacSelector/ # 星座选择器
├── composables/ # 组合式函数
├── stores/ # 状态管理
├── utils/ # 工具函数
└── TestView.vue # 页面主文件

## 页面概述

信息输入页是用户进行双方信息录入的关键页面,用于收集进行匹配分析所需的基础数据。

## 设计考虑

### 数据流设计

#### Pinia Store 设计

```typescript
interface PersonInfo {
  name: string
  mbti: string
  zodiac: string
}

interface TestFormState {
  person1: PersonInfo
  person2: PersonInfo
  step: number
  isValid: boolean
}
```

#### 组件职责划分

- 遵循单一职责原则
- 合理抽象可复用逻辑
- 清晰的组件接口设计

### 用户体验设计

#### 表单填写流程

- 采用分步骤填写方式
- 步骤间可自由切换
- 实时显示填写进度

#### 表单验证

- 即时验证 + 提交验证
- 清晰的错误提示
- 聚焦到错误输入��

#### 移动端适配

- 响应式布局
- 适配不同屏幕尺寸
- 优化移动端输入体验

### 性能优化

#### 组件加载优化

- MBTI/星座选择器按需加载
- 大数据列表使用虚拟滚动
- 组件懒加载

#### 验证性能

- 使用防抖处理实时验证
- 验证规则缓存
- 避免不必要的重复验证

#### 渲染优化

- 合理的组件拆分
- 使用 computed 缓存计算结果
- v-show vs v-if 的选择

### 代码组织

#### 目录结构

## 功能模块

### 核心功能

1. 双方基本信息输入
2. MBTI性格类型选择
3. 星座信息选择
4. 表单验证
5. 数据提交

### 用户体验设计

- 清晰的表单布局
- 直观的选择器交互
- 实时的输入验证
- 友好的错误提示

## 组件结构

### 主要组件

- TestView.vue - 页面主容器
- TestForm.vue - 主表单组件
- MBTISelector.vue - MBTI选择器
- ZodiacSelector.vue - 星座选择器

### 组件职责

1. TestView.vue

   - 页面布局
   - 状态管理
   - 路由处理

2. TestForm.vue

   - 表单数据管理
   - 验证逻辑
   - 提交处理

3. MBTISelector.vue

   - MBTI类型选择界面
   - 选项过滤
   - 选择结果处理

4. ZodiacSelector.vue
   - 星座选择界面
   - 选项展示
   - 选择结果处理

## 开发进度

- [x] 基础页面框架
- [ ] 表单组件开发
- [ ] MBTI选择器
- [ ] 星座选择器
- [ ] 数据验证
- [ ] 状态管理
- [ ] 样式优化

## 讨论记录

### 2024-XX-XX 首次设计讨论

- 确定了基本的页面结构和组件划分
- 讨论了数据流设计和性能优化方案
- 制定了初步的开发计划

_后续讨论将持续更新..._
