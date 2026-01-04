import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Globálne CSS
import './assets/style.css'
import './assets/main.css'
import './assets/base.css'
import './assets/bossovia.css'
import './assets/zbrane.css'
import './assets/lore.css'
import './assets/kontakt.css'

createApp(App)
  .use(router)
  .mount('#app')
