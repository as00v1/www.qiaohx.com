<template lang="html">
    <div class="login-box__item">
        <input :name="inputName"  v-on:focus='getName' type="text" />
        <label>{{ txt }}</label>
    </div>
</template>

<script>
export default {
    name: 'LoginItem',
    props: ['inputName','sel','txt'],
    computed: {
        bol: function(){
            if(this.sel == this.name){
                return true;
            }
            else {
                return false;
            }
        }
    },
    method: {
        getName: function(){
            this.$emit('someEvent',this.name);
            console.log(this.name)
        }
    }
}
</script>

<style lang="css" scoped>
</style>
