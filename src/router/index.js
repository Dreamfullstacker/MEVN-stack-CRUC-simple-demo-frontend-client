import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/LoginComponent')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../components/CreateComponent')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/ListComponent')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditComponent')
  },
  {
    path : '/data_download/:id',
    name : 'data_download',
    component: () => import('../components/DataDownloadComponent') 
  },
  {
    path : '/datatable',
    name : 'datatable',
    component : () => import('../components/JqueryTable')
  },
  {
    path : '/quiz',
    name : 'quiz',
    component : () => import('../components/QuizComponent')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router