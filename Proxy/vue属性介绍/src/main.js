import { createApp } from 'vue'
import App from './App-ref.vue'

const vm = createApp(App).mount('#app')
window.vm = vm