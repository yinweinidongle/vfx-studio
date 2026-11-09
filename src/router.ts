import { createRouter, createWebHashHistory } from 'vue-router'
import StudioPage from './components/StudioPage.vue'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', name: 'studio', component: StudioPage }],
})
