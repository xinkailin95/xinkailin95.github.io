<template>
  <el-footer>
    <div class="links">
      <a href="#">LinkedIn</a> | <a href="#">Resume</a> | <a href="#">Email</a>
    </div>
    <div class="copy-right">© Xinkai Lin. All Rights Reserved 2022</div>
  </el-footer>
</template>

<script>
  export default {
    name: 'MyFooter',
  };
</script>

<style lang="less" scoped>
  .el-footer {
    text-align: center;
    height: 100px;
    padding-top: 30px;
    // background-color: #f5f5f5;
    .links {
      margin-bottom: 10px;
      a {
        margin: 0 3px;
      }
    }
    .copy-right {
      font-size: 12px;
      color: grey;
      // background-color: yellow;
    }
  }
</style>
