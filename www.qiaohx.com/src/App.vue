<template>
    <div id="app">
        <vueCanvasNest :config="{color:'255,255,255',opacity:1}"></vueCanvasNest>
        <NavHeader>
            <ul class="nav navbar-nav" slot="web">
                <li v-for="item in list" v-bind:key="item.id">
                    <router-link v-bind:to="item.link">{{ item.text }}</router-link>
                </li>
            </ul>
        </NavHeader>
        <router-view/>
        <div class="row">
            <div class="main-box col-md-6">
                <Login></Login>
            </div>
        </div>
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
