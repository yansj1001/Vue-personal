import { createApp } from 'vue'
import App from './App-setup.vue'

const vm = createApp(App).mount('#app')
window.vm = vm