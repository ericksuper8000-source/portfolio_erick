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
      name: 'projects-main', // La página principal tipo buscador / hub de secciones
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/experiencia',
      name: 'experience',
      component: () => import('../views/ExperienceView.vue')
    },
    {
      path: '/experiencia/:slug',
      name: 'experience-detail',
      component: () => import('../views/ExperienceDetailView.vue')
    },
    {
      path: '/educacion',
      name: 'education',
      component: () => import('../views/EducationView.vue')
    },
    {
      path: '/educacion/:slug',
      name: 'education-detail',
      component: () => import('../views/EducationDetailView.vue')
    },
    {
      path: '/conocimientos',
      name: 'skills',
      component: () => import('../views/SkillsView.vue')
    },
    {
      path: '/conocimientos/:slug',
      name: 'skill-detail',
      component: () => import('../views/SkillDetailView.vue')
    },
    {
      path: '/mis-proyectos',
      name: 'user-projects', // El listado detallado de tus trabajos
      component: () => import('../views/UserProjectsView.vue')
    },
    {
      path: '/mis-proyectos/:slug',
      name: 'project-detail',
      component: () => import('../views/ProjectDetailView.vue')
    },
    {
      path: '/buscar',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/contacto',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/curriculum',
      name: 'curriculum',
      component: () => import('../views/CurriculumView.vue')
    }
  ]
})

export default router