<template>
  <div class="course col-md-12 column">

    <div class="page-header">
      <h1>课程
        <small>中心</small>
      </h1>
    </div>
    <div class="container" v-for="(type,index) in typeList">
      <div class="col-md-12 column row" style="margin-top: 30px">
        <div class="col-md-3 row">
          <div class="thumbnail">
            <img :src="type.photoUrl" style="border-radius: 6px;">
            <div class="caption">
              <h4 style="overflow: hidden; white-space:nowrap; text-overflow:ellipsis">{{type.name}}</h4>
            </div>
          </div>
        </div>

        <div class="col-md-9 row ">

          <div class="col-md-4" v-for="(course,index) in courses" v-if="course.typeId == type.categoryId">
            <div class="thumbnail" @click="queryCourse(course.courseId)" style="border-radius: 5px;">
              <img class="courseImg" :src="course.photoUrl">
              <div class="capchation">
                <div>
                  <p class="font-weight-bold courseName">

                    <strong data-toggle="tooltip" data-placement="bottom" v-bind:title="course.name">{{ course.name
                      }}</strong>
                  </p>
                </div>
              </div>
              <div v-for="(teacher,index) in teachers" v-if="course.teacherId == teacher.teacherId">
                <span><i class="fa fa-user" aria-hidden="true">{{teacher.name}}</i></span>
                <span style="float: right"><i class="fa fa-eye" aria-hidden="true">{{course.viewCount}}</i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'course',
    data() {
      return {
        typeList: [],
        courses: [],
        teachers: []
      }
    },

    created() {
      this.getTypeList();
      this.getCourses();
      this.getTeacher();
    },

    methods: {
      function() {
        $("[data-toggle='tooltip']").tooltip();
      },
      getCourses: function () {
        this.$http.post("http://localhost:8088/course/selectAll").then(
          function (ret) {
            this.courses = ret.body;
            console.log(ret);
          }
        )
      },
      getTypeList: function () {
        this.$http.post("http://localhost:8088/course/selectTypes").then(
          function (ret) {
            this.typeList = ret.body;
            console.log(ret);
          }
        )
      },
      queryCourse: function (id) {
        this.$router.push(
          {
            path: '/chapters',
            query: {
              id: id
            }
          }
        )
      },
      getTeacher: function () {
        this.$http.get("http://localhost:8088/teacher/selectAll/", {
          params: {},
        }).then(function (result) {
          console.log(result.body);
          this.teachers = result.body;
        })
      },

    },
    comments: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .courseImg {
    height: 144px;
    width: 227px;
    border-radius: 6px;
    transition: transform 0.5s;
  }

  .courseImg:hover {
    cursor: pointer;
    transform: scale(1.1)
  }

  .courseName {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 15px
  }

  .courseName:hover {
    cursor: pointer;
  }

</style>
