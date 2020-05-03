<template>
  <div class="chapters">

    <!-- 头部课程信息-->
    <div class="background-gradient">
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 v-for="(type,index) in types" v-if="course.typeId == type.categoryId"> 课程中心>{{type.name}}>{{course.name}}</h4>
          </div>
          <!--课程相关信息展示-->
          <div class="panel-body row clearfix">
            <div class="col-md-5 col-xs-12">
              <img :src="course.photoUrl" class="img-rounded" height="250px" width="400px">
            </div>

            <div class=" col-md-7 col-xs-12 pull-right">
              <h3>{{course.name}}</h3>
              <div class="section">
                <ul class="list-unstyled list-inline">
                  <li @click="collect(course)" style="cursor: pointer"><a><span class="glyphicon  glyphicon-heart"></span>收藏</a></li>

                  <li><a> <span class="glyphicon  glyphicon-share"></span>分享</a></li>
                </ul>
              </div>
              <div id="block" class="list-group list-group-horizontal col-md-12 center-block">
                <a href="#" class="list-group-item col-md-3 column" style="text-align: center">
                  <i class="fa fa-book" aria-hidden="true"></i>
                  <h5>课时{{chapters.length}}</h5>

                </a>

                <a href="#" class="list-group-item col-md-3 column" style="text-align: center">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <h5>收藏：{{course.viewCount}}</h5>

                </a>

                <a href="#" class="list-group-item col-md-3 column" style="text-align: center">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <h5>学员：{{course.viewCount}}</h5>

                </a>

                <a href="#" class="list-group-item col-md-3 column" style="text-align: center">
                  <i class="fa fa-android" aria-hidden="true"></i>
                  <h5>Web前端攻城狮</h5>

                </a>


              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!--    章节信息-->
    <div class="container" style="margin-top: 20px">
      <div class="col-md-9 row">
        <ul class="nav nav-tabs" id="myTab">
          <li class="active  col-md-3" style="text-align: center;">
            <a href="#chapter" data-toggle="tab">章节</a>
          </li>
          <li class=" col-md-3" style="text-align: center;">
            <a href="#description" data-toggle="tab">描述</a>
          </li>
          <li class=" col-md-3" style="text-align: center;">
            <a href="#notices" data-toggle="tab">公告</a>
          </li>
          <li class=" col-md-3" style="text-align: center;">
            <a href="#comments" data-toggle="tab">评论</a></li>
        </ul>

        <div id="myTabContent" class=" tab-content">
          <!--章节目录-->
          <di id="chapter" class="tab-pane fade in active ">
          <div  v-for="(chapter,index) in chapters"
               v-if="chapter.gradeId == 1">

              <h3>
                <strong>
                  <div class="icon-chapter"><i class="fa fa-book" aria-hidden="true"></i></div>
                  {{chapter.name}}
                </strong>
                <span class="drop-down"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
              </h3>

            <ul class="chapter-sub">
                <li class="chapter-sub-li" v-for="(section,index) in chapters"
                    v-if="section.parentId == chapter.courseId"
                    @click="selectVideo(section.catalogueId)">
                  <i class="fa fa-play" aria-hidden="true"></i> {{section.name}}
                </li>


            </ul>
          </div></di>
          <!-- 课程描述-->
          <div class=" tab-pane fade " id="description">
            <div class="description clearfix" >

              <div class="comment-main">

                <div class="comment-content" v-html ="course.description"></div>

              </div>
            </div>
          </div>
          <!--公告-->
          <div class=" tab-pane fade " id="notices">
          <div class="notice clearfix" v-for="(notice,index) in notices" >

            <div class="notice-main">
              <div class="comment-content" v-html ="notice.content"></div>
              <div class="comment-footer">
                <span>时间：{{notice.createTime}} </span>
                <a href="">2-2 我是java第二节</a>
              </div>
            </div>
          </div>
          </div>
          <!--评论-->
          <div class=" tab-pane fade " id="comments">
            <div class="comment clearfix" v-for="(comment,index) in comments" v-if="comment.parentId == 0">
              <div class="comment-header"><img class="lecturer-uimg" src="static/img/head.jpg"></div>
              <div class="comment-main">
                <div class="user-name">{{comment.userId}}</div>
                <div class="comment-content" id="comment" v-html="comment.content"></div>
                <div class="comment-footer">
                  <span>时间：{{comment.date}} </span>
                  <a href="">2-2 我是java第二节</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


      <!--右侧教师及推荐信息-->
      <div class="col-md-3">
        <div class="lecturer-item" style="width: 100%;" v-for="(teacher,index) in teachers" v-if="course.teacherId == teacher.teacherId">
          <img class="lecturer-uimg" src="static/img/head.jpg">
          <span class="lecturer-name">{{teacher.name}}</span>
          <span class="lecturer-title">中华大学</span>
          <span class="lecturer-p">{{teacher.sign}}</span>
          <a @click="follow"><span class="follow-btn">关注+</span></a>
        </div>

        <h3 class="mt-50">推荐课程</h3>
        <h4 class="hot">
          <li class="ellipsis oc-color-hover"><i class="fa fa-fire" aria-hidden="true"></i> 开发同时封装出通用</li>
        </h4>

        <h4 class="hot">
          <li class="ellipsis oc-color-hover"><i class="fa fa-fire" aria-hidden="true"></i> 开发同时封装出通用</li>
        </h4>

        <h4 class="hot">
          <li class="ellipsis oc-color-hover"><i class="fa fa-fire" aria-hidden="true"></i> 开发同时封装出通用</li>
        </h4>
      </div>



    </div>

  </div>

