import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomeComponent from '../components/home/home.vue'
import loginComponent from '../components/login/login.vue'

const router = new VueRouter({
    routes: [
        {path: '/',name:'index', component: HomeComponent},
        {path: '/login',name:'login' ,component: loginComponent},
        // {path: '/cnodejs', component: CnodejsComponent}
    ]
})


  // 对将要进入的路由进行权判断
router.beforeEach((to, from, next) =>{
    // window.localStorage.removeItem('ffztoken')
    if(to.path.indexOf('login') < 0 && !window.localStorage.getItem('ffztoken')){
        router.replace('login');
        next();
    } 
    next();
})

export default router;