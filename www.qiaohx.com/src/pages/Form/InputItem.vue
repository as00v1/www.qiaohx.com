<template lang="html">
    <div class="input-box__item">
        <div>
            <input :class="{'label-focus': flagInputFocus, 'label-focus-error': flagUser}" autocomplete="off" v-model="inputValue" :name="inputName" :type="inputType" @blur="fnBlur($event)" @focus='fnFocus' type="text" />
            <label :class="{'stop_move': flagTitleMove,'label-font-color': flagInputFocus, 'label-font-color-error': flagUser}" @click='$el.children[0].children[0].focus()'>{{ txt }}</label>
        </div>
        <div v-show="flagWarn" class="alert alert-danger" role="alert">{{ tipValue }}</div>
    </div>
</template>

<script>

export default {
    name: 'InputItem',
    props: ['inputType','txt','inputName','flagWarn'],
    data: function(){
        return {
            inputValue: '',
            flagTitleMove: false,
            flagInputFocus: false,
            flagUser: false,
            tipValue: "",
            passwordFirst: ""
        }
    },
    methods: {
        fnFocus: function(){
            this.flagTitleMove = true;
            this.flagInputFocus = true;
        },
        fnBlur: function(e) {
            this.flagInputFocus = false;
            // 输入值为空
            if(this.common.isEmpty(this.inputValue)){
                this.flagTitleMove = false;
            }
            else {
                this.flagTitleMove = true;
                var that = this;
                if(this.inputName == "reg_username"){
                    // 输入用户名
                    // 用户名校验
                    this.$axios.post(this.$base.baseUrl + this.$base.signUpUrl, {
                        "certType": "00",
                        "loginCert": this.inputValue
                    }).then(function (response) {
                        if(response.data.code == 0 && response.status == 200){
                            that.flagUser = false;
                            that.$emit('inputUserName',that.inputValue);
                        }
                        else {
                            that.flagUser = true;
                            that.tipValue = "用户名已存在！";
                        }
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
                else if(this.inputName == "reg_password") {
                    // 输入密码
                    if(this.inputValue.length < 8) {
                        this.flagUser = true;
                        this.tipValue = "密码最少输入8位！";
                    }
                    else {
                        this.flagUser = false;
                        this.passwordFirst = this.inputValue;
                        this.$emit('inputPsd',this.inputValue);
                    }
                }
                else if(this.inputName == "reg_password_again") {
                    // 输入确认密码
                    this.tipValue = "两次密码不一致！";
                    this.$emit('inputPsdAgain',this.inputValue,this.tipValue);
                    // if(this.inputValue != this.passwordFirst) {
                    //     this.flagUser = true;
                    //     this.tipValue = "两次密码不一致！";
                    // }
                }
            }
        }
    },
    mounted: function() {
        if(!this.common.isEmpty(this.inputValue)) {
            this.flagInputFocus = false;
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
