<template lang="html">
    <div class="row">
        <div class="main-box col-md-6 col-xs-12 col-sm-6 col-md-offset-3 col-sm-offset-3">
            <div class="row login-box">
                <div class="col-md-10 col-md-offset-1">
                    <h3>登录</h3>
                    <div v-for="(item,index) in items" :key="index">
                        <InputItem :txt="item.inputTxt" :tipValue="item.tipValue" :flagUser="item.flagUser" @inputFn="inputFn" :inputName="index" :inputType="item.inputType"></InputItem>
                    </div>
                    <div class="input-box__item flex-box">
                        <span><router-link to="/SignUp">没有账号？立即注册</router-link></span>
                        <button type="button" @click="fn" class="btn btn-lg btn-primary">登录</button>
                    </div>
                </div>
            </div>
        </div>
        <Model :tips="msg"></Model>
        <Popup v-show="popFlag" :msg='popMsg'></Popup>
    </div>
</template>

<script>
import Model from './model'
import InputItem from '../pages/Form/InputItem'
import Popup from './popup'
export default {
    name: 'Login',
    components: {
        // 子传父：   $emit
        // 父传子：   props
        InputItem,
        Model,
        Popup
        // InputItem
    },
    computed: {
        noLogin() {
            return this.$store.state.isLogin;
        },
        certainLogin() {
            return this.$store.getters.noLogin;
        }
    },
    data: function(){
        return {
            focus: false,
            selectedName: '',
            username: "",
            password: "",
            msg: "登录成功",
            bol: false,
            popMsg: "网络错误",
            popFlag: false,
            items: [
                {
                    inputTxt: "请输入用户名",
                    inputName: "",
                    inputType: "text",
                    flagUser: false,
                    tipValue: ""
                },
                {
                    inputTxt: "请输入密码",
                    inputName: "",
                    inputType: "password",
                    flagUser: false,
                    tipValue: ""
                }
            ]
        }
    },
    watch: {
        popMsg() {
            return this.popMsg;
        },
        bol() {
            return this.bol;
        },
        msg() {
            return this.msg;
        }
        // items() {
        //     deep: true;
        //     return this.items;
        // }
    },
    methods: {
        inputFn($event,val) {
            var indexInput = $event.inputName;
            if(indexInput == 0){
                this.username = val;
            }
            else if(indexInput == "1") {
                this.password = val;
            }
        },
        fn: function() {
            var that = this;
            if(this.common.isEmpty(this.username) || this.common.isEmpty(this.password)) {
                this.popFlag = true;
                this.popMsg = "请输入用户名和密码"
                this.$options.methods.popup(that);
                return;
            }
            this.$axios.post(this.$base.baseUrl + this.$base.loginUrl, {
                "certType": this.common.accountType(this.username),
                "loginCert": this.username,
                "password": this.$hex.hex_md5(this.password)
            }).then(function (response) {
                console.log(response)
                if(response.data.code == 0 && response.status == 200){
                    // that.bol = true;
                    // that.items[1].flagUser = false;
                    // localStorage.cid = response.data.cid;
                    that.$store.commit('ADD_COUNT', response.data.cid);
                    console.log(that.$store.state)

                    // let clock = window.setInterval(() => {

                    // })
                    that.$router.push('/')
                }
                else if(response.data.code == 1003 && response.status == 200){
                    that.bol = false;
                    that.items[1].flagUser = true;
                    that.items[1].tipValue = response.data.errMsg;
                }
            }).catch(function (error) {
                console.log(error)
                that.popFlag = true;
                that.popMsg = "服务器错误";
                that.$options.methods.popup(that);
            });
        },
        popup: function(e) {
            var num = 0;
            var that = e;
            var timer = setInterval(function() {
                num++
                if(num >= 2) {
                    that.popFlag = false;
                    clearInterval(timer)
                }
            }, 1000)
        }
        // 1、父组件可以使用 props 把数据传给子组件。
        // 2、子组件可以使用 $emit 触发父组件的自定义事件。
    }
}
</script>
<style lang="scss" type="text/css">
    @import '~@/assets/css/login'
</style>
