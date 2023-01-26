import { createRouter, createWebHistory } from 'vue-router'
import homePage from "../components/homePage.vue"
import lvlOne from "../components/lvlOne.vue"
import testTEST from "../components/testTEST.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: homePage
    },
    {
      path: '/vueLVL-1',
      name: 'vueFirstLevel',
      component: lvlOne
    },
    {
      path: '/test',
      name: 'test',
      component: testTEST
    },
  ]
})

export default router