</template>

<script>
  import E from "wangeditor";
  export default {
    name: 'chapters',
    data() {
      return {
        course: {
          courseId: '',
          name: '',
          typeId: '',
          photoUrl: '',
          createTime: '',
          viewCount: '',
          teacherId: '',
          status: ''
        },
        chapters: [],
        types:[],
        comments: [],
        teachers:[],
        notices:[]
      }
    },
    created() {
      var id = this.$route.query.id;
      this.getCourse(id);
      this.getChapter(id);
      this.getComments(id);
      this.getNotice(id);
      this.getType();
      this.getTeacher();

    },
    methods: {
      getCourse: function (id) {
        this.$http.get("http://localhost:8088/course/selectById/", {
          params: {
            courseId: id
          },
        }).then(
          function (result) {
            this.course = result.body;
            // console.log(result.body);
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
      getType: function () {
        this.$http.get("http://localhost:8088/course/selectTypes/", {
          params: {
          },
        }).then(function (result) {
          console.log(result.body);
          this.types = result.body;
        })
      },
      getTeacher: function () {
        this.$http.get("http://localhost:8088/teacher/selectAll/", {
          params: {
          },
        }).then(function (result) {
          console.log(result.body);
          this.teachers = result.body;
        })
      },
      getNotice: function (id) {
        this.$http.get("http://localhost:8088/course/selectNotice/", {
          params: {
            courseId:id
          },
        }).then(function (result) {
          console.log("notices获取公告"+result.body);
          this.notices = result.body;
        })
      },
      selectVideo: function (catalogueId) {
        this.$router.push(
          {
            path: '/play',
            query: {
              id: catalogueId
            }
          }
        )
      },
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
      collect:function(course){
        console.log(this.course.courseId);
        this.$http.post("http://localhost:8088/user/collect", {
          courseId:this.course.courseId,
        }).then(function (result) {
          console.log("评论请求"+result.body);
        })
        // alert("请先进行登录");
      },

      follow: function () {
        alert("请先进行登录");
      }
    },

    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /**
 *老师及推荐-start
 **/
  .lecturer-item {
    width: 224px;
    height: 320px;
    margin-right: 20px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(7, 17, 27, .1);
    box-sizing: border-box;
    padding: 36px 24px 0;
    text-align: center;
    border-radius: 4px;
  }

  .lecturer-item .lecturer-uimg {
    display: block;
    width: 120px;
    height: 120px;
    margin: 0 auto 10px;
    border-radius: 50%;
  }

  .lecturer-item .lecturer-name {
    display: block;
    font-size: 16px;
    line-height: 24px;
    color: #07111b;
    font-weight: 700;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    /*text-overflow: -o-ellipsis-lastline;*/
    -webkit-line-clamp: 1;
  }

  .lecturer-item .lecturer-title {
    display: block;
    font-size: 12px;
    line-height: 24px;
    color: #93999f;
    margin-bottom: 15px;
  }

  .lecturer-item .lecturer-p {
    display: block;
    font-size: 12px;
    line-height: 20px;
    color: #93999f;
    height: 56px;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    /*text-overflow: -o-ellipsis-lastline;*/
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .lecturer-card-container {
    width: 224px;
    height: 320px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(7, 17, 27, .1);
    transition: .3s all linear;
    float: left;
    margin-right: 20px;
  }

  .ellipsis {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .hot {
    margin-top: 10px
  }

  .follow-btn {
    display: inline-block;
    height: 25px;
    width: 60px;
    line-height: 25px;
    background-color: #06B310;
    text-align: center;
    color: #FFF;
    border-radius: 4px;
  }

  /**
  *课程章节-start
  **/
  .chapter {
    padding: 0px 10px 20px 10px;
    border-bottom: 1px solid #eee;
  }

  a {

    text-decoration: none;

  }

  .chapter strong {
    font-size: 16px;
    margin-bottom: 5px;
    height: 40px;
    line-height: 40px;
  }

  .icon-chapter {
    border-radius: 50%;
    background-color: #93999F;
    color: #FFF;
    font-weight: bold;
    width: 25px;
    height: 25px;
    line-height: 27px;
    text-align: center;
    font-size: 16px;
    float: left;
    margin-right: 20px;
    margin-top: 5px;
  }

  .chapter-sub .chapter-sub-li {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #F3F5F7;
    margin-bottom: 10px;
    list-style-type: none;
    padding: 0px 10px;
  }

  .chapter-sub-title-fff {
    color: #FFF;
  }

  .chapter-sub .chapter-sub-li:hover {
    background-color: #CCC;
  }

  .chapter-sub .chapter-sub-li .icon-video {
    margin-right: 10px;
    color: #777777;
  }

  .chapter-edit {
    float: right;
    font-size: 12px;
    margin-right: 10px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    display: inline-block;
  }

  .chapter-edit:HOVER {
    background-color: #525A66;
    color: #FFF;
  }

  /**
  *课程章节-end
  **/

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0
  }

  .background-gradient {
    margin-top: 20px;
    font-size: 14px;
    padding-top: 7px;
    background: url(../assets/course_bg.jpg) repeat;

  }

  .section {
    position: absolute;
    top: 34px;
    right: 0;
    width: 160px;
  }

  #block {
    position: absolute;
    top: 170px;
  }

  .breadcrumb {
    background: inherit;
    margin-bottom: 0px;
  }

  .breadcrumb > li > a {
    color: #fff;
  }


  .button-self {
    border-radius: 22px;
    padding: 10px 65px;
    background-color: #FF3333;
    color: #fff;
    font-size: 16px;
  }

  .button-self:hover, .button-self:active, .button-self:focus {
    color: #fff;
    background-color: #FF5454
  }

  .edit {

    border-left: 1px solid rgba(114, 177, 177, 0.5);
    padding-top: 15px;
    padding-bottom: 15px;
  }

  h6 {
    font-size: 22px;
    margin-bottom: 1px;
    margin-top: 1px;
    font-family: "Arial";
  }

  .span-title {
    padding-left: 2px;
    color: #bbb;
  }

  .content-title-1 {
    padding: 15px 15px 10px 40px;
    font-size: 17px;
    border-bottom: 1px solid #d7dee0;
    margin-bottom: 18px;

  }

  .content-title-1 > li > a {
    color: #888;
  }

  .content-title-2 {
    padding: 15px 15px 10px 0px;
    font-size: 17px;
    border-bottom: 1px solid #d7dee0;
    margin-bottom: 15px;
  }

  .content-1-div {
    padding: 0;
    margin: 0 0 0 -18px;
  }

  .content-1-div > span {
    color: #464646;
  }

  .content-1-div > p {
    font-size: 15px;
    color: #949696;
  }

  .content-1 {
    font-size: 16px;
  }

  .content-1 > li {
    padding: 0px;
    margin-bottom: 20px;
  }

  .content-1 > li > div:first-child {
    margin-left: -14px;
    margin-top: 4px;
  }

  .row-nav-margin {
    margin: 63px 0px 0px 3px;
  }

  .content-2 {
    margin: 0;
    padding: 0;
  }

  .content-2 > li {

  }

  .content-2-span-1 {
    font-size: 15px;
    color: #949696;
  }

  .content-2-span-2 {
    font-size: 15px;
    color: #FA6441;
    float: right;
  }

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
    float: left;
    /*width: 640px;*/
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
</style>
