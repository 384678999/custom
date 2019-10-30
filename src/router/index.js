import Vue from 'vue'
import VueRouter from 'vue-router'
import url from './url.js'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    ...url
  ]
})

export default router
