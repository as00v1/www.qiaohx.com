<template lang="html">
    <div class="navbar navbar-inverse" role="navigation" id="myTabs">
        <div class="container-fluid">
            <div class="navbar-header">

                <button type="button" class="navbar-toggle" data-toggle="collapse"
                    data-target="#example-navbar-collapse">
                    <span class="sr-only"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link class="navbar-brand active" :to="home">首页</router-link>
            </div>
            <!-- <slot name="sign"></slot> -->
            <div class="collapse navbar-collapse" id="example-navbar-collapse">
                <slot name="web"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavHeader',
    data() {
        return {
            home: '/home'
        }
    }
}
</script>
<style media="screen">
    .navbar {position: absolute;width: 100%;z-index: 2;top: 0;}
</style>

<style lang="css" scoped>
@import '../assets/css/font-awesome.css';
@import '../assets/css/font-PT-ans-Narrow.css';
@import '../assets/css/font-Montserrat.css';
</style>
