<template lang="html">
        <div class="row login-box">
            <div class="col-md-10 col-md-offset-1">
                <h3>登录</h3>
                <InputItem txt="请输入用户名" inputType="text"></InputItem>
                <InputItem txt="请输入密码" inputType="password"></InputItem>
                <div class="" role="group">
                    <button type="button" class="btn btn-default">忘记密码</button>
                    <button type="button" class="btn btn-info">创建账号</button>
                    <button type="button" class="btn btn-primary">登录</button>
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
