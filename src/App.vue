<style scoped>
    .app{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .lb-green-style {
        background-color: #89c997;
    }
    .logo {
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
    /**
     * 此处去除menu上ul样式
     */
    .ivu-menu-horizontal.ivu-menu-light:after {
        background-color: #fff;
    }
</style>
<template>
    <div class="app">
        <Layout>
            <Header style="background-color: #fff">
                <Menu mode="horizontal" theme="light" active-name="1">
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            首页
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="images"></Icon>
                            梓图
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="film-marker"></Icon>
                            饭制
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="android-create"></Icon>
                            手绘梓
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <div style="margin-top: 20px;">
                <router-view></router-view>
            </div>
            <Footer class="layout-footer-center">2018 - 2018</Footer>
            <BackTop></BackTop>
        </Layout>
    </div>
</template>
<script>
export default {
}
</script>
