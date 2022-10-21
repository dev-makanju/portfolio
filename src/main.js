import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import router from './router'
import "./assets/css/index.css";


createApp(App).use(router).use(store).mount('#app')
