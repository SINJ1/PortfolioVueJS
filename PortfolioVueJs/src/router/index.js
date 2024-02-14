import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      //Créez un chemin pour que chaque mauvais chemin renvoie à la page d'erreur 404
      path: "/:pathMatch(.*)*",
      name:"404",
      component: () => import("../views/NotFound.vue")
    }
  ]
})

export default router
