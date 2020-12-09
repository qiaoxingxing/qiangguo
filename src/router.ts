import Vue from 'vue';
import Router from 'vue-router';
import qiangguo from "@/views/qiangguo/qiangguo.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "qiangguo",
      component: qiangguo
    }]
});
