<template>
  <div class="main">
    <div>
      <img class="helloImg" src="@/assets/images/hello.jpeg" alt="" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyMain',
  };
</script>

<style lang="less" scoped>
  .main {
    flex: 1;
    .helloImg {
      max-width: 100%;
      overflow: hidden;
    }
  }
</style>
