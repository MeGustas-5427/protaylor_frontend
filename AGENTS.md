<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# PRO-TAYLOR Frontend Project Rules

## 项目定位

- 这是 `PRO-TAYLOR` 的公开官网前端，不是后台管理系统，不是纯展示原型。
- 站点目标以 `B2B 询盘 + SEO + GEO` 为优先，不以在线零售下单为目标。
- 前端必须优先保证首屏 HTML 可读、结构清晰、利于搜索引擎和 AI 系统抓取与抽取。

## 当前技术栈

- `Next.js 16.2.1`
- `React 19.2.4`
- `TypeScript`
- `Tailwind CSS 4`
- `App Router`
- `React Compiler: enabled`
- `serialize-javascript`
- `schema-dts`

## 后端与数据来源

- 后端为 Django 项目，前端默认通过 Django API 获取数据。
- API 层以 `django-ninja` 为当前约定。
- 不要在前端写死产品、分类、文章等正式业务数据，除非只是临时占位 mock。
- 如果使用 mock 数据，必须易于替换，并集中放在明确的 mock 文件中。

## 路由与渲染总原则

- 使用 `App Router`，不要切回 `Pages Router`。
- 优先使用 `Server Components`。
- 只有确实需要浏览器交互时才使用 `use client`。
- 不要为了方便把整页都做成客户端组件。
- 首屏正文、产品信息、分类说明、文章主体不要依赖客户端二次请求后再渲染。

## ISR / SSR / 静态生成策略

- 首页、产品分类页、产品详情页、资源文章页优先采用 `SSG / ISR`。
- 低频更新内容优先使用 `ISR`。
- 当前官网项目没有用户登录需求，`SSR` 不是默认方案。
- 只有在页面内容必须按请求实时变化时，才考虑 `SSR`。
- Django 发布内容后，应通过前端 revalidate 接口触发页面缓存失效。
- 如果需要更新后尽快生效，可在 revalidate 后主动预热对应 URL。

## SEO / GEO 硬性要求

- 每个公开页面都必须有明确的主主题，不允许标题、正文、结构完全模板化堆砌。
- 每个重要页面都应支持独立 metadata。
- 产品页、分类页、文章页、公司页应根据页面类型输出合适的 JSON-LD。
- 必须实现并维护：
  - `robots.txt`
  - `sitemap.xml`
  - 规范的 metadata
  - Open Graph 基础信息
  - JSON-LD 结构化数据
- 页面结构应优先支持：
  - 清晰的 `H1`
  - 合理的 `H2/H3`
  - FAQ 区块
  - 对比表或参数表
  - 可被 AI 提取的 answer-first 内容块
- 不要把重要内容只放在图片里。
- 不要把首屏内容做成完全依赖 hydration 才可见。

## 目录与代码组织

- 路由文件放在 `src/app`
- 通用组件放在 `src/components`
- API 请求、数据映射、schema、工具函数优先放在 `src/lib`
- 全局样式放在 `src/app/globals.css`
- 非路由级的页面模块建议拆到独立组件，不要把 `page.tsx` 写成超长文件

## 样式与前端实现原则

- 使用 `Tailwind CSS 4` 作为主要样式方案。
- 设计方向应服务于“高端制造商官网”，不是 SaaS 仪表盘风格，不是廉价目录站风格。
- 避免滥用动画、轮播、大量渐变和过度装饰。
- 优先保证清晰层级、留白、可读性、图片质量和模块节奏。
- 移动端必须作为正式布局处理，不能只做桌面端后被动压缩。

## 依赖使用原则

- 不要引入 `react-router`。
- 不要引入 `react-helmet` 或同类库处理 metadata。
- 不要引入 `next-seo`、`next-sitemap` 这类与 Next 内建能力重复的库，除非有明确缺口。
- 新增依赖前，先确认 Next.js 官方能力是否已覆盖。
- 能用原生和框架内建能力解决的问题，不要优先加库。

## 结构化数据约定

- 使用 `schema-dts` 提供类型支持。
- 使用 `serialize-javascript` 处理注入页面的 JSON-LD 字符串。
- 产品页优先考虑：
  - `Product`
  - `BreadcrumbList`
- 文章页优先考虑：
  - `Article` 或 `BlogPosting`
  - `BreadcrumbList`
- 公司/品牌页优先考虑：
  - `Organization`

## 开发与质量要求

- 开发命令：
  - `pnpm dev`
  - `pnpm build`
  - `pnpm start`
  - `pnpm lint`
- 提交较大改动前，至少运行一次 `pnpm lint`。
- 涉及路由、metadata、structured data、revalidate 的改动时，优先检查是否影响 SEO/GEO。
- 写代码时优先遵守当前版本 Next.js 官方文档，而不是旧版本经验。

## 当前明确不要做的事

- 不要先做成纯客户端 SPA 再补 SEO。
- 不要把官网主路径做成前端直接写死假数据的长期方案。
- 不要为了短期方便引入和 Next 冲突的页面头部管理方式。
- 不要把产品页做成只有图片和表单、没有正文结构的薄页面。
