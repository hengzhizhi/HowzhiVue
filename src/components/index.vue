<template>
  <div class="index container ">

    <v-banner></v-banner>
    <div class="panel panel-default">

      <div class="panel-body ">
        <v-recommend></v-recommend>


        <v-course></v-course>

      </div>
    </div>
  </div>

</template>

<script>
  import banner from "./banner";
  import recommend from "./recommend.vue";
  import course from "./course.vue";
  import footer from "./footer.vue";

  export default {
    data() {
      return {}
    },
    components: {
      "v-banner": banner,
      "v-recommend": recommend,
      "v-course": course,
      "v-footer": footer
    }
  };


</script>

<style>


  #app {
  }
</style>
