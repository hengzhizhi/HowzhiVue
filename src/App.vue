<template>
  <div id="app">
    <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top nav-pills ">
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



      </ul>
          <form class="form-inline navbar-form navbar-right">
            <input class="form-control" type="text" placeholder="想要搜索的课程">
            <button class="btn btn-success" type="button">Search</button>
          </form>



    </nav>






    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {}
</style>
