import Vue from 'vue';
import homeComponnet from './components/home/home.vue';

import router from './router/router.js'

new Vue({
    el:'#app',
    router,
    render:h=>h(homeComponnet)

})