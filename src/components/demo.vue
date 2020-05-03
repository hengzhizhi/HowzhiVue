<template>
<div class="demo" >
  <div v-for="(comment,index) in comments">
  <div id="editorElem" v-html="comment.content" style="text-align:left"></div>
<!--  <button v-on:click="getContent">发表</button>-->
</div>


  <div id="editor"   style="text-align:left"></div>
  <button v-on:click="getContent">发表</button>
</div>
</template>

<script>
  import E from 'wangeditor';
  export default {
    name: 'editor',
    data () {
      return {
        comments: [],
        editorContent: ''
      }
    },
    created() {
      this.getComments()
    },
    methods: {
      getContent: function () {
        console.log(this.editorContent);
      },
      getComments: function (id) {
        this.$http.get("http://localhost:8088/comment/selectByCourse", {
          params: {
            courseId: 1
          },
        }).then(function (result) {
          console.log(result.body);
          this.comments = result.body;
        })
      },
    },
    mounted() {
      var editor = new E('#editorElem');
      editor.customConfig.onchange = (html) => {
        this.editorContent = "<p>zzzzz</p>"
      };
      editor.create()
    }
  }
</script>

<style scoped>

</style>
