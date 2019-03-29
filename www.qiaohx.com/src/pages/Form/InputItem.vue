<template lang="html">
    <div class="input-box__item">
        <input :class="{'label-focus': flagInput}" v-model="inputValue" :type="inputType" @blur="fnBlur($event)" @focus='fnFocus' type="text" />
        <label :class="{'stop_move': flagTitleMove,'label-font-color': flagTitleColor}" @click='$el.children[0].focus()'>{{ txt }}</label>
    </div>
</template>

<script>

export default {
    name: 'InputItem',
    props: ['inputType','txt'],
    data: function(){
        return {
            inputValue: '',
            flagTitleMove: false,
            flagInput: false,
            flagTitleColor: false
        }
    },
    methods: {
        fnFocus: function(){
            this.flagTitleMove = true;
            this.flagInput = true;
            this.flagTitleColor = true;
        },
        fnBlur: function() {
            this.flagInput = false;
            this.flagTitleColor = false;
            // 输入值为空
            if(this.common.isEmpty(this.inputValue)){
                this.flagTitleMove = false;
            }
            else {
                this.flagTitleMove = true;
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
