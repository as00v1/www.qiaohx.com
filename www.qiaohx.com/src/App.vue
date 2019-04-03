<template>
    <div id="app">
        <vueCanvasNest :config="{color:'0,0,0',opacity:1}"></vueCanvasNest>
        <NavHeader>
            <div class="" slot="web">
                <ul class="nav navbar-nav">
                    <li v-for="item in list" v-bind:key="item.id">
                        <router-link class="text-right" v-bind:to="item.link">{{ item.text }}</router-link>
                    </li>
                </ul>
                <div class="pull-right navheader-title">
                    <router-link to="/Login">登录</router-link>
                    <router-link class="border-white" to="/Login">注册</router-link>
                </div>
            </div>
            <!-- <div slot="sign" class="pull-right navheader-title">
                <router-link to="/Login">登录</router-link>
                <router-link class="border-white" to="/Login">注册</router-link>
            </div> -->
        </NavHeader>
        <router-view/>
        <!-- <div class="row">
            <div class="main-box col-md-4 col-xs-12 col-sm-8">
                <Login></Login>
            </div>
        </div> -->
        <NavFooter></NavFooter>
    </div>
</template>

<script>
import NavHeader from './components/NavHeader'
import NavFooter from './components/NavFooter'
import vueCanvasNest from 'vue-canvas-nest'
import Login from './components/Login'

export default {
  name: 'App',
  components: {
    NavHeader,
    NavFooter,
    vueCanvasNest,
    Login
  },
  data() {
      return {
          list: [
              {id: 0, text: "工具", link: '/tool'},
              {id: 1, text: "牛奶",link: '/other'},
              {id: 2, text: "蛋白质", link: '/personal'}
          ]
      }
  }
}
</script>
<style lang="scss" type="text/css">
    @import '~@/assets/css/index';
</style>
