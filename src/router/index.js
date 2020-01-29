import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Notifications from '../components/Notifications.vue'
import Request from '../components/Requests.vue'
import Profile from '../components/Profile.vue'
import EditProfile from '../components/EditProfile.vue'
import Category from '../components/Category.vue'
import BusinessAdvertisement from '../components/BusinessAdvertisement.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/requests',
    name: 'requests',
    component: Request
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Notifications
  },
  { 
    path:'/editProfile',
    name: 'editProfile',
    component: EditProfile
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path:'/businessadvertisement',
    name:'BusinessAdvertisement',
    component: BusinessAdvertisement
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
