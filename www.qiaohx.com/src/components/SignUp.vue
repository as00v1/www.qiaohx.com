<template lang="html">
    <div class="row">
        <Model :msg="this.msg"></Model>
        <form class="main-box col-md-8 col-xs-12 col-sm-8">
            <div class="row login-box">
                <div class="col-md-10 col-md-offset-1">
                    <h3>注册</h3>
                    <!-- <div v-for="(item,index) in items" :key="index"> -->
                        <InputItem txt="请输入用户名" @inputUserName="getUserName" inputName="reg_username" inputType="text"></InputItem>
                        <InputItem txt="请输入密码" @inputPsd="getPassword" inputName="reg_password" inputType="password"></InputItem>
                        <InputItem txt="请再次输入密码" @inputPsdAgain="getPasswordAgain" inputName="reg_password_again" inputType="password"></InputItem>
                    <!-- </div> -->
                    <div class="input-box__item flex-box">
                        <span><router-link to="/Login">已有账号？立即登录</router-link></span>
                        <button type="button" data-toggle="modal" v-bind:data-target="bol ? '.bs-example-modal-sm' : '' " @click="fn" class="btn btn-lg btn-primary">注册</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import Model from './model'
import InputItem from '../pages/Form/InputItem'
export default {
    name: 'SignUp',
    components: {
        InputItem,
        Model
    },
    data() {
        return {
            msg: "",
            bol: false,
            username: "",
            password: "",
            password_again: "",
            items: [
                {
                    inputTxt: "请输入用户名",
                    inputEmit: "inputUserName",
                    inputEvent: "getUserName",
                    inputName: "reg_username",
                    inputType: "text"
                },
                {
                    inputTxt: "请输入密码",
                    inputEmit: "inputPsd",
                    inputEvent: "getPassword",
                    inputName: "reg_password",
                    inputType: "password"
                },
                {
                    inputTxt: "请再次输入密码",
                    inputEmit: "inputPsdAgain",
                    inputEvent: "getPasswordAgain",
                    inputName: "reg_password_again",
                    inputType: "password"
                }
            ]
        }
    },
    methods: {
        getUserName: function(value) {
            this.username = value;
            console.log("username:"+value)
        },
        getPassword: function(value) {
            this.password = value;
        },
        getPasswordAgain: function(val) {
            this.password_again = val;
            console.log("======"+val)
        }
        ,
        fn: function () {
            if(!this.common.isEmpty(this.username) && !this.common.isEmpty(this.password) && !this.common.isEmpty(this.password_again)) {
                
                var that = this;
                this.$axios.post(this.$base.baseUrl + this.$base.registerUrl, {
                    "certType": this.common.accountType(this.username),
                    "loginCert": this.username,
                    "password": this.$hex.hex_md5(this.password)
                }).then(function (response) {
                    console.log(response)
                    if(response.data.code == 0 && response.status == 200){
                        this.bol = true;
                        this.msg = "注册成功";
                        // that.flagUser = false;
                        // 注册成功
                    }
                    else {
                        that.flagUser = true;
                        that.tipValue = "用户名已存在！";
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
}
</script>

<style lang="scss" type="text/css">
    @import '~@/assets/css/login'
</style>
