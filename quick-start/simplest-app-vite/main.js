import { createApp } from 'vue';
import App from './App.vue';

// 创建 Vue应用
const app = createApp(App);

// 完整导入 ElementPlus 插件
// 本工程使用自动按需导入，所以不需要此段代码
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';
// app.use(ElementPlus);

// 挂载应用
app.mount('#app');
