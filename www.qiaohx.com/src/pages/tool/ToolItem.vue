<template lang="html">
    <div class="row">
        <Model v-if="bol"></Model>
        <h4 class="col-md-7 hidden-xs">明文：</h4>
        <h4 class="col-md-5 hidden-xs">密文：</h4>
        <div class="col-xs-12 col-md-12">
            <div class="col-xs-12 col-md-5">
                <textarea name="plaintext" v-model="content" placeholder="请输入要加密的内容" class="form-control" cols="80"></textarea>
            </div>
            <div class="col-xs-12 col-md-2">
                <h5>加密算法：</h5>
                <div class="radio">
                    <label>
                        <input type="radio" v-model="picked" name="optionsRadios" id="optionsRadios1" value="AES" checked>AES
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" v-model="picked" name="optionsRadios" id="optionsRadios2" value="DES">DES
                    </label>
                </div>
                <!-- <span>picked:{{ picked }}</span> -->
                <div class="form-group">
                    <label for="inputPassword" class="control-label">密码</label>
                    <input type="text" v-model="key" class="form-control" id="inputPassword" placeholder="请输入8位密码">
                </div>
                <div class="form-group">
                    <div class="col-xs-2 col-sm-2"></div>
                    <div class="col-xs-8 col-sm-8">
                        <button type="button" v-on:click="getEncryptTxt" data-toggle="modal" v-bind:data-target="bol ? '#myModal' : ''" class="btn btn-primary btn-block">加密<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></button>
                        <button type="button" class="btn btn-primary btn-block"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>解密</button>
                    </div>
                    <div class="col-xs-2 col-sm-2"></div>
                </div>
            </div>
            <div class="col-xs-12 col-md-5">
                <textarea name="ciphertext" class="form-control" cols="80"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import Model from '../../components/Model'
export default {
    name: 'ToolItem',
    data: function() {
        return {
            content: '',
            key: '',
            decryptContent: '',
            tips: '',
            bol: false,
            picked: ''
        }
    },
    components: {
        Model
    },
    methods: {
        getEncryptTxt: function() {
            if(isEmpty(content) && isEmpty(key) && isEmpty(picked)) {
                this.bol = true;
                if(this.picked == 'DES') {
                    this.$axios.post('https://www.qiaohx.com/encrypt/des/getValue', {
                        "content": this.content,
                        "key": this.key
                    }).then(function (response) {
                        console.log(response);
                        this.tips = data.data.errMsg;
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
                else {
                    console.log(this.picked);
                    console.log("This is AES encrypt");
                }
            }
            else {
                this.bol = false;
            }
        },
        getDecryptTxt: function() {
            if(this.picked == 'DES') {
                this.$axios.post('https://www.qiaohx.com/encrypt/des/getValue', {
                    "decryptContent": this.content,
                    "key": this.key
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });
            }
            else {
                console.log(this.picked);
                console.log("This is AES encrypt");
            }
        }
    }
}
</script>

<style lang="css" scoped>
textarea {height: 50vh;}
</style>
