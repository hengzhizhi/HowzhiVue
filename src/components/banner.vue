<template>
  <div class="banner col-md-12 column">
    <!--轮播及侧边二级菜单-->
    <div class="row clearfix " style="margin-top: 10px">
      <!--侧边二级菜单-->
      <div class="col-md-3 column ">
        <ul class="list-group" >
             <li v-for="(type,index) in typeList"><a class="list-group-item"><h5>{{type.name}}</h5></a></li>
        </ul>
      </div>


      <div class="col-md-9 column">
      <div class="banner carousel slide">
        <div class="item">
          <img :src="dataList[currentIndex].photoUrl" style="width: 100%;height: 100%">
        </div>
        <div class="page" style="position:absolute; z-index:2; right:10%; bottom:10px" v-if="this.dataList.length > 1">
          <ul class="list-unstyled list-inline num" >
            <li @click="gotoPage(prevIndex)">&lt;</li>
            <li v-for="(item,index) in dataList" @click="gotoPage(index)"  :class="{'current':currentIndex == index}">  {{index+1}}</li>
            <li @click="gotoPage(nextIndex)">&gt;</li>
          </ul>
        </div>
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
    data() {
      return {
        banners: [],
        typeList: [],

        dataList:[],
        currentIndex: 0,   //默认显示图片
        timer: null   //定时器
      }
    },
    computed:{
      //上一张
      prevIndex() {
        if(this.currentIndex == 0) {
          return this.dataList.length - 1;
        }else{
          return this.currentIndex - 1;
        }
      },
      //下一张
      nextIndex() {
        if(this.currentIndex == this.dataList.length - 1) {
          return 0;
        }else {
          return this.currentIndex + 1;
        }
      },
      runInv() {
        this.timer = setInterval(() => {
          this.gotoPage(this.nextIndex)
        }, 1000)
      },
    },
    created() {
      this.getBanner(),
      this.getTypeList();
    },
    methods: {

      getBanner: function () {
        this.$http.post("http://localhost:8088/carousel/selectAll").then(
          function (ret) {
            this.dataList = ret.body;
            console.log(ret);
          }
        )
      },
      gotoPage(index) {
        this.currentIndex = index;
      },
      //定时器
      runInv() {
        this.timer = setInterval(() => {
          this.gotoPage(this.nextIndex)
        }, 1000)
      },
      getTypeList: function () {
        this.$http.post("http://localhost:8088/course/selectTypes").then(
          function (ret) {
            this.typeList = ret.body;
            console.log(ret);
          }
        )
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*轮播标签*/
  .num {
    /*color: black;*/
    cursor:Pointer ;
    font-weight: bold;
    font-size: 10px;
  }
.current{
  font-size: 15px;
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
</style>
