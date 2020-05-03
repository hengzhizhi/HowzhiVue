<template>
  <div class="recommend">
    <!-- 推荐-->
    <div class="col-md-12 column">
      <div class="page-header">
        <h1>我的
          <small>推荐</small>
        </h1>
      </div>
      <div class="grid">

        <figure class="effect-zoe">
          <img class="img-rounded" src="static/img/18.jpg"
               alt="通用的占位符缩略图">
          <figcaption>
            <h2> 数据库原理</h2>
            <span class="icon-heart"></span>
            <span class="icon-eye"></span>
            <span class="icon-paper-clip"></span>
            <p>Zoe never had the patience of her sisters. She deliberately punched the bear in his face.</p>
            <a href="http://www.lanrentuku.com/" target="_blank">View more</a>
          </figcaption>
        </figure>

        <figure class="effect-zoe">
          <img class="img-rounded" src="static/img/17.jpg"
               alt="通用的占位符缩略图">
          <figcaption>
            <h2>APP开发从零开始</h2>
            <span class="icon-heart"></span>
            <span class="icon-eye"></span>
            <span class="icon-paper-clip"></span>
            <p>Zoe never had the patience of her sisters. She deliberately punched the bear in his face.</p>
            <a href="http://www.lanrentuku.com/" target="_blank">View more</a>
          </figcaption>
        </figure>

        <figure class="effect-zoe">
          <img class="img-rounded" src="static/img/16.jpg"
               alt="通用的占位符缩略图">
          <figcaption>
            <h2>摄影教程</h2>
            <span class="icon-heart"></span>
            <span class="icon-eye"></span>
            <span class="icon-paper-clip"></span>
            <p>Zoe never had the patience of her sisters. She deliberately punched the bear in his face.</p>
            <a href="http://www.lanrentuku.com/" target="_blank">View more</a>
          </figcaption>
        </figure>


      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'recommend',
    data() {
      return{

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.effect-zoe .img-rounded{
  width:355px ;
  height:222px ;
}
</style>
