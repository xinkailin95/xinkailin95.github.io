<template>
  <div class="footer">
    <div class="copy-right">
      <span>© Xinkai Lin. All Rights Reserved 2022</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyFooter',
  };
</script>

<style lang="less" scoped>
  .footer {
    height: 120px;
    text-align: center;
    font-size: 13px;
    color: grey;
    background-color: whitesmoke;
    .copy-right {
      position: fixed;
      padding: 50px 0px 0px 100px;
      //   background-color: red;
    }
  }
</style>
