<template>
  <el-main><router-view></router-view></el-main>
</template>

<script>
  export default {
    name: 'MyMain',
  };
</script>

<style lang="less" scoped>
  .el-main {
    width: 1200px;
    margin: 0 auto; /*this margin for the container */
  }
</style>
