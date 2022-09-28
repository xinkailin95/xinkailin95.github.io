<template>
  <div class="home">
    <type-writer class="info" :contents="contents"></type-writer>
  </div>
</template>

<script>
  import TypeWriter from '@/components/TypeWriter.vue';

  export default {
    name: 'MyHome',
    components: {
      TypeWriter,
    },
    data() {
      return {
        contents: [
          "<span class='underline'>He</span>llo.",
          '</br></br>',
          "I'm a <span class='underline'>dev</span>eloper from New York.",
          '</br>',
          "I like <span class='underline'>g</span>ames, <span class='underline'>g</span>uitar, <span class='underline'>tra</span>vel and <span class='underline'>photo</span>graph.",
        ],
      };
    },
  };
</script>

<style lang="less" scoped>
  .home {
    min-height: 555px;
    // text-align: center;
    background-color: rgb(202, 238, 202);
    .info {
      padding: 50px 100px;
    }
  }
</style>
