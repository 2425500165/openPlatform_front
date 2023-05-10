import './assets/main.css'
import 'normalize.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/element-variarbles.less'


import { createApp } from 'vue'
import pinia from './stores/index.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(pinia)
app.use(ElementPlus)
app.use(router)

app.mount('#app')
