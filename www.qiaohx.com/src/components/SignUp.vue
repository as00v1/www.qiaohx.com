<template lang="html">
    <div class="row">
        <div class="main-box col-md-4 col-xs-12 col-sm-8">
            <div class="row login-box">
                <div class="col-md-10 col-md-offset-1">
                    <h3>注册</h3>
                    <InputItem txt="请输入用户名" inputType="text"></InputItem>
                    <InputItem txt="请输入密码" inputType="password"></InputItem>
                    <InputItem txt="请再次输入密码" inputType="password"></InputItem>
                    <div class="input-box__item">
                        <span><router-link to="/Login">已有账号？立即登录</router-link></span>
                        <button type="button" class="btn btn-lg btn-primary">注册</button>
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
    }
}
</script>

<style lang="scss" type="text/css">
    @import '~@/assets/css/login'
</style>
