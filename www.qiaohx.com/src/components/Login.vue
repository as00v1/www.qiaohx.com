<template lang="html">
    <div class="container">
        <div class="row login-box">
            <LoginItem txt="name" inputName="username" @someEvent="getFocus" :sel="focused"></LoginItem>
            <!-- <div class="login-box__item">
                <input @focus="fnFocus" @blur="fnBlur" :class="{'border_blue': focus}" type="text" name="username" value="">
                <label @click="fnFocus" :class="{'login-box__label_move_top': focus}">name</label>
            </div>
            <div class="login-box__item">
                <input @focus="fnFocus" @blur="fnBlur" :class="{'border_blue': focus}" type="text" name="password" value="">
                <label @click="fnFocus" :class="{'login-box__label_move_top': focus}">password</label>
            </div> -->
        </div>
    </div>
</template>

<script>
import LoginItem from '../pages/login/loginItem'
export default {
    name: 'Login',
    components: {
        LoginItem
    },
    data: function(){
        return {
            focus: false,
            focused: ''
        }
    },
    methods: {
        // 1、父组件可以使用 props 把数据传给子组件。
        // 2、子组件可以使用 $emit 触发父组件的自定义事件。
        fnFocus: function() {
            this.focus = true;
        },
        fnBlur: function() {
            this.focus = false;
        },
        getFocus: function(val) {
            this.focused = val;
            console.log(this.focused)
        }
    }
}
</script>
<style lang="scss" type="text/css">
    @import '~@/assets/css/login'
</style>
