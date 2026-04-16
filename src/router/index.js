import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sobre-erick',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/proyectos',
      name: 'projects-main', // La página principal tipo buscador
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/experiencia',
      name: 'experience',
      component: () => import('../views/ExperienceView.vue')
    },
    {
      path: '/educacion',
      name: 'education',
      component: () => import('../views/EducationView.vue')
    },
    {
      path: '/conocimientos',
      name: 'skills',
      component: () => import('../views/SkillsView.vue')
    },
    {
      path: '/mis-proyectos',
      name: 'user-projects', // El listado detallado de tus trabajos
      component: () => import('../views/UserProjectsView.vue')
    }
  ]
})

export default router