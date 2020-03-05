import Vue from 'vue'
import Router from 'vue-router'
import banner from "../components/banner";
import recommend from "../components/recommend";
import course from "../components/course";
import footer from "../components/footer";
import login from "../components/login";
import index from "../components/index";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'index',
      component: index
//       components: {
// banner
//
//         //     banner,
//         // recommend,
//         // course,
//         // footer
//       }
    },
    {
      name:'login',
      path: '/login',
      component: login
    }
  ]
})
