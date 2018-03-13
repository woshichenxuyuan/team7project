<template>
    <div class="hd">
        
        <h5><span>7号店便利店</span>后台管理系统</h5>
        <div class="right">
            <p><span>欢迎您！[{{name}}] </span >
            <span @click="exit">退出</span>
            </p>
        </div>
    </div>
</template>

<script>
import './header.scss'
// import router from '../../../router/router.js'
   
    // var user= window.localStorage.getItem('ffztoken');
    // console.log(user,"name")
    // var user='';
    export default {
      
        data:function(){
            return {
                name:this.getName()
            }
        },
        methods:{
            exit(){
            window.localStorage.removeItem('ffztoken');
            console.log(999)
            window.location.href="http://localhost:8080/#/login"

            },
            getName(){
                var user= window.localStorage.getItem('ffztoken');
                if (user) {

                    return user
                }else{
                    window.location.href="http://localhost:8080/#/login"

                }

            }
        }
    }
</script>