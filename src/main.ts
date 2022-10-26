import { createApp } from 'vue'
// 引入UI框架TDesign
import TDesign from 'tdesign-vue-next';
import App from './App.vue'

// 引入router路由配置文件
import router from '@/router'

// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';
// TDesign 提供的改变页面默认样式的依赖
import 'tdesign-vue-next/dist/reset.css';

const app = createApp(App);
// 中间件执行插件
app.use(router);
app.use(TDesign);


app.mount('#app')
