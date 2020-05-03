<template>
  <div id="app">


    <!--导航栏-->
    <nav class="navbar  navbar-inverse nav-pills navbar-fixed-top" id="banner" v-if="$route.meta.keepAlive">
      <div class="container">
        <div class="navbar-header">
          　
          <router-link to="/"><h4 class="navbar-brand">好知网</h4></router-link>
          　
        </div>


        <ul class="nav navbar-nav">
          <li class="active nav-item">
            <router-link to="/test">
              <h5 class="nav-link">课程中心</h5>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/personal">
              <h5 class="nav-link">学习中心</h5>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/chapters">
              <h5 class="nav-link">名师专题</h5>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/play">
              <h5 class="nav-link">手记</h5>
            </router-link>
          </li>
          <li id="search">
            <form class="form-inline navbar-form navbar-center">
              <input class="form-control" type="text" placeholder="想要搜索的课程">
              <router-link to="/search">
                <button class="btn btn-success" type="button">Search</button>
              </router-link>
            </form>
          </li>
        </ul>

        <ul class="nav navbar-nav navbar-right">

          <li v-show="flag == 0">
            <router-link to="">
              <h5 @click="pop = 1"><span class="glyphicon glyphicon-user"></span> 注册</h5>
            </router-link>

          </li>
          <li v-show="flag == 0">
            <router-link to="">
              <h5 @click="pop = 1"><span class="glyphicon glyphicon-log-in"></span> 登录</h5>
            </router-link>

          </li>

          <li v-show="flag == 1" class="dropdown" style="margin-top: -15px">
            <a class="dropdown-toggle" data-toggle="dropdown">
              <img :src="uu.header" id="userdetail" class="header">
            </a>

            <ul class="dropdown-menu">
              <li @click="personal(uu)">
                <a>{{uu.realname}}</a></li>
              <li class="divider"></li>
              <li @click="getInfo()">
                <a href="#">学习中心</a></li>
              <li @click="personal(uu)">
                <a>个人中心</a>
              </li>
              <li class="divider"></li>
              <li @click="logout">
                <a>退出登录</a></li>
            </ul>
          </li>

        </ul>

      </div>

    </nav>
    <nav class="navbar" style="margin-bottom: 30px"  v-if="$route.meta.keepAlive"></nav>
    <!--加载index组件-->
    <router-view v-if="routerAlive"></router-view>


    <!--    登录注册-->

    <div class="modal-dialog " role="document" style="position:fixed; top:30%; z-index: 1; left: 30%" v-show="pop">
      <div class="modal-content">

        <div class="modal-header" style="border-bottom:0px">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="pop =0">
            <span aria-hidden="true" style="font-size:18px;">×</span>
          </button>

          <ul id="myTab" class="nav nav-tabs">
            <li class="active">
              <a href="#login" data-toggle="tab">
                <h4 class="modal-title" id="loginTitle" style=" cursor: pointer; ">登 录</h4>
              </a>
            </li>
            <li><a href="#regist" data-toggle="tab">
              <h4 class="modal-title" id="registeTitle" style="margin-left: 20px;cursor: pointer;">注 册</h4>
            </a></li>
          </ul>

        </div>

        <div id="myTabContent " class="modal-body tab-content">

          <div class=" tab-pane fade in active" id="login">
            <form id="loginForm" class="form-horizontal" style="padding: 0px 20px;">
              <div class="form-group input-group">
                <span class="input-group-addon">
                  <i class="glyphicon glyphicon-user"></i></span>
                <input type="email" class="form-control" v-model="user.username" placeholder="用户名">
              </div>
              <div class="form-group input-group" >
                <span class="input-group-addon">
                  <i class="glyphicon glyphicon-lock"></i></span>
                <input type="password" class="form-control" v-model="user.password" placeholder="密　码">
              </div>
              <div class="form-group">
                <label>
                  <input type="checkbox" value="None" id="checkbox1" name="check">
                  <span class="text" style="color: #787D82;font-size: 14px;">下次自动登录</span>
                </label>
              </div>
              <div class="header-login-btn" @click="login">登 录</div>

            </form>
          </div>

          <div class=" tab-pane fade" id="regist">
            <form action="http://wwww.baidu.com" class="">

              <div class="form-group has-feedback">
                <label for="username">用户名</label>
                <div class="input-group">
                  <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                  <input id="username" class="form-control" placeholder="请输入用户名" maxlength="20" type="text">
                </div>

                <span style="color:red;display: none;" class="tips"></span>
                <span style="display: none;" class=" glyphicon glyphicon-remove form-control-feedback"></span>
                <span style="display: none;" class="glyphicon glyphicon-ok form-control-feedback"></span>
              </div>

              <div class="form-group has-feedback">
                <label for="password">密码</label>
                <div class="input-group">
                  <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                  <input id="password" class="form-control" placeholder="请输入密码" maxlength="20" type="password">
                </div>

                <span style="color:red;display: none;" class="tips"></span>
                <span style="display: none;" class="glyphicon glyphicon-remove form-control-feedback"></span>
                <span style="display: none;" class="glyphicon glyphicon-ok form-control-feedback"></span>
              </div>

              <div class="form-group has-feedback">
                <label for="passwordConfirm">确认密码</label>
                <div class="input-group">
                  <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                  <input id="passwordConfirm" class="form-control" placeholder="请再次输入密码" maxlength="20" type="password">
                </div>
                <span style="color:red;display: none;" class="tips"></span>
                <span style="display: none;" class="glyphicon glyphicon-remove form-control-feedback"></span>
                <span style="display: none;" class="glyphicon glyphicon-ok form-control-feedback"></span>
              </div>




              <div class="row">
                <div class="col-xs-7">
                  <div class="form-group has-feedback">
                    <label for="idcode-btn">验证码</label>
                    <div class="input-group">
                      <span class="input-group-addon"><span class="glyphicon glyphicon-qrcode"></span></span>
                      <input id="idcode-btn" class="form-control" placeholder="请输入验证码" maxlength="4" type="text">
                    </div>
                    <span style="color:red;display: none;" class="tips"></span>
                    <span style="display: none;" class="glyphicon glyphicon-remove form-control-feedback"></span>
                    <span style="display: none;" class="glyphicon glyphicon-ok form-control-feedback"></span>
                  </div>
                </div>
                <div class="col-xs-5" style="padding-top: 30px">
                  <div id="idcode" style="background: transparent;"></div>
                </div>
              </div>

              <div class="form-group has-feedback">
                <label for="phoneNum">手机号码</label>
                <div class="input-group">
                  <span class="input-group-addon"><span class="glyphicon glyphicon-phone"></span></span>
                  <input id="phoneNum" class="form-control" placeholder="请输入手机号码" maxlength="11" type="text">
                </div>
                <span style="color:red;display: none;" class="tips"></span>
                <span style="display: none;" class="glyphicon glyphicon-remove form-control-feedback"></span>
                <span style="display: none;" class="glyphicon glyphicon-ok form-control-feedback"></span>
              </div>

              <div class="row">
                <div class="col-xs-7">
                  <div class="form-group has-feedback">
                    <label for="idcode-btn">校验码</label>
                    <div class="input-group">
                      <span class="input-group-addon"><span class="glyphicon glyphicon-qrcode"></span></span>
                      <input id="idcode-btn" class="form-control" placeholder="请输入校验码" maxlength="6" type="text">
                    </div>
                    <span style="color:red;display: none;" class="tips"></span>
                    <span style="display: none;" class="glyphicon glyphicon-remove form-control-feedback"></span>
                    <span style="display: none;" class="glyphicon glyphicon-ok form-control-feedback"></span>
                  </div>
                </div>
                <div class="col-xs-5 text-center" style="padding-top: 26px">
                  <button type="button" id="loadingButton" class="btn btn-primary" autocomplete="off">获取短信校验码</button>
                </div>
              </div>

              <div class="form-group">
                <input class="form-control btn btn-primary" id="submit" value="立&nbsp;&nbsp;即&nbsp;&nbsp;注&nbsp;&nbsp;册" type="submit">
              </div>

              <div class="form-group">
                <input value="重置" id="reset" class="form-control btn btn-danger" type="reset">
              </div>
            </form>
          </div>


        </div>
      </div>

    </div>


    <div class="footer " style="margin-top: 30px" v-if="$route.meta.keepAlive">
      <div class="copyright col-md-12 column container">
        <div class="copyright_c">
          <div class="copyright_head">
            <div class="copyright_L">
              <p><img src="static/img/foot-logo.png"/></p>
              <span>
			<em>服务时间：</em>
			<em>周一至周日  9:00-18:00</em>
		</span>
              <span>
			<em>客服电话：</em>
			<strong>4000-000-0000</strong>
		</span>
              <span>
			<em>客服QQ：</em>
			<a href="#"
         style=" display: block; float: left; width:100px; height: 30px;border-radius: 3px; overflow: hidden; background: url(static/img/QQ.jpg) #03d3ff no-repeat 11px center;padding-left:35px; font-size: 14px; color: #FFF; line-height: 30px; margin-right:10px">在线交谈</a>
		</span>
            </div>
            <div class="copyright_C">
              <div class="copyright_C_list">
                <p>关于我们</p>
                <div class="about">
                  <a href="#">公司简介</a>
                </div>
                <div class="about">
                  <a href="#">知识产权</a>
                </div>
                <div class="about">
                  <a href="#">联系我们</a>
                </div>
              </div>
              <div class="copyright_C_list">
                <p>产品服务</p>
                <div class="about">
                  <a href="#">云官网</a>
                  <a href="#">云商城</a>
                </div>
                <div class="about">
                  <a href="#">云分销</a>
                  <a href="#">微圈儿</a>
                </div>
                <div class="about">
                  <a href="#">小程序</a>
                  <a href="#">小程序加盟</a>
                </div>
              </div>
              <div class="copyright_C_list">
                <p>建站学院</p>
                <div class="about">
                  <a href="#">服务市场</a>
                  <a href="#">城市建站</a>
                </div>
                <div class="about">
                  <a href="#">帮助中心</a>
                  <a href="#">快递查询</a>
                </div>
                <div class="about">
                  <a href="#">建站学院</a>
                </div>
              </div>
            </div>
            <div class="copyright_R">
              <span><img src="static/img/ewm1.jpg"/></span>
              <p>扫描关注微信公众号</p>
            </div>
          </div>
          <div class="copyright_bottom">
            <span>京B2-xxxxxxx 京公海网安备1101080xxxxxxx号 京ICP备xxxxxxxx号-32   </span>
            <p>建站创建能为您带去订单的网站</p>
          </div>
        </div>
      </div>

    </div>
  </div>


