const urlSimilar = [
  // 放置路由
  {
    path: '/',
    // name: 'leader',
    component: () => import(/* webpackChunkName: "Leader" */ '@/components/Leader.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
      }, {
        path: '/axios',
        name: 'axios',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Axios.vue')
      },
    ]
  },
]
export default urlSimilar