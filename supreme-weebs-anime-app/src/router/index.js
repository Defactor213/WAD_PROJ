import { createRouter, createWebHistory } from 'vue-router'
import homepage from '../views/homepage.vue'
import euan_homepage from '../views/euan_homepage.vue'
import register from "../views/Register"
import Login from "../views/Login"
import profile from "../views/profile"
import friends from "../views/friends"
import anime_showcase from "../views/anime_showcase"
//import { useAuthState } from '../../firebase'

const routes = [
  {
    path: '/',
    name: 'euan_homepage',
    component: euan_homepage,
    meta : {requiresAuth: true} 
  },
  {
    path: '/homepage/:id',
    name: 'anime_showcase',
    component: anime_showcase,
    props: true,
    meta : {requiresAuth: true} 
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: homepage,
    meta : {requiresAuth: true} 
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta : {requiresUnauth: true} 
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta : {requiresUnauth: true} 
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile,
    meta : {requiresAuth: true} 
  },
  {
    path: '/friends',
    name: 'friends',
    component: friends,
    meta : {requiresAuth: true} 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach( async (to,from,next) => {
  
  var isAuth = null
  if(localStorage.getItem('myPage.expectSignIn')){
    isAuth = true
  }
  else{
    isAuth = false
  }
  console.log(isAuth)
  const requireAuth = to.matched.some(record => record.meta.requiresAuth)
  const requireUnauth = to.matched.some(record => record.meta.requiresUnauth)
  if ( to.name=="euan_homepage" && isAuth){
    next({name : 'homepage'})
  }
  else if (requireAuth && !isAuth){
    next({name: 'login'})
  }
  else if (requireUnauth && isAuth){
    next({name : 'homepage'})
  }
  else if (requireAuth && isAuth) {
    next()
  }
  else {
    next()
  }
})

export default router