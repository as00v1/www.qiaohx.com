<template lang="html">
    <div class="row">
        <Model :tips="msg"></Model>
        <form class="main-box col-md-6 col-xs-12 col-sm-6 col-md-offset-3 col-sm-offset-3">
            <div class="row login-box">
                <div class="col-md-10 col-md-offset-1">
                    <h3>注册</h3>
                    <div v-for="(item,index) in items" :key="index">
                        <InputItem :txt="item.inputTxt" :tipValue="item.tipValue" :flagUser="item.flagUser" @inputFn="inputFn" :inputName="index" :inputType="item.inputType"></InputItem>
                    </div>
                    <div class="input-box__item flex-box">
                        <span><router-link to="/Login">已有账号？立即登录</router-link></span>
                        <button type="button" data-toggle="modal" v-bind:data-target="bol ? '.modal' : '' " @click="fn" class="btn btn-lg btn-primary">注册</button>
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
            bol: true,
            username: "",
            password: "",
            password_again: "",
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
                },
                {
                    inputTxt: "请再次输入密码",
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
                var that = this;
                this.$axios.post(this.$base.baseUrl + this.$base.signUpUrl, {
                    "certType": this.common.accountType(val),
                    "loginCert": val
                }).then(function (response) {
                    if(response.data.code == 0 && response.status == 200){
                        that.username = val;
                        that.items[indexInput].flagUser = false;
                        that.items[indexInput].tipValue = "";
                    }
                    else {
                        that.items[indexInput].flagUser = true;
                        that.items[indexInput].tipValue = "用户名已存在！";
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
            else if(indexInput == "1") {
                if(val.length < 8) {
                    this.items[indexInput].flagUser = true;
                    this.items[indexInput].tipValue = "密码最少输入8位！";
                }
                else {
                    this.items[indexInput].flagUser = false;
                    this.items[indexInput].tipValue = "";
                    this.password = val;
                }
            }
            else if (indexInput == "2") {
                this.password_again = val;
                if(val !== this.password) {
                    this.items[indexInput].flagUser = true;
                    this.items[indexInput].tipValue = "两次密码不一致";
                }
                else {
                    this.items[indexInput].flagUser = false;
                    this.items[indexInput].tipValue = "";
                }
            }
        },
        fn: function () {
            // this.bol = false;
            this.msg = "";
            if(!this.common.isEmpty(this.username) && !this.common.isEmpty(this.password) && !this.common.isEmpty(this.password_again)) {
                if(this.password_again == this.password) {
                    var that = this;
                    this.$axios.post(this.$base.baseUrl + this.$base.registerUrl, {
                        "certType": this.common.accountType(this.username),
                        "loginCert": this.username,
                        "password": this.$hex.hex_md5(this.password)
                    }).then(function (response) {
                        
                        console.log(response)
                        if(response.data.code == 0 && response.status == 200){
                            that.bol = true;
                            that.msg = "注册成功";
                        }
                        else {
                            that.bol = true;
                            that.msg = "用户名已存在";
                            that.flagUser = true;
                            that.tipValue = "用户名已存在！";
                        }
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
                else {
                    this.bol = true;
                    this.msg = "两次密码不一致";
                }
            }
            else {
                this.bol = true;
                this.msg = "请将信息输入完整！";
            }
            
        }
    }
}
</script>

<style lang="scss" type="text/css">
    @import '~@/assets/css/login'
</style>
