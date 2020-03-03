<template>
  <div id="app">
    <div class="container">
      <div class="row clearfix">
        <div class="col-md-12 column">
          <!--导航栏-->
          <nav class="navbar navbar-default navbar-inverse nav-pills ">
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
              <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> 登录</a></li>
            </ul>


          </nav>





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

          <div class="panel panel-default">

            <div class="panel-body">

        <!-- 推荐-->
          <div class="col-md-12 column">
            <div class="page-header">
              <h1>页面标题实例
                <small>子标题</small>
              </h1>
            </div>
            <div class="grid">

              <figure  class="effect-zoe" >
                <img  class="img-rounded" src="static/img/14.jpg"
                     alt="通用的占位符缩略图" >
                <figcaption>
                  <h2>Creative <span>Zoe</span></h2>
                  <span class="icon-heart"></span>
                  <span class="icon-eye"></span>
                  <span class="icon-paper-clip"></span>
                  <p>Zoe never had the patience of her sisters. She deliberately punched the bear in his face.</p>
                  <a href="http://www.lanrentuku.com/" target="_blank">View more</a>
                </figcaption>
              </figure>

              <figure class="effect-zoe" >
                <img class="img-rounded" src="static/img/14.jpg"
                     alt="通用的占位符缩略图">
                <figcaption>
                  <h2>Creative <span>Zoe</span></h2>
                  <span class="icon-heart"></span>
                  <span class="icon-eye"></span>
                  <span class="icon-paper-clip"></span>
                  <p>Zoe never had the patience of her sisters. She deliberately punched the bear in his face.</p>
                  <a href="http://www.lanrentuku.com/" target="_blank">View more</a>
                </figcaption>
              </figure>

              <figure class="effect-zoe">
                <img class="img-rounded"src="static/img/14.jpg"
                     alt="通用的占位符缩略图">
                <figcaption>
                  <h2>Creative <span>Zoe</span></h2>
                  <span class="icon-heart"></span>
                  <span class="icon-eye"></span>
                  <span class="icon-paper-clip"></span>
                  <p>Zoe never had the patience of her sisters. She deliberately punched the bear in his face.</p>
                  <a href="http://www.lanrentuku.com/" target="_blank">View more</a>
                </figcaption>
              </figure>


            </div>
          </div>

          <!--侧边大图及缩略图-->
          <div class="col-md-12 column" >
            <div class="page-header">
              <h1>页面标题实例
                <small>子标题</small>
              </h1>
            </div>
            <div class="col-md-3 ">
              <div class="thumbnail">
                <img src="static/img/img01.jpg"
                     alt="通用的占位符缩略图">
                <div class="caption">
                  <h3>缩略图标签</h3>
                  <p>一些示例文本。一些示例文本。</p>

                </div>
              </div>
            </div>

            <div class="col-md-9 ">
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src="static/img/img.jpg"
                       alt="通用的占位符缩略图">
                  <div class="caption">
                    <h4>缩略图标签</h4>
                    <p>一些示例文本。一些示例文本。</p>
                  </div>
                </div>
              </div>


              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src="static/img/img.jpg"
                       alt="通用的占位符缩略图">
                  <div class="caption">
                    <h4>缩略图标签</h4>
                    <p>一些示例文本。一些示例文本。</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src="static/img/img.jpg"
                       alt="通用的占位符缩略图">
                  <div class="caption">
                    <h4>缩略图标签</h4>
                    <p>一些示例文本。一些示例文本。</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src="static/img/img.jpg"
                       alt="通用的占位符缩略图">
                  <div class="caption">
                    <h4>缩略图标签</h4>
                    <p>一些示例文本。一些示例文本。</p>
                  </div>
                </div>
              </div>


              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src="static/img/img.jpg"
                       alt="通用的占位符缩略图">
                  <div class="caption">
                    <h4>缩略图标签</h4>
                    <p>一些示例文本。一些示例文本。</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src="static/img/img.jpg"
                       alt="通用的占位符缩略图">
                  <div class="caption">
                    <h4>缩略图标签</h4>
                    <p>一些示例文本。一些示例文本。</p>
                  </div>
                </div>
              </div>


            </div>


            </div>

          <!--侧边大图及缩略图-->
          <div class="col-md-12 column" style="margin-top: 30px">
            <div class="col-md-3 ">
              <div class="thumbnail">
                <img src="static/img/img01.jpg"
                     alt="通用的占位符缩略图">
                <div class="caption">
                  <h3>缩略图标签</h3>
                  <p>一些示例文本。一些示例文本。</p>

                </div>
              </div>
            </div>

            <div class="col-md-9 ">
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src="static/img/img.jpg"
                       alt="通用的占位符缩略图">
                  <div class="caption">
                    <h4>缩略图标签</h4>
                    <p>一些示例文本。一些示例文本。</p>
                  </div>
                </div>
              </div>


              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src="static/img/img.jpg"
                       alt="通用的占位符缩略图">
                  <div class="caption">
                    <h4>缩略图标签</h4>
                    <p>一些示例文本。一些示例文本。</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src="static/img/img.jpg"
                       alt="通用的占位符缩略图">
                  <div class="caption">
                    <h4>缩略图标签</h4>
                    <p>一些示例文本。一些示例文本。</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src="static/img/img.jpg"
                       alt="通用的占位符缩略图">
                  <div class="caption">
                    <h4>缩略图标签</h4>
                    <p>一些示例文本。一些示例文本。</p>
                  </div>
                </div>
              </div>


              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src="static/img/img.jpg"
                       alt="通用的占位符缩略图">
                  <div class="caption">
                    <h4>缩略图标签</h4>
                    <p>一些示例文本。一些示例文本。</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src="static/img/img.jpg"
                       alt="通用的占位符缩略图">
                  <div class="caption">
                    <h4>缩略图标签</h4>
                    <p>一些示例文本。一些示例文本。</p>
                  </div>
                </div>
              </div>


            </div>


          </div>

          <!--侧边大图及缩略图-->

          <div class="col-md-12 column pannel" style="margin-top: 30px">
            <div class="col-md-3 ">
              <div class="thumbnail">
                <img src="static/img/img01.jpg"
                     alt="通用的占位符缩略图">
                <div class="caption">
                  <h3>缩略图标签</h3>
                  <p>一些示例文本。一些示例文本。</p>

                </div>
              </div>
            </div>

            <div class="col-md-9 ">
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src="static/img/img.jpg"
                       alt="通用的占位符缩略图">
                  <div class="caption">
                    <h4>缩略图标签</h4>
                    <p>一些示例文本。一些示例文本。</p>
                  </div>
                </div>
              </div>


              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src="static/img/img.jpg"
                       alt="通用的占位符缩略图">
                  <div class="caption">
                    <h4>缩略图标签</h4>
                    <p>一些示例文本。一些示例文本。</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src="static/img/img.jpg"
                       alt="通用的占位符缩略图">
                  <div class="caption">
                    <h4>缩略图标签</h4>
                    <p>一些示例文本。一些示例文本。</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src="static/img/img.jpg"
                       alt="通用的占位符缩略图">
                  <div class="caption">
                    <h4>缩略图标签</h4>
                    <p>一些示例文本。一些示例文本。</p>
                  </div>
                </div>
              </div>


              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src="static/img/img.jpg"
                       alt="通用的占位符缩略图">
                  <div class="caption">
                    <h4>缩略图标签</h4>
                    <p>一些示例文本。一些示例文本。</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <img src="static/img/img.jpg"
                       alt="通用的占位符缩略图">
                  <div class="caption">
                    <h4>缩略图标签</h4>
                    <p>一些示例文本。  <i class="fa fa-thumbs-o-up"></i></p>
                  </div>
                </div>
              </div>


            </div>


          </div>

            </div>


</div>

        </div>

        </div>


        <router-view/>
    </div>


    </div>




</template>

<script>

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

  export default {
    name: 'App'
  }
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
