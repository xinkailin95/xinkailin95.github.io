<template>
  <div class="home" @dblclick="showAllContents">
    <type-writer class="info" ref="clickRef" :contents="contents"></type-writer>
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
          '<br/><br/>',
          "I'm a <span class='underline'>dev</span>eloper from New York.",
          '<br/>',
          "I like <span class='underline'>g</span>ames, <span class='underline'>g</span>uitar, <span class='underline'>tra</span>vel and <span class='underline'>photo</span>graph.",
        ],
      };
    },
    methods: {
      showAllContents() {
        this.$refs.clickRef.showAll();
      },
    },
  };
</script>

<style lang="less" scoped>
  .home {
    min-height: 600px;
    // text-align: center;
    // background-color: rgb(202, 238, 202);
    .info {
      padding: 100px 215px;
    }
  }
</style>
