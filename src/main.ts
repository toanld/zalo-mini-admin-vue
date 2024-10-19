import './assets/css/satoshi.css'
import './assets/css/style.css'
import 'jsvectormap/dist/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { myTrans } from './libs/functions'; // Import hàm myTrans toàn cục

import VueApexCharts from 'vue3-apexcharts'
const app = createApp(App)
// Thiết lập hàm myTrans là một global property
app.config.globalProperties.$myTrans = myTrans;

// Đăng ký API toàn cục để gọi dễ dàng trong component
app.config.globalProperties.$API = API;
app.use(createPinia())
app.use(router)
app.use(VueApexCharts)
app.mount('#app')
