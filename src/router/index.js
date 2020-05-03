import Vue from 'vue'
import Router from 'vue-router'
import login from "../components/login";
import index from "../components/index";
import search from "../components/search";
import register from "../components/register";
import test from "../components/test";
import upload from "../components/upload";
import personal from "../components/personal";
import chapters from "../components/chapters";
import play from "../components/play";
import demo from "../components/demo";
import editor from "../components/editor";
import admin from "../components/admin";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        keepAlive: true
      }
    },
    {
      name: 'login',
      path: '/login',
      component: login,
      meta: {
        keepAlive: false
      }
    },
    {
      name: 'register',
      path: '/register',
      component: register,
      meta: {
        keepAlive: true
      }
    },
    {
      name: 'search',
      path: '/search',
      component: search,
      meta: {
        keepAlive: true
      }
    },
    {
      name: 'test',
      path: '/test',
      component: test,
      meta: {
        keepAlive: true
      }
    },
    {
      name: 'personal',
      path: '/personal',
      component: personal,
      meta: {
        keepAlive: true
      }
    },
    {
      name:'chapters',
      path:'/chapters',
      component: chapters,
      meta:{
        keepAlive: true
      }
    },
    {
      name:'play',
      path:'/play',
      component: play,
      meta:{
        keepAlive: true
      }
    },
    {
      name:'upload',
      path:'/upload',
      component: upload,
      meta:{
        keepAlive: true
      }
    },
    {
      name:'demo',
      path:'/demo',
      component: demo,
      meta:{
        keepAlive: true
      }
    },
    {
      name:'',
      path:'/admin',
      component: admin,
      meta:{
        keepAlive: false
      }
    },
  ]
})
