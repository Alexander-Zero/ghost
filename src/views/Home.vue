<template>
    <nav-bar></nav-bar>
    <h2>这是首页</h2>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import NavBar from "../components/common/NavBar";

    export default {
        name: 'Home',
        components: {
            NavBar,
            HelloWorld
        }
    }
</script>
