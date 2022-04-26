import { createApp } from 'vue'
import App from './App.vue'
import './sass/app.scss'
import ToastPlugin from './plugins/ToastPlugin.js'
const app = createApp(App)

app.use(ToastPlugin)
app.mount('#app')
