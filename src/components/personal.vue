<template>
  <div class="personal ">

    <div class="container">
      <div class="col-md-3">
        <div class="lecturer-item" style="width: 100%;">
          <img class="lecturer-uimg" src="static/img/head.jpg">
          <span class="lecturer-name">王阳明</span>
          <ul class="nav nav-pills nav-stacked" id="myTab">
            <li class="active"><a href="#message" data-toggle="tab">个人资料</a></li>
            <li><a href="#collection" data-toggle="tab">我的收藏</a></li>
            <li><a href="">我的关注</a></li>
          </ul>
        </div>
      </div>
      <div id="myTabContent" class="tab-content">
        <div class="col-md-9 tab-pane fade in active" id="message">

          <form class="form-horizontal" role="form">
            <div class="form-group">
              <label class="col-sm-2 control-label">昵称</label>
              <div class="col-sm-7">
                <input type="text" class="form-control" id="name" v-model="user.realname">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">电话</label>
              <div class="col-sm-7">
                <input type="text" class="form-control" id="phone" v-model="user.mobile">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">密码</label>
              <div class="col-sm-7">
                <input type="password" class="form-control" id="phone" v-model="user.password">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">确认密码</label>
              <div class="col-sm-7">
                <input type="password" class="form-control" id="phone" v-model="user.password">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">QQ</label>
              <div class="col-sm-7">
                <input type="text" class="form-control" id="phone" v-model="user.qq">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">签名</label>
              <div class="col-sm-7">
                <textarea spellcheck="false" class="form-control" id="sign" rows="5" cols="20"
                          v-model="user.sign"></textarea>

              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">头像</label>
              <div class="col-sm-10">
                <upload @func="synImg"></upload>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-10 col-sm-offset-5">
                <button type="button" class="btn btn-default" v-on:click="sub">提交</button>
              </div>
            </div>
          </form>

        </div>


        <div class="col-md-9 tab-pane fade in active" id="collection">
       <h1>我的 收藏</h1>





            <div class="col-md-4" v-for="(course,index) in courses" >
              <div class="thumbnail"  style="border-radius: 5px;">
                <img class="courseImg" :src="course.photoUrl">
                <div class="capchation">
                  <div>
                    <p class="font-weight-bold courseName">

                      <strong data-toggle="tooltip" data-placement="bottom" >{{ course.name
                        }}</strong>
                    </p>
                  </div>
                </div>
<!--                <div v-for="(teacher,index) in teachers" v-if="course.teacherId == teacher.teacherId">-->
<!--                  <span><i class="fa fa-user" aria-hidden="true">{{teacher.name}}</i></span>-->
<!--                  <span style="float: right"><i class="fa fa-eye" aria-hidden="true">{{course.viewCount}}</i></span>-->
<!--                </div>-->
              </div>
            </div>








        </div>

      </div>
    </div>
  </div>
  </div>

</template>

<script>
  import upload from "./upload";

  export default {
    name: 'personal',
    data() {
      return {
        user: {},
        imgList: [],
        courses:[]
      }

    },
    components: {
      //组件注册
      upload
    },
    created() {
      var uu = this.$route.query.uu;
      console.log(uu);
      this.user = uu;
      this.getCollection();
    },

    methods: {
      getCollection: function () {
        this.$http.get("http://localhost:8088/user/getcollection", {
          params: {
          },
        }).then(function (result) {
          console.log(result.body);
          this.courses = result.body;
        })
      },


      synImg: function (data) {
        this.imgList = data;
      },
      sub: function () {
        var formdata = new FormData();
        for (var i = 0; i < this.imgList.length; i++) {
          formdata.append("file", this.imgList[i].file);
        }
        formdata.append("user", this.user);
        var config = {
          headers: {
            "Content-type": "multipart/form-data",
          }
        }

        this.$http.post("http://localhost:8088/user/upload", formdata, config).then(
          function (result) {
            console.log(result);
            console.log(result.bodyText);
            alert("文件上传成功");
            this.$router.go(0);
          }, function (error) {
            console.log(error.body.message);//打印错误信息
          }
        )

      }
    }
  }
</script>


<style scoped>
  .personal {
    margin-top: 50px;
  }

  .lecturer-item {
    width: 224px;
    /*height: 320px;*/
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


</style>