</template>
<script>
  import banner from "./components/banner.vue";
  import recommend from "./components/recommend.vue";
  import course from "./components/course.vue";
  import footer from "./components/footer.vue";

  export default {
    data() {
      return {
        pop: 0,
        flag: 0,
        flag2: 0,
        routerAlive: true,
        user: {
          username: '',
          password: '',
        },
        mmm: {
          username: '',
          realname:'',
          password: '',
          mobile:''
        },
        uu: {
        }

      }
    },
    created: function () {
      this.loadUser();
    },
    methods: {
      routerRefresh() {
        this.routerAlive = false;
        this.$nextTick(() => {
          this.routerAlive = true;
        });
      },
      showSection() {
      },
      //注册
      regist: function () {
        console.log(this.mmm.username);
        console.log(this.mmm.password);
        this.$http.post("http://localhost:8088/user/register", {
          //传参
          username: this.mmm.username,
          password: this.mmm.password,
          realname: this.mmm.realname,
          mobile: this.mmm.mobile,
        }).then(function (result) {
          console.log(result.body);
        })
      },
      //登录
      login: function () {
        console.log(this.user.username);
        console.log(this.user.password);
        this.$http.post("http://localhost:8088/user/login", { //传参
          username: this.user.username,
          password: this.user.password
        }).then(function (result) {
          console.log(result.body);
          this.pop = 0;
          this.flag = 1;
          this.uu = result.body;
        })
      },
      //退出登录
      logout: function () {
        this.$router.push({
          path: "/"
        }).catch(data => {
        }),
          this.$http.get("http://localhost:8088/user/logout").then(
            function (result) {
              // this.pop=1;
              this.flag = 0;
            },
            function (error) {
              alert("退出登录失败，请重试.")
            }
          )
      },
      loadUser: function () {
        this.$http.get("http://localhost:8088/user/getInfo").then(
          function (result) {
            console.log("session 获取信息" + result.body);
            if (result.body == "") {
              this.flag = 0;
            } else {
              this.flag = 1;
              this.uu = result.body;
            }

          }
        )
      },

      personal: function (uu) {
        this.$router.push(
          {
            path: '/personal',
            query: {
              uu: uu
            }
          }
        )
      }


    },
    components: {
      'v-banner': banner,
      "v-recommend": recommend,
      "v-course": course,
      "v-footer": footer
    },
    computed: {}
  };
  $(function () {
    // 循环轮播到某个特定的帧8
    $(".slide-one").click(function () {
      $("#myCarousel").carousel(0);
    });
    $(".slide-two").click(function () {
      $("#myCarousel").carousel(1);
    });
    $(".slide-three").click(function () {
      $("#myCarousel").carousel(2);
    });
  });


