# Vue 项目设计文档

## 项目结构

├── src/
│ ├── assets/ # 静态资源
│ ├── components/ # 组件
│ ├── router/ # 路由配置
│ ├── stores/ # Pinia stores
│ ├── views/ # 页面视图
│ ├── App.vue # 根组件
│ └── main.js # 入口文件
├── public/ # 公共资源
└── index.html # HTML 模板

## 技术栈

- **框架**: Vue 3.5.13
- **构建工具**: Vite 6.0.1
- **状态管理**: Pinia
- **路由**: Vue Router
- **UI 框架**: Element Plus
- **代码规范**: ESLint + Prettier
- **编辑器配置**: EditorConfig

## 技术要点

1. **Vue 3 Composition API**

   - 使用 `<script setup>` 语法
   - 组件逻辑更清晰,更易复用

2. **Vite 构建**

   - 快速的热模块更新(HMR)
   - 优化的构建性能
   - 开发服务器

3. **状态管理**

   - 使用 Pinia 进行状态管理
   - 支持 Options API 和 Composition API

4. **路由配置**

   - 基于 Vue Router 的路由管理
   - 支持路由懒加载
   - 路由级别的代码分割

5. **代码规范**

   - ESLint 进行代码检查
   - Prettier 进行代码格式化
   - EditorConfig 统一编码风格

6. **开发工具**
   - Vue DevTools 支持
   - Vite 插件系统
   - VS Code 推荐扩展

## 环境配置

- Node.js 环境
- 包管理器: npm
- 开发工具: VS Code (推荐)

## 命令说明

- `npm install`: 安装依赖
- `npm run dev`: 启动开发服务器
- `npm run build`: 构建生产版本
- `npm run lint`: 运行 ESLint 检查
