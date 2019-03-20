<template>
  <div id="app">
    <NavHeader>
        <ul class="nav navbar-nav" slot="web">
            <li v-for="item in list" v-bind:key="item.id">
                <router-link v-bind:to="item.link">{{ item.text }}</router-link>
            </li>
        </ul>
    </NavHeader>
    <section>
        <router-view/>
    </section>
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader'
import NavFooter from './components/NavFooter'

export default {
  name: 'App',
  components: {
    NavHeader,
    NavFooter
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
<style>
    section {margin-top: 75px;}
</style>
