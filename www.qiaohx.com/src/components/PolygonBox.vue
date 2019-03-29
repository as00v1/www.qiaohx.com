<template>
    <div class="contentBox">
        <div class="content-left">
            <div class="skw-page__skewed blue-to-green">
                <!-- 左侧斜框 -->
            </div>
        </div>
        <div class="content-right">
            <div class="skw-page__skewed green-to-blue filter-dark">
                <!-- 右侧 -->
            </div>
        </div>
        <div class="row">
            <div class="main-box col-md-6">
                <Login></Login>
            </div>
        </div>

        <div id="enter-right">
            <i class="iconfont icon-jinru"></i>
        </div>
    </div>
</template>

<script type="text/javascript">
    import Login from './Login'
    export default {
        name: 'PolygonBox',
        components: {
            Login
        }
    }
</script>

<style lang="scss" type="text/css">
    @import 'http://at.alicdn.com/t/font_947057_fyej5v3ppth.css';
    @import '../assets/css/animate.css';
</style>
