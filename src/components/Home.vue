<template>
  <div class="main">
    <img class="helloImg" src="@/assets/images/hello.jpeg" alt="" />
  </div>
</template>

<script>
  export default {
    name: 'MyGreeting',
  };
</script>

<style lang="less" scoped>
  .main {
    flex: 1;
    text-align: center;
    .helloImg {
      max-width: 100%;
      overflow: hidden;
    }
  }
</style>
