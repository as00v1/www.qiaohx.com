<template lang="html">
    <div class="container">
      <div class="btn-group">
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
            新建
              <span class="caret"></span>
              <!-- <span class="sr-only">切换下拉菜单</span> -->
          </button>
          <ul class="dropdown-menu" role="menu">
              <li><a href="#">新建文档</a></li>
              <li class="divider"></li>
              <li><a href="#">新建Markdown</a></li>
          </ul>
      </div>
      <div class="btn-group">
          <button type="button" :click="btnSaveArticle()" class="btn btn-default dropdown-toggle" aria-expanded="false">保存</button>
      </div>
      <div>
        
      </div>
      <div id="editor-md" class="main-editor">
        <textarea></textarea>
      </div>
    </div>
</template>

<script>
import $s from "scriptjs";

export default {
    name: 'EditDocMainEditor',
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
              console.log('onload', this);
            },
          };
        },
      },
    },
    data() {
      return {
        instance: null,
      };
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
      initEditor() {
        this.$nextTick((editorMD = window.editormd) => {
          if (editorMD) {
            this.instance = editorMD('editor-md', this.editorConfig);
          }
        });
      },
      btnSaveArticle() {
        this.$axios.post(this.$base.baseUrl + this.$base.articleAddUrl, {
            "cid": "用户标识*",
            "content": "文章内容*",
            "groupId": "分组Id*",
            "keyWord": "",
            "title": "文章标题*"
        }).then(function (response) {
          console.log(response)
        }).catch(function (error) {
            console.log(error);
        });
      }
    }
  };
</script>

<style type="text/css">
@import "../../static/MDeditor/css/editormd.css";
</style>



