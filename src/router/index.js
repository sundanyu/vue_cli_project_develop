import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

import Content from "@/components/content.vue";
import Main from "@/components/main.vue";


export default new VueRouter({
  routes: [
    { path: "/foo" , component: {
          template: "<div>demo1</div>"
        }
    },
    { path: "/bar" , component: {
          template: "<div>demo2</div>"
        }
    },
    { path: "/" , component: Main},
    { path: "/content", component: Content}
  ]
});