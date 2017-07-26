<template>
    <div class="header">
        <el-menu mode="horizontal">
            <div class="brand">
                LOGO
            </div>
            
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">订单管理</el-menu-item>
    
            <div class="user_dropdown">
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        用户
                        <i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>管理</el-dropdown-item>
                        <el-dropdown-item>登出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'pagehead',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
.header {
    width: 100%;
    position: fixed;
}
.brand{
    float: left;
    text-align: center;
    width: 20%;
    height: 100%
}
.user_dropdown {
    float: right;
    text-align: center;
    padding-right:10%;
    padding-top:20px
}
</style>


