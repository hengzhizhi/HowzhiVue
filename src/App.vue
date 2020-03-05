<template>
  <div id="app">
    <div class="container">
      <div class="row clearfix">
        <div class="col-md-12 column">
          <!--导航栏-->
          <nav class="navbar navbar-default navbar-inverse nav-pills navbar-fixed-top" >
          <div class="container">
            <div class="navbar-header">
              　 <a href="##" class="navbar-brand">好知网</a>
              　
            </div>


            <ul class="nav navbar-nav">
              <li class="active nav-item">
                <a class="nav-link" href="#">课程中心</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">学习中心</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">名师专题</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">手记</a>
              </li>
              <li>
                <form class="form-inline navbar-form navbar-center">
                  <input class="form-control" type="text" placeholder="想要搜索的课程">
                  <button class="btn btn-success" type="button">Search</button>
                </form>
              </li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li><a href="#"><span class="glyphicon glyphicon-user"></span> 注册</a></li>
              <li><router-link to="/login"><a href="/login"><span class="glyphicon glyphicon-log-in"></span> 登录</a></router-link></li>
            </ul>

          </div>
          </nav>

          <nav class="navbar  " ></nav>
<!--          <v-banner></v-banner>-->
<!--          <div class="panel panel-default">-->

<!--            <div class="panel-body">-->
<!--          <v-recommend></v-recommend>-->


<!--          <v-course></v-course>-->

<!--            </div>-->
<!--          </div>-->
          <router-view/>
        </div>
<!--        <v-footer></v-footer>-->
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
  data(){
    return{

    }
  },
  components:{
    'v-banner':banner,
    "v-recommend":recommend,
    "v-course":course,
    "v-footer":footer
  }
};
  $(function () {
    // 循环轮播到某个特定的帧
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

  #app {
  }
</style>