</script>

<style>
  .body {
    /*z-index: 0;*/
  }

  .header {
    display: block;
    width: 50px;
    height: 50px;
    margin-top: 10px;
    border-radius: 50%;
  }

  .header-login-btn {
    border-radius: 4px;
    width: 200px;
    height: 50px;
    line-height: 50px;
    background-color: #0089D2;
    margin: 0 auto;
    text-align: center;
    color: #FFF;
    cursor: pointer;
    font-size: 18px;
  }

  .a {
    text-decoration: none;

  }

  #banner {
  }

  #search {
    padding-top: 10px;
  }

  .body {
    margin-top: 30px;
  }

  .list-group-horizontal .list-group-item {
    display: inline-block;
  }

  .list-group-horizontal .list-group-item {
    margin-bottom: 0;
    /*margin-left: -4px;*/
    margin-right: 0;
  }

  .list-group-horizontal .list-group-item:first-child {
    border-top-right-radius: 0;
    border-bottom-left-radius: 4px;
  }

  .list-group-horizontal .list-group-item:last-child {
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  em {
    font-style: normal;
  }

  /*页脚*/
  .copyright {
    padding-top: 79px;
    border-top: 1px solid #ededed;
    color: aqua;
  }

  .copyright_c {
    height: 313px;
    width: 1200px;
    margin: 0 auto;
  }

  .copyright_head {
    height: 247px;
    overflow: hidden;
    border-bottom: 1px solid #ededed;
  }

  .copyright_L {
    float: left;
    width: 406px;
  }

  .copyright_L p {
    display: block;
    width: 381px;
    height: 48px;
    margin-bottom: 26px;
  }

  .copyright_L span {
    display: block;
    overflow: hidden;
    margin-bottom: 4px;
  }

  .copyright_L span em {
    display: block;
    float: left;
    font-size: 14px;
    color: #888;
    line-height: 30px;
  }

  .copyright_L span strong {
    display: block;
    float: left;
    font-size: 24px;
    color: #f90;
    line-height: 30px;
  }

  /*.copyright_L span a{ display: block; float: left; width:70px; height: 30px;border-radius: 3px; overflow: hidden; background: url(static/img/QQ.jpg) #03d3ff no-repeat 11px center;padding-left:35px; font-size: 14px; color: #FFF; line-height: 30px; margin-right:10px}*/
  .copyright_L span:last-child {
    padding-top: 10px;
  }

  .copyright_C {
    float: left;
    overflow: hidden;
  }

  .copyright_C_list {
    float: left;
    padding-top: 24px;
  }

  .copyright_C_list p {
    display: block;
    font-size: 18px;
    color: #333;
    padding-bottom: 28px;
  }

  .about {
    overflow: hidden;
    margin-bottom: 22px;
  }

  .about a {
    display: block;
    font-size: 12px;
    color: #666;
    float: left;
    margin-right: 24px;
  }

  .about a:hover {
    color: #3fc7ff;
  }

  .copyright_C_list:nth-child(2) {
    margin-left: 114px;
    margin-right: 46px;
  }

  .copyright_R {
    float: right;
    width: 150px;
  }

  .copyright_R span {
    display: block;
    width: 122px;
    height: 122px;
    border: 1px solid #ededed;
    padding: 13px;
  }

  .copyright_R span img {
    width: 100%
  }

  .copyright_R p {
    display: block;
    font-size: 12px;
    color: #999;
    text-align: center;
    padding-top: 18px;
  }

  .copyright_bottom {
    height: 65px;
    overflow: hidden;
  }

  .copyright_bottom span {
    display: block;
    line-height: 65px;
    font-size: 12px;
    color: #a9a9a9;
    float: left;
  }

  .copyright_bottom p {
    display: block;
    line-height: 65px;
    font-size: 12px;
    color: #a9a9a9;
    float: right;
  }

  #app {
  }
</style>
