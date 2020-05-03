<template>
  <div class="test">
    <div class="container">
      <h1>测试</h1>

      <form class="form-horizontal" role="form">
        <!--        <div class="form-group">-->
        <!--          <label class="col-sm-2 control-label">用户名</label>-->
        <!--          <div class="col-sm-6">-->
        <!--            <input type="text" class="form-control"  placeholder="请输入用户名" v-model="username">-->
        <!--          </div>-->
        <!--        </div>-->

        <div class="form-group">
          <label class="sr-only col-sm-2 control-label">文件输入</label>
          <div class="col-sm-6">
            <input class="file" type="file" @change="getFile($event)" value="请选择文件">
          </div>
        </div>

        <div class="form-group ">
          <label class="col-sm-2 control-label"></label>
          <div class="col-sm-6">
            <button type="submit" @click="submit($event)" class="btn btn-default ">提交</button>
          </div>
        </div>
        <a class="btn btn-danger" v-on:click="test">测试</a>
      </form>

      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(course,index) in courses">
          <td>{{ course.name }}</td>
          <td>{{course.photo_rl}}</td>
          <td><img :src="course.photoUrl"></td>
        </tr>
        </tbody>
      </table>


    </div>

  </div>
</template>

<script>
  // import axios from 'axios';
  export default {
    name: 'test',
    data() {
      return {
        file: '',
        course:{
          course_id:'',
          name:'',
          type_id:'',
          hoto_url:'',
          create_time:'',
          view_count:'',
          teacher_id:'',
          status:''
        },
        courses:[]
      }

    },
    created() {
      this.test()
    },
    methods: {
      test: function () {
        alert("测试")
        this.$http.post("http://localhost:8088/course/selectAll").then(
          function(ret){
            this.courses=ret.body;
            console.log(ret);
          }
        )
      },


      getFile: function (event) {
        this.file = event.target.files[0];
        console.log(this.file);
      },
      submit: function (event) {
        event.preventDefault();
        let formData = new FormData();
        formData.append("file", this.file);

        this.$http
          .post('/upload', formData)
          .then(function (response) {
            alert(response.data);
            console.log(response);
            window.location.reload();
          })
          .catch(function (error) {
            alert("上传失败");
            console.log(error);
            window.location.reload();
          });
      }

    },
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
