<template>
    <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar">
            <router-link active-class="active" tag="li" to="/content">
                <a>数据列表</a>
            </router-link>
            <router-link active-class="active" tag="li" to="/foo">
                <a>demo1</a>
            </router-link>
            <router-link active-class="active" tag="li" to="/bar">
                <a>demo2</a>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {

}
</script>

<style>
/* .router-link-active {
        color: red !important;
    } */
</style>


