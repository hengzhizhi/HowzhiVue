<template>
  <div class="banner col-md-12 column">
    <!--轮播及侧边二级菜单-->
    <div class="row clearfix " style="margin-top: 10px">
      <!--侧边二级菜单-->
      <div class="col-md-3 column ">
        <ul class="list-group">

          <a class="list-group-item"><h5 class="bg-black">前沿 / 区块链 / 人工智能</h5></a>
          <a class="list-group-item"><h5>前端 / 小程序 / JS</h5></a>
          <a class="list-group-item"><h5>后端 / JAVA / Python</h5></a>
          <a class="list-group-item"><h5>移动 / Android / iOS</h5></a>
          <a class="list-group-item"><h5>云计算 / 大数据 / 容器</h5></a>
          <a class="list-group-item"><h5>运维 / 测试 / 数据库</h5></a>
          <a class="list-group-item"><h5> UI设计 / 3D动画 / 游戏</h5></a>

        </ul>
      </div>
      <!-- 轮播图-->
      <div class="col-md-9 column">
        <div id="myCarousel" class="carousel slide ">
          <!-- 轮播（Carousel）指标 -->
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <!-- 轮播（Carousel）项目 -->
          <div class="carousel-inner ">
            <div class="item active">
              <img src="/static/img/banner01.jpg" alt="First slide">
            </div>
            <div class="item">
              <img src="/static/img/banner02.jpg" alt="Second slide">
            </div>
            <div class="item">
              <img src="/static/img/banner03.jpg" alt="Third slide">
            </div>
          </div>
          <!-- 轮播（Carousel）导航 -->
          <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <!-- 模块简介图标-->
        <div id="block" class="list-group list-group-horizontal center-block">
          <a href="#" class="list-group-item col-md-3 column" style="text-align: center">
            <i class="fa fa-html5" aria-hidden="true"></i>
            <h5>Web前端攻城狮</h5>
            <p>互联网时代最火爆的技术</p>
          </a>

          <a href="#" class="list-group-item col-md-3 column" style="text-align: center">
            <i class="fa fa-github-alt" aria-hidden="true"></i>
            <h5>Web前端攻城狮</h5>
            <p>互联网时代最火爆的技术</p>
          </a>

          <a href="#" class="list-group-item col-md-3 column" style="text-align: center">
            <i class="fa fa-apple" aria-hidden="true"></i>
            <h5>Web前端攻城狮</h5>
            <p>互联网时代最火爆的技术</p>
          </a>

          <a href="#" class="list-group-item col-md-3 column" style="text-align: center">
            <i class="fa fa-android" aria-hidden="true"></i>
            <h5>Web前端攻城狮</h5>
            <p>互联网时代最火爆的技术</p>
          </a>


        </div>

      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: 'banner',
  data () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
