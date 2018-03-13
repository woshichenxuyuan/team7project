<template>
    <div>
        <div class="header">
            <newheader></newheader>
        </div>
        <div class="body">
            <div class="nav">
                <newnav></newnav>
            </div>
            <div class="container">
            <!-- <h5><i>欢迎来到7号管理后台！</i> </h5> -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import './home.css'
    import '../../common/common.css'
    import newnav from './nav/nav.vue'
    import newheader from './header/header.vue'
    import '../../bootstrap/css/bootstrap.css'

    export default {
        mounted:function(){
           var user= window.localStorage.getItem('ffztoken') ;
           // console.log(user)
        },
        components: {
            newnav,
            newheader
        }
    }
</script>