# 最简单的 Element Plus 应用（Vite 构建）<!-- omit in toc -->

## 1. 使用

1. 安装依赖：`npm install`
2. 启动测试服务器：`npm run dev`
3. 生产构建：`npm run build`

## 2. 理解

可以使用 `app.use(ElementPlus)` 的方式来完整引入 Element Plus，这种方式即使没有用到的组件也会一起打包，构建后的文件比较大。通常情况下是使用按需导入，可以使用 “自动按需导入” 和 “手动按需导入” 两种方式。[官方文档 >>](https://element-plus.org/zh-CN/guide/quickstart.html#%E5%AE%8C%E6%95%B4%E5%BC%95%E5%85%A5)

- 自动按需导入： 需要安装 unplugin-vue-components 和 unplugin-auto-import 两款插件，然后在 Vite 配置文件中设置自动导入。
  - 本工程使用此方式。
  - 使用自动导入时则无需设置插件和样式： `app.use(ElementPlus)` 和 `import 'element-plus/dist/index.css'`。
- 手动按需导入： 基于 ES Module 按需导入，如 `import { ElButton } from 'element-plus'`。另外还需要安装和配置 unplugin-element-plus 来导入样式。

以下是使用完整构建和按需构建打包后的文件对比，差别甚大：

```sh
vite v4.2.1 building for production...
✓ 1374 modules transformed.
dist/index.html                   0.33 kB
dist/assets/index-472d715e.css  321.61 kB │ gzip:  43.54 kB
dist/assets/index-eb6c3463.js   840.76 kB │ gzip: 271.79 kB
✓ built in 11.85s

vite v4.2.1 building for production...
✓ 1373 modules transformed.
dist/index.html                  0.33 kB
dist/assets/index-67a6a197.css  23.92 kB │ gzip:  3.76 kB
dist/assets/index-555063c8.js   78.19 kB │ gzip: 29.99 kB
✓ built in 9.70s
```
