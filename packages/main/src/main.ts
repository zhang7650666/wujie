import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Wujie from 'wujie-vue3'

const {preloadApp} = Wujie
createApp(App).use(Wujie).mount('#app');

// 预加载
preloadApp({name: 'vue3', url: 'http://localhost:8081', exec: true})
