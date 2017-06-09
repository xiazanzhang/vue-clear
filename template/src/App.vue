<template>
    <div id="app">
        <left-menu></left-menu>
        <router-view class="router-view"></router-view>
    </div>
</template>

<script>
    import LeftMenu from './components/menu'

    export default {
        components: {
            LeftMenu
        }
    }

</script>

<style lang="less">
    @import '~iview/dist/styles/iview.css';
    @import 'assets/style/global.less';
    @import 'https://cdn.bootcss.com/animate.css/3.5.2/animate.css';
</style>