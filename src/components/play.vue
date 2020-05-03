<template>
  <div class="play container">
    <div class="col-md-8 clearfix">
      <div class="main-course-left">
        <div class="course-info">
          <div class="course-title" style="font-size: 24px;">{{chapter.name}}</div>

          <div class="course-video">
            <video :src="chapter.videoUrl" width="100%" height="100%" controls preload></video>
          </div>

          <div class="course-menu">
            <a href="javascript:void(0)"><span class="menu-item  cur">评论</span></a>
          </div>
        </div>

        <!-- 评论-start -->
        <div>
          <div class="comment clearfix" v-for="(comment,index) in comments" v-if="comment.parentId == 0">
            <div class="comment-header" v-for="(user,index) in users" v-if="user.id == comment.userId"><img :src="user.header"></div>
            <div class="comment-main">
              <div class="user-name"  v-for="(user,index) in users" v-if="user.id == comment.userId">{{user.realname}}</div>
              <div class="comment-content" id="comment" v-html="comment.content"></div>
              <div class="comment-footer">
                <span>时间：{{comment.date}} </span>
                <a href="">2-2 我是java第二节</a>
              </div>
            </div>
          </div>

        </div>

        <!-- 发布评论-start -->
        <div style="margin-top: 20px;">
          <div>
            <span id="commentTitle">发布评论：</span>
            <span id="commentTip" style="margin-left: 10px;color:#777;">长度小于200</span>
          </div>
          <form id="commentForm"  method="post" style="margin: 5px 0px;">
            <div id="editorElem" style="text-align:left"></div>
          </form>
          <input type="button" value="发布" class="btn" v-on:click="doComment(chapter)">
        </div>

        <!-- 评论-end -->
      </div>
    </div>


    <div class="col-md-4">

      <div class="main-course-right">
        <h3 class="mt-50" id="title">所有章节</h3>
        <div class="video-course-fix-parent">
          <div class="video-course-fix">


            <div class="chapter" style="padding: 0px ;border: none;" v-for="(chapter,index) in chapters"
                 v-if="chapter.gradeId == 1">
              <a href="javascript:void(0);" class="js-open">
                <h3>
                  <strong> {{chapter.name}}</strong>
                  <span class="drop-down">▼</span>
                </h3>
              </a>
              <ul class="chapter-sub" style="padding-left:10px;">
                <a href="">
                  <li class="ellipsis video-li icon-video" v-for="(section,index) in chapters"
                      v-if="section.parentId == chapter.courseId">
                    <i class="icon-video">▶</i> {{section.name}}
                  </li>
                </a>

              </ul>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import E from "wangeditor";

  export default {
    name: 'play',
    data() {
      return {
        editorContent: '',
        chapters: [],
        comments: [],
        users:[],
        chapter: {
          catalogueId: '',
          name: '',
          videoUrl: '',
          courseId: '',
          gradeId: '',
          parentId: '',
          status: ''
        }
      }
    },

    created() {
      var id = this.$route.query.id;
      this.getVideo(id);
      this.getUsers();
    },
    mounted() {
      var editor = new E('#editorElem');
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      };
      editor.create()
    },
    methods: {
      getVideo: function (id) {
        console.log(id);
        this.$http.get("http://localhost:8088/catalogue/selectById", {
          params: {
            catalogueId: id
          },
        }).then(function (result) {
            this.chapter = result.body;
            this.getChapter(result.body.courseId)
            this.getComments(result.body.courseId)
          }
        )
      },
      getChapter: function (id) {
        this.$http.get("http://localhost:8088/course/selectChapter/", {
          params: {
            courseId: id
          },
        }).then(function (result) {
          console.log(result.body);
          this.chapters = result.body;
        })
      },
      //获取评论
      getComments: function (id) {
        this.$http.get("http://localhost:8088/comment/selectByCourse", {
          params: {
            courseId: id
          },
        }).then(function (result) {
          console.log(result.body);
          this.comments = result.body;
        })
      },
      //获取评论用户信息
      getUsers: function (id) {
        this.$http.get("http://localhost:8088/user/selectAll", {
          params: {
          },
        }).then(function (result) {
          console.log(result.body);
          this.users = result.body;
        })
      },
      //评论
      doComment: function (chapter) {
        console.log(this.editorContent);
        console.log(this.chapter.courseId);
        this.$http.post("http://localhost:8088/comment/doComment", {
            courseId: this.chapter.courseId,
            catalogueId: this.chapter.catalogueId,
            content:this.editorContent,
          }).then(function (result) {
            console.log("评论请求"+result.body);
          })
        // alert("请先进行登录");
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /**
  *评论-start
  **/
  .comment {
    padding: 0px 10px 20px 10px;
    border-bottom: 1px solid #eee;
    margin: 20px 0px;
    min-height: 120px;
  }

  .comment-header {
    float: left;
    width: 70px;
  }

  .comment-main {
    float: right;
    width: 640px;
  }

  .comment-header img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .comment-main .user-name {
    font-weight: bold;
    font-size: 14px;
  }

  .comment-main .comment-content {
    margin-top: 20px;
    width: 100%;
  }

  .comment-main .comment-footer {
    margin-top: 20px;
  }

  .comment-main .comment-footer a {
    margin-left: 50px;
    display: inline-block;
    color: #93999f;
  }

  .comment-main .comment-footer a:hover {
    color: #0089D2;
  }

  /**
  *评论-end
  **/

  .video-chapter {
    padding: 0px;
  }

  .course-video {
    width: 100%;
    height: 505px;
    border: 2px solid #93999F;
  }

  .video-li {
    width: 100%;
    height: 30px;
    line-height: 30px;
    list-style-type: none;
  }

  .video-li:hover {
    color: #0089D2;
  }

  .video-course-fix-parent {
    height: 500px;
    margin-top: 0px;
    overflow: hidden;
  }

  .video-course-fix {
    margin-top: -20px;
    height: 500px;
    overflow-x: hidden;
    width: 326px;; /* 多出26像素是滚动条的位置，会被父容器盖住就看不到了 */
    overflow-y: scroll;
  }

  /**
  *课程章节页面 end
  **/
  html, body, * {
    font: 14px/1.5 arial, "Microsoft Yahei", "Hiragino Sans GB", sans-serif;
    color: #4d555d;
  }

  .course-menu .menu-item {
    font-size: 16px;
    font-weight: bold;
    float: left;
    width: 100px;
    display: inline-block;
  }

  .course-menu {
    width: 100%;
    padding: 30px 0px;
  }

  .course-menu .cur {
    color: #0089D2;
  }

  .course-menu span:hover {
    color: #0089D2;
  }

  .ellipsis {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .course-info {
    width: 100%;
    min-height: 210px;
    border-bottom: 1px solid #d9dde1;
    padding-bottom: 15px;
  }

  .chapter strong {
    font-size: 16px;
  }

  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a {
    text-decoration: none;
    display: block;
    outline: none;
  }

  .main-course-right {
    float: right;
    width: 300px;
    min-height: 500px;
  }

  #title {
    font-size: 20px;
    font-weight: bold;
  }
</style>
