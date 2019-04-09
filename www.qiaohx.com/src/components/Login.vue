<template lang="html">
    <div class="row">
        <div class="main-box col-md-8 col-xs-12 col-sm-8">
            <div class="row login-box">
                <div class="col-md-10 col-md-offset-1">
                    <h3>登录</h3>
                    <InputItem txt="请输入用户名" inputType="text"></InputItem>
                    <InputItem txt="请输入密码" inputType="password"></InputItem>
                    <div class="input-box__item flex-box">
                        <span><router-link to="/SignUp">没有账号？立即注册</router-link></span>
                        <button type="button" @click="fn" class="btn btn-lg btn-primary">登录</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InputItem from '../pages/Form/InputItem'
export default {
    name: 'Login',
    components: {
        // 子传父：   $emit
        // 父传子：   props
        InputItem
        // InputItem
    },
    data: function(){
        return {
            focus: false,
            selectedName: ''
        }
    },
    methods: {
        fn: function() {
            // console.log()
            // this.$axios.post(this.$base.baseUrl + this.$base.signUpUrl, {
            //     "certType": "00",
            //     "loginCert": this.inputValue
            // }).then(function (response) {
            //     if(response.data.code == 0 && response.status == 200){
            //         that.flagUser = false;
            //     }
            //     else {
            //         that.flagUser = true;
            //         that.tipValue = "用户名已存在！";
            //     }
            // }).catch(function (error) {
            //     console.log(error);
            // });
        }
        // 1、父组件可以使用 props 把数据传给子组件。
        // 2、子组件可以使用 $emit 触发父组件的自定义事件。
        // fnFocus: function() {
        //     this.focus = true;
        // },
        // fnBlur: function() {
        //     this.focus = false;
        // },
        // getfocus: function(val) {
        //     this.selectedName = val;
        // }
    }
}
</script>
<style lang="scss" type="text/css">
    @import '~@/assets/css/login'
</style>
