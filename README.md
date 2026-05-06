# 明锐仪器 官方网站

[明锐仪器 (Mingrui Instruments)](https://github.com/woshinibaba2026/mingrui) — 半导体精密量测与微纳米三维形貌检测平台企业官网。

## 概览

基于 Vue 3 + TypeScript 构建的静态企业网站，面向半导体制造、科研计量与工业精密检测场景，呈现公司技术能力、产品矩阵与方案咨询服务。

**技术栈**

| 层       | 技术选型                                                   |
| -------- | ---------------------------------------------------------- |
| 框架     | [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`) |
| 路由     | [Vue Router 5](https://router.vuejs.org/)                  |
| 构建工具 | [Vite 8](https://vite.dev/)                                |
| 样式     | [Tailwind CSS 4](https://tailwindcss.com/)                 |
| 语言     | [TypeScript ~6.0](https://www.typescriptlang.org/)         |
| 类型检查 | [vue-tsc](https://github.com/vuejs/language-tools)         |

## 页面结构

| 路由          | 页面     | 内容                                 |
| ------------- | -------- | ------------------------------------ |
| `/`           | 首页     | 公司核心指标、应用场景、技术概览     |
| `/about`      | 关于明锐 | 公司定位、理念、协同研发能力         |
| `/technology` | 核心技术 | 四大技术支柱、量测工作流             |
| `/products`   | 产品中心 | 四大产品线、选型指南、产品优势       |
| `/contact`    | 方案咨询 | 联系方式、咨询流程、准备工作指引     |

## 项目结构

```
src/
├── main.ts                        # 应用入口
├── App.vue                        # 根组件 (Header + RouterView + Footer)
├── style.css                      # 全局样式 (Tailwind CSS)
├── router/index.ts                # 路由配置 (5 个页面路由)
├── components/
│   ├── AppHeader.vue              # 顶部导航栏
│   ├── AppFooter.vue              # 页脚
│   ├── HelloWorld.vue             # 示例组件
│   └── common/                    # 通用 UI 组件
│       ├── CtaSection.vue         # 行动召唤区域
│       ├── FeatureCard.vue        # 特性卡片
│       ├── PageHero.vue           # 页面横幅
│       ├── ProductCard.vue        # 产品卡片
│       └── SectionHeader.vue      # 区域标题
├── data/                          # 内容数据层
│   ├── types.ts                   # TypeScript 类型定义
│   ├── site.ts                    # 公司信息、导航、联系方式
│   ├── pages.ts                   # 各页面 Hero 与定位卡片内容
│   ├── technologies.ts            # 技术支柱与工作流
│   ├── products.ts                # 产品线与优势
│   ├── capabilities.ts            # 首页指标与能力模块
│   └── applications.ts            # 6 大应用场景
└── views/                         # 页面视图组件
    ├── HomeView.vue
    ├── AboutView.vue
    ├── TechnologyView.vue
    ├── ProductView.vue
    └── ContactView.vue
```

### 架构特点

- **数据与视图分离** — 所有文本内容集中在 `src/data/`，视图组件只负责渲染和交互逻辑
- **组件化设计** — 通用 UI 组件集中在 `components/common/`，可在多个页面间复用
- **中英双语** — 导航和内容支持中英文标签，适配国际化展示需求

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 关于明锐仪器

深圳明锐仪器有限公司聚焦半导体精密量测与微纳米三维形貌检测，核心方向包括：

- 微纳米三维形貌测量
- 半导体工艺量测（晶圆检测、CMP 平坦化、光刻与刻蚀）
- 精密运动与信号采集
- 算法分析与数据平台

---

> 深圳明锐仪器有限公司 — Semiconductor Metrology Systems
