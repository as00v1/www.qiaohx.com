<template lang="html">
    <div class="input-box__item">
        <div>
            <input :class="{'label-focus': flagInput, 'label-focus-error': flagUser}" v-model="inputValue" :name="inputName" :type="inputType" @blur="fnBlur($event)" @focus='fnFocus' type="text" />
            <label :class="{'stop_move': flagTitleMove,'label-font-color': flagTitleColor, 'label-font-color-error': flagUser}" @click='$el.children[0].children[0].focus()'>{{ txt }}</label>
        </div>
        <div v-show="flagUser" class="alert alert-danger" role="alert">{{ tipValue }}</div>
    </div>
</template>

<script>

export default {
    name: 'InputItem',
    props: ['inputType','txt','inputName'],
    data: function(){
        return {
            inputValue: '',
            flagTitleMove: false,
            flagInput: false,
            flagTitleColor: false,
            flagUser: false,
            tipValue: "",
            passwordFirst:""
        }
    },
    methods: {
        fnFocus: function(){
            this.flagTitleMove = true;
            this.flagInput = true;
            this.flagTitleColor = true;
        },
        fnBlur: function(e) {
            this.flagInput = false;
            this.flagTitleColor = false;
            // 输入值为空
            if(this.common.isEmpty(this.inputValue)){
                this.flagTitleMove = false;
            }
            else {
                this.flagTitleMove = true;
                var that = this;
                // 输入用户名
                if(this.inputName == "reg_username"){
                    // 用户名校验
                    this.$axios.post(this.$base.baseUrl + this.$base.signUpUrl, {
                        "certType": "00",
                        "loginCert": this.inputValue
                    }).then(function (response) {
                        if(response.data.code == 0 && response.status == 200){
                            that.flagUser = false;
                        }
                        else {
                            that.flagUser = true;
                            that.tipValue = "用户名已存在！";
                        }
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
                // 输入密码
                else if(this.inputName == "reg_password") {
                    if(this.inputValue.length < 8) {
                        this.flagUser = true;
                        this.tipValue = "密码最少输入8位！";
                    }
                    else {
                        this.flagUser = false;
                        this.passwordFirst = this.inputValue;
                        return;
                    }
                }
                // 输入确认密码
                else if(this.inputName == "reg_password_again") {
                    console.log(this.passwordFirst)
                    if(this.inputValue != this.passwordFirst) {
                        this.flagUser = true;
                        this.tipValue = "两次密码不一致！";
                    }
                }
            }
        }
    },
    mounted: function() {
        if(!this.common.isEmpty(this.inputValue)) {
            this.flagInput = false;
            this.flagTitleColor = false;
            this.flagTitleMove = false;
        }
    }
}

    //
    // focus:字体变蓝并上移，底部边框变蓝
    // blur:
    //     1.input内无值时，字体恢复灰色并下移，底部恢复灰色
    //     2.input内有值时，字体恢复不下移，底部恢复灰色

</script>

<style lang="css" scoped>
</style>
