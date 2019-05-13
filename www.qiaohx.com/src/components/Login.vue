<template lang="html">
    <div class="row">
        <Model :tips="msg"></Model>
        <div class="main-box col-md-8 col-xs-12 col-sm-8">
            <div class="row login-box">
                <div class="col-md-10 col-md-offset-1">
                    <h3>登录</h3>
                    <div v-for="(item,index) in items" :key="index">
                        <InputItem :txt="item.inputTxt" :tipValue="item.tipValue" :flagUser="item.flagUser" @inputFn="inputFn" :inputName="index" :inputType="item.inputType"></InputItem>
                    </div>
                    <!-- <InputItem txt="请输入用户名" inputType="text"></InputItem>
                    <InputItem txt="请输入密码" inputType="password"></InputItem> -->
                    <div class="input-box__item flex-box">
                        <span><router-link to="/SignUp">没有账号？立即注册</router-link></span>
                        <button type="button" @click="fn" v-bind:data-target="bol ? '.modal' : '' " class="btn btn-lg btn-primary">登录</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Model from './model'
import InputItem from '../pages/Form/InputItem'
export default {
    name: 'Login',
    components: {
        // 子传父：   $emit
        // 父传子：   props
        InputItem,
        Model
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
            bol: true,
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
    methods: {
        inputFn($event,val) {
            var indexInput = $event.inputName;
            if(indexInput == 0){
            //     this.$axios.post(this.$base.baseUrl + this.$base.signUpUrl, {
            //         "certType": this.common.accountType(val),
            //         "loginCert": val
            //     }).then(function (response) {
            //         if(response.data.code == 0 && response.status == 200){
                        this.username = val;
            //             that.items[indexInput].flagUser = false;
            //             that.items[indexInput].tipValue = "";
            //         }
            //         else {
            //             that.items[indexInput].flagUser = true;
            //             that.items[indexInput].tipValue = "用户名已存在！";
            //         }
            //     }).catch(function (error) {
            //         console.log(error);
            //     });
            }
            else if(indexInput == "1") {
                // if(val.length < 8) {
                //     this.items[indexInput].flagUser = true;
                //     this.items[indexInput].tipValue = "密码最少输入8位！";
                // }
                // else {
                //     this.items[indexInput].flagUser = false;
                //     this.items[indexInput].tipValue = "";
                    this.password = val;
                // }
            }
            // else if (indexInput == "2") {
            //     this.password_again = val;
            //     if(val !== this.password) {
            //         this.items[indexInput].flagUser = true;
            //         this.items[indexInput].tipValue = "两次密码不一致";
            //     }
            //     else {
            //         this.items[indexInput].flagUser = false;
            //         this.items[indexInput].tipValue = "";
            //     }
            // }
        },
        fn: function() {
            console.log(this.username)
            console.log(this.password)
            var that = this;
            this.$axios.post(this.$base.baseUrl + this.$base.loginUrl, {
                "certType": this.common.accountType(this.username),
                "loginCert": this.username,
                "password": this.$hex.hex_md5(this.password)
            }).then(function (response) {
                console.log(response)
                if(response.data.code == 0 && response.status == 200){
                    that.bol = true;
                    that.flagUser = false;
                    that.tipValue = "登录成功";
                    localStorage.cid = response.data.cid;
                }
                else if(response.data.code == 1003 && response.status == 200){
                    that.flagUser = true;
                    
                    that.bol = true;
                    that.tipValue = response.data.errMsg;
                }
                // else {
                //     that.flagUser = true;
                //     that.tipValue = response.data.errMsg;
                // }
            }).catch(function (error) {
                console.log(error);
            });
        }
        // 1、父组件可以使用 props 把数据传给子组件。
        // 2、子组件可以使用 $emit 触发父组件的自定义事件。
    }
}
</script>
<style lang="scss" type="text/css">
    @import '~@/assets/css/login'
</style>
