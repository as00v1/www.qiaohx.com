<template>
    <div id="app">
        <!-- <vueCanvasNest :config="{color:'0,0,0',opacity:1}"></vueCanvasNest> -->
        <NavHeader :isLogin=true>
            <div class="" slot="web">
                <ul class="nav navbar-nav">
                    <li v-for="item in list" v-bind:key="item.id">
                        <router-link class="text-right" v-bind:to="item.link">{{ item.text }}</router-link>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><router-link to="/Login">登录</router-link></li>
                    <li><router-link class="border-white" to="/SignUp">注册</router-link></li>
                </ul>
                <!-- <div class="pull-right navheader-title hidden-xs">
                    <router-link to="/Login">登录</router-link>
                    <router-link class="border-white" to="/SignUp">注册</router-link>
                </div> -->
                <!-- <form class="navbar-right">
                    <button type="submit" class="btn btn-default">
                        注册
                    </button>
                    <a class="navbar-text navbar-right">登录</a>
                </form> -->
            </div>
            <!-- <span slot="sign" class="navheader-title visible-xs-inline-block">
                <router-link to="/Login">登录</router-link>
                <router-link class="border-white" to="/SignUp">注册</router-link>
            </span> -->
        </NavHeader>
        <router-view/>
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
        // list: [
        //       {id: 0, text: "", link: '/tool'},
        //       {id: 1, text: "",link: '/other'},
        //       {id: 2, text: "", link: '/personal'}
        //   ]
      }
  }
}
</script>
<style lang="scss" type="text/css">
    @import '~@/assets/css/index';
</style>
