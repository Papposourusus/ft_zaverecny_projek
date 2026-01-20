document.documentElement.style.setProperty(
  '--base-url',
  import.meta.env.BASE_URL
);


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
