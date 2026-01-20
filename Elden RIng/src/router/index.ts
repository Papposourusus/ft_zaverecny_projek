import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import BossoviaView from '../views/BossoviaView.vue'
import ZbraneView from '../views/ZbraneView.vue'
import LoreView from '../views/LoreView.vue'
import GaleriaView from '../views/GaleriaView.vue'
import KontaktView from '../views/KontaktView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/bossovia', component: BossoviaView },
  { path: '/zbrane', component: ZbraneView },
  { path: '/lore', component: LoreView },
  { path: '/galeria', component: GaleriaView },
  { path: '/kontakt', component: KontaktView },
]

const router = createRouter({
  history: createWebHistory(
    import.meta.env.MODE === 'production'
      ? '/ft_zaverecny_projek/'
      : '/'
  ),
  routes
})

export default router
