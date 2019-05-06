import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLogin: true
    },
    getters: {
        certainLogin() {
            var noLogin = false;
            return noLogin;
        }
    }
});

export default store