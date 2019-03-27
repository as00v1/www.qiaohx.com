<template lang="html">
    <div class="login-box__item">
        <input :class="{'label-focus': bol}" :name="inputName"  @focus='getName' @blur="fnBlur($event)" type="text" />
        <label @click='getName':class="{'login-box__label_move_top': bol}">{{ txt }}</label>
    </div>
</template>

<script>
export default {
    name: 'LoginItem',
    props: ['inputName','sel','txt'],
    data: function(){
        return {
            flag: true
        }
    },
    computed: {
        bol: {
            get: function() {
                if(this.sel == this.inputName){
                    return true;
                }
                else {
                    return false;
                }
            },
            set: function(newValue) {
                return newValue;
            }
        }
    },
    watch: {
        bol: function() {
            console.log(this.flag)
            if(!this.flag) {
                return false;
            }
        }
    },
    methods: {
        getName: function(){
            this.$emit('change',this.inputName);
        },
        fnBlur: function(e) {
            console.log(e);
        }
    }
}
</script>

<style lang="css" scoped>
</style>
