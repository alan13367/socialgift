import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import mitt from 'mitt';
const emitter = mitt();
const app = createApp(App)

app.use(router)
app.config.globalProperties.emitter = emitter;
app.mount('#app')

window.emitter = emitter;
