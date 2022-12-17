import { createApp } from 'vue'
import App from './App.vue'
import eventBus from "vue3-eventbus";

const a = createApp(App)
a.use(eventBus)
a.mount('#app')
