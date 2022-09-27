<template>
  <div class="index">
    <!-- header on top -->
    <el-affix :offset="0">
      <my-header></my-header>
    </el-affix>
    <my-main></my-main>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from '@/views/layout/Header.vue';
  import MyMain from '@/views/layout/Main.vue';
  import MyFooter from '@/views/layout/Footer.vue';

  export default {
    name: 'MyIndex',
    components: {
      MyHeader,
      MyMain,
      MyFooter,
    },
  };
</script>

<style lang="less" scoped></style>
