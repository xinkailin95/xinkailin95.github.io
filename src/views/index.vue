<template>
  <div class="index">
    <!-- header on top -->
    <!-- <el-affix :offset="0"> -->
    <my-header></my-header>
    <!-- </el-affix> -->
    <my-main></my-main>
    <my-footer></my-footer>
    <!-- https://github.com/lindelof/particles-bg-vue -->
    <!-- <particles-bg
      type="custom"
      :config="config"
      :canvas="{ backgroundColor: '#fff' }"
      :bg="true"
    /> -->
    <particles-bg
      type="cobweb"
      :canvas="{ backgroundColor: '#fff' }"
      :bg="true"
    />
  </div>
</template>

<script>
  import MyHeader from '@/views/layout/Header.vue';
  import MyMain from '@/views/layout/Main.vue';
  import MyFooter from '@/views/layout/Footer.vue';
  import { ParticlesBg } from 'particles-bg-vue';
  import icon from '@/assets/images/icon.js';

  export default {
    name: 'MyIndex',
    components: {
      MyHeader,
      MyMain,
      MyFooter,
      ParticlesBg,
    },
    data() {
      return {
        config: {
          num: [4, 7],
          rps: 0.1,
          radius: [5, 40],
          life: [1.5, 3],
          v: [2, 3],
          tha: [-30, 30],
          body: icon,
          alpha: [0.6, 0],
          scale: [0.1, 0.4],
          position: 'all',
          cross: 'dead',
          random: 15,
        },
      };
    },
  };
</script>

<style lang="less" scoped></style>
