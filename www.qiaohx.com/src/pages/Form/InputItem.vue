<template lang="html">
    <div class="input-box__item">
        <div>
            <input :class="{'label-focus': flagInputFocus, 'label-focus-error': flagUser}" autocomplete="off" v-model="inputValue" :name="inputName" :type="inputType" @blur="fnBlur($event)" @focus='fnFocus' />
            <label :class="{'stop_move': flagTitleMove,'label-font-color': flagInputFocus, 'label-font-color-error': flagUser}" @click='$el.children[0].children[0].focus()'>{{ txt }}</label>
        </div>
        <div v-show="flagUser" class="alert alert-danger" role="alert">{{ tipValue }}</div>
    </div>  
</template>

<script>

export default {
    name: 'InputItem',
    props: ['inputType','txt','inputName','flagUser','tipValue'],
    data: function(){
        return {
            inputValue: '',
            flagTitleMove: false,
            flagInputFocus: false
        }
    },
    // watch: {
    //     flagUser() {
    //         return this.flagUser;
    //     }
    // },
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
                // var that = this;
                this.$emit('inputFn',this,this.inputValue);
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
