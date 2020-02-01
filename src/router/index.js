import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Notifications from '../components/Notifications.vue'
import Request from '../components/Requests.vue'
import Profile from '../components/Profile.vue'
import EditProfile from '../components/EditProfile.vue'
import Login from '../components/Login.vue'
// import Category from '../components/Category.vue'
import BusinessAdvertisement from '../components/BusinessAdvertisement.vue'
import SignUp from '../components/SignUp.vue'
//import FriendsProfile from '../components/FriendsProfile.vue'
import businessFriendsProfile from '../components/businessFriendsProfile.vue'
import FriendsProfile from '../components/FriendsProfile.vue'
import EditBusinessProfile from '../components/EditBusinessProfile.vue'
import TypeOfProfile from '../components/TypeOfProfile.vue'
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
    path:'/login',
    name: 'login',
    component: Login
  },
  {
    path:'/businessadvertisement',
    name:'BusinessAdvertisement',
    component: BusinessAdvertisement
  },
  {
    path:'/signup',
    name:'SignUp',
    component: SignUp
  },
  {
    path:'/businessProfile/:id',
    name:'businessFriendprofile',
    component: businessFriendsProfile
  },
  {

    path:'/profile/:id',
    name:'friendprofile',
    component: FriendsProfile
  },
  {
    path:'/editBusinessProfile',
    name:'editBusinessProfile',
    component: EditBusinessProfile
  },
  {
    path:'/typeofprofile',
    name:'typeOfProfile',
    component: TypeOfProfile
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
