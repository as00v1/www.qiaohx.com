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
            </div>
        </NavHeader>
        <div class="container-fluid"><router-view/></div>
        <NavFooter></NavFooter>
    </div>
</template>

<script>
import NavHeader from './components/NavHeader'
import NavFooter from './components/NavFooter'
import vueCanvasNest from 'vue-canvas-nest'
import Login from './components/Login'
import EditOnline from './components/EditOnline'

export default {
  name: 'App',
  components: {
    NavHeader,
    NavFooter,
    vueCanvasNest,
    Login,
    EditOnline
  },
  data() {
      return {
          list: [
              {id: 0, text: "编辑", link: '/EditOnline'},
              {id: 1, text: "其他",link: '/other'},
              {id: 2, text: "关于", link: '/personal'}
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
