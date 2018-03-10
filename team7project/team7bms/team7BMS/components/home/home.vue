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

    export default {
        components: {
            newnav,
            newheader
        }
    }
</script>