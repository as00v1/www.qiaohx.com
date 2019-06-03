<template lang="html">
    <div class="container">
        <div class="col-md-11 col-xs-9">
          <div class="form-group">
              <input type="text" class="form-control" placeholder="请输入标题">
          </div>
        </div>
        <div class="col-md-1 col-xs-3">
            <button type="button" @click="btnSaveArticle()" class="btn btn-primary dropdown-toggle" aria-expanded="false">保存</button>
        </div>
        <div id="editor-md" class="main-editor">
          <textarea v-model="articleContent"></textarea>
        </div>
        <Popup v-show="popFlag" :msg='popMsg'></Popup>
    </div>
</template>

<script>
import $s from "scriptjs"
import Popup from './popup'

export default {
    name: 'EditDocMainEditor',
    components: {
      Popup
    },
    props: {
      editorPath: {
        type: String,
        default: '../../static/',
      },
      editorConfig: {
        type: Object,
        default() {
          return {
            width: '100%',
            height: 500,
            path: '../../static/MDeditor/lib/', // Autoload modules mode, codemirror, marked... dependents libs path
            codeFold: true,
            saveHTMLToTextarea: true,
            searchReplace: true,
            htmlDecode: 'style,script,iframe|on*',
            taskList: true,
            toolbarIcons: 'customize',
            tocm: true,                  // Using [TOCM]
            imageUpload: true,
            imageFormats: ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'],
            // imageUploadURL: 'examples/php/upload.php',
            onload: () => {
              // eslint-disable-next-line
              // console.log('onload', this);
            },
          };
        },
      },
    },
    data() {
      return {
        instance: null,
        popFlag: false,
        popMsg: "",
        articleContent: ""
      };
    },
    watch: {
      instance() {
        // console.log(this.instance)
        deep: true
        // return this.instance;
      }
    },
    created() {
    },
    mounted() {
      $s([
        `${this.editorPath}jquery.min.js`,
        `${this.editorPath}zepto.min.js`,
      ], () => {
        $s(`${this.editorPath}MDeditor/editormd.min.js`, () => {
          this.initEditor();
        });
      });
    },
    beforeDestroy() {
    },
    methods: {
      // getMarkdown() {
      //   // return this.instance.getMarkdown();
      //   console.log(this.instance)
      // },
      initEditor() {
        if(this.$store.getters.certainLogin){
          this.$nextTick((editorMD = window.editormd) => {
            if (editorMD) {
              this.instance = editorMD('editor-md', this.editorConfig);
              console.log(this.instance)
            }
          });
        }else {
            this.popFlag = true;
            this.popMsg = "登录过期，请重新登录"
            this.common.popup(this);
            
            this.$store.commit('REMOVE_COUNT', '');
            this.$router.push('/Login')
        }
      },
      btnSaveArticle() {
        var that = this;
        console.log("==========================")
        console.log(this.instance.getMarkdown())
        // this.$options.methods.getMarkdown()
        // this.$axios.post(this.$base.baseUrl + this.$base.articleAddUrl, {
        //     "cid": this.$store.state.token,
        //     "content": "文章内容*",
        //     "groupId": "分组Id*",
        //     "keyWord": "",
        //     "title": "文章标题*"
        // }).then(function (response) {
        //     console.log(response)
        //     if(response.data.code == 0 && response.status == 200){
        //         // that.$store.commit('ADD_COUNT', response.data.cid);
        //         // that.$router.push('/')
        //     }
        //     else{
        //         // that.bol = false;
        //         // that.items[1].flagUser = true;
        //         // that.items[1].tipValue = response.data.errMsg;
        //         // that.popFlag = true;
        //         // that.popMsg = "登录过期，请重新登录"
        //         // that.common.popup(that);
                
        //         // that.$store.commit('REMOVE_COUNT', response.data.cid);
        //         // that.$router.push('/Login')
        //     }
        // }).catch(function (error) {
        //     console.log(error);
        // });
      }
    }
  };
</script>

<style type="text/css">
@import "../../static/MDeditor/css/editormd.css";
</style>



