import Vue from 'vue'
import App from './App'

//引入样式文件
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/css/index.css"

Vue.config.productionTip = false

import router from "./router"
//node 中自定义模块的加载规则：

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
