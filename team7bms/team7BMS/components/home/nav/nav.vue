<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" @click="change"><router-link to="/select">商品管理</router-link></li>
            <li class="list-group-item" @click="change"><router-link to="/clients">用户管理</router-link></li>
            <li class="list-group-item" @click="change"><router-link to="#">订单管理</router-link></li>
            <li class="list-group-item" @click="change" ><router-link to="/auth">权限用户管理</router-link></li>
        </ul>    
    </div>
</template>

<script>
    import './nav.scss'
    export default {
        methods:{
            change(e){
                console.log(e.target.parentNode)
                if(e.target.tagName=='A'){
                    var lis=document.querySelectorAll("li");
                    for(var i=0;i<lis.length;i++){
                        lis[i].style.background=""
                    }
                    e.target.parentNode.style.background="orange";
                    console.log(lis)
                }
            }
        }

    }
</script>