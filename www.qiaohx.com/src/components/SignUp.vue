<template lang="html">
    <div class="row">
        <div class="main-box col-md-8 col-xs-12 col-sm-8">
            <div class="row login-box">
                <div class="col-md-10 col-md-offset-1">
                    <h3>注册</h3>
                    <InputItem txt="请输入用户名" @inputUserName="getUserName" inputName="reg_username" inputType="text"></InputItem>
                    <InputItem txt="请输入密码" @inputPsd="getPassword" inputName="reg_password" inputType="password"></InputItem>
                    <InputItem txt="请再次输入密码" inputName="reg_password_again" inputType="password"></InputItem>
                    <div class="input-box__item flex-box">
                        <span><router-link to="/Login">已有账号？立即登录</router-link></span>
                        <button type="button" @click="fn" class="btn btn-lg btn-primary">注册</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InputItem from '../pages/Form/InputItem'
export default {
    name: 'SignUp',
    components: {
        InputItem
    },
    data() {
        return {
            username: "",
            password: "",
            password_again: ""
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
        fn: function () {
            var that = this;
            this.$axios.post(this.$base.baseUrl + this.$base.registerUrl, {
                "certType": "00",
                "loginCert": this.username,
                "password": this.password
            }).then(function (response) {
                console.log(response)
                if(response.data.code == 0 && response.status == 200){
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
</script>

<style lang="scss" type="text/css">
    @import '~@/assets/css/login'
</style>
