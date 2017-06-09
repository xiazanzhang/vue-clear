<template>
    <div>
        <Menu mode="horizontal" active-name="1">
            <Menu-item name="1" @click.native="to('/')">
                <Icon type="ios-paper"></Icon>
                首页
            </Menu-item>
            <Menu-item name="2" @click.native="to('/member')">
                <Icon type="ios-people"></Icon>
                用户管理
            </Menu-item>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    统计分析
                </template>
                <Menu-group title="使用">
                    <Menu-item name="3-1">新增和启动</Menu-item>
                    <Menu-item name="3-2">活跃分析</Menu-item>
                    <Menu-item name="3-3">时段分析</Menu-item>
                </Menu-group>
                <Menu-group title="留存">
                    <Menu-item name="3-4">用户留存</Menu-item>
                    <Menu-item name="3-5">流失用户</Menu-item>
                </Menu-group>
            </Submenu>
            <Menu-item name="4">
                <Icon type="settings"></Icon>
                综合设置
            </Menu-item>
        </Menu>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                theme3: 'light'
            }
        },
        methods: {
            to(path) {
                this.$router.push({
                    path: path
                })
            }
        }
    }

</script>