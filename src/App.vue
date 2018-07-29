<template>
  <div>
    <Head />
    <div class="container-fluid">
      <div class="row">
        <Leftside />
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//引入head.vue组件
import Head from "./components/head.vue";
//引入leftside.vue组件
import Leftside from "./components/leftside.vue";


export default {
  data() {
    return {
    }
  },
  components: {
    Head,
    Leftside
  }
}
</script>
<style>

</style>
