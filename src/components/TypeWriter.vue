<template>
  <div>
    <!-- <span class="font" v-for="(v, k) in words">{{ v }}</span> -->
    <span class="font" v-html="word"></span>
  </div>
</template>

<script>
  export default {
    name: 'TypeWriter',
    data() {
      return {
        words: [],
        strArr: [],
        idx: 0,
        timer: 0,
        word: '',
      };
    },
    mounted() {
      // this.start();
      this.typing();
    },
    methods: {
      typing() {
        if (this.idx <= this.str.length) {
          // 1. need to deal with </br> case
          // 2. add cursor effect
          this.word =
            this.str.slice(0, this.idx++) +
            '</span>' +
            '<span class="cursor">|</span>';
          this.timer = setTimeout(() => {
            this.typing();
          }, 50);
        }
      },
      start() {
        //将获取到的字符串切割成数组
        this.strArr = this.str.split('');
        //循环将单个的文字 延时追加到words数组中
        for (let i = 0; i < this.strArr.length; i++) {
          let res = setTimeout(this.write(i), i * 150);
        }
      },
      write(i) {
        return () => {
          this.words.push(this.strArr[i]);
        };
      },
    },
    props: ['str'],
  };
</script>

<style lang="less" scoped>
  .font {
    font-size: 24px;
  }
</style>
