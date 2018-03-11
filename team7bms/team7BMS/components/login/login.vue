<template>
    <div class="login-box">
        <div class="col-sm-12 b-r">
            <h3 class="m-t-none m-b">登录</h3>
            <form role="form">
                <div class="form-group text-left">
                    <label>用户名：</label>
                    <input type="text" v-model="username" name="username" placeholder="请输入用户名" class="form-control required">
                </div>
                <div class="form-group  text-left">
                    <label>密码：</label>
                    <input type="password" v-model="password" name="password" placeholder="请输入密码" class="form-control required">
                </div>
                <div>
                    <input type="button"  class="btn btn-primary pull-right m-t-n-xs" value="登录" @click="login">
                </div>
            </form>
        </div>
        <div class="copyright">2017 © ffzby www.ffz-team7.com</div>
    </div>
</template>

<script type="text/javascript">
    import './login.scss'
    import '../../bootstrap/css/bootstrap.css'
    import http from '../../utils/httpask.js'
    import router from '../../router/router.js'
    export default{
        data:function(){
            return {
                username:'',
                password:''
            }
        },
        methods:{
            login(){
                http.post('login',{username:this.username,password:this.password}).then((res)=>{
                    console.log(res.data.data)
                    if(res.data.status){
                        window.localStorage.setItem('ffztoken',res.data.data[0].username);
                        router.push({name:'index'})
                    }
                })
            }

        }
    }
</script>