import './assets/css/satoshi.css'
import './assets/css/style.css'
import 'jsvectormap/src/scss/jsvectormap.scss';
import 'flatpickr/dist/flatpickr.min.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue3-apexcharts'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueApexCharts)
app.mount('#app')
