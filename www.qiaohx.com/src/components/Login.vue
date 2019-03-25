<template lang="html">
    <div class="container">
        <div class="row login_box">
            <div class="login_item">
                <input @focus="fnFocus" @blur="fnBlur" :class="{'border_blue': focus}" type="text" name="username" value="">
                <label :class="{'move_top': focus}">name</label>
            </div>
            <div class="login_item">
                <input type="text" name="" value="">
                <label>password</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data: function(){
        return {
            focus: false
        }
    },
    methods: {
        fnFocus: function() {
            this.focus = true;
        },
        fnBlur: function() {
            // if($())
        }
    }
}
</script>

<style lang="css" scoped>
    .login_box {background: #FFF;}
    .login_item {height: 50px;margin: 10px;position: relative;}
    .login_item input {outline: none;border-radius: 10px;border: 1px solid #DCDCDC;height: 45px;padding: 0 10px;}
    .login_item label {color: #8B8B8B;position: absolute;left: 10px;top: 12px;}

    .border_blue {border: 1px solid blue !important;}
    .move_top {top: -15px !important;}
</style>
