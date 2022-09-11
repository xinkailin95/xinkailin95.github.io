<template>
  <div class="home">
    <!-- header on top -->
    <el-affix :offset="0">
      <my-header></my-header>
    </el-affix>
    <my-main></my-main>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from './Header.vue';
  import MyMain from './Main.vue';
  import MyFooter from './Footer.vue';

  export default {
    name: 'MyHome',
    components: {
      MyHeader,
      MyMain,
      MyFooter,
    },
  };
</script>

<style lang="less" scoped>
  .home {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
