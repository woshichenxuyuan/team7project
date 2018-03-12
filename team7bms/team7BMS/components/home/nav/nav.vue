<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item"><router-link to="/select">商品管理</router-link></li>
            <li class="list-group-item"><router-link to="/clients">用户管理</router-link></li>
            <li class="list-group-item"><router-link to="#">订单管理</router-link></li>
            <li class="list-group-item" ><router-link to="/auth">权限用户管理</router-link></li>
        </ul>    
    </div>
</template>

<script>
    import './nav.scss'
    export default {}
</script>