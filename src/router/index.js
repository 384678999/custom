import Vue from 'vue'
import VueRouter from 'vue-router'
import url from './url.js'
import urlSimilar from './urlSimilar.js'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    ...url,
    ...urlSimilar
  ]
})

export default router
