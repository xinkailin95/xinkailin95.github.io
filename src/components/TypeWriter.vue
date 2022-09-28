<template>
  <div class="font">
    <span v-html="words"></span>
    <span v-show="blink">|</span>
  </div>
</template>

<script>
  export default {
    name: 'TypeWriter',
    data() {
      return {
        index: 0,
        timer: 0,
        words: '',
        blink: true,
      };
    },
    props: {
      contents: Array,
    },
    mounted() {
      this.setBlink();
      setTimeout(() => {
        this.start();
      }, 2400);
    },
    methods: {
      start() {
        let word = this.contents.reduce((prev, curr) => prev + ' ' + curr, '');
        this.typing(word);
      },
      typing(word) {
        if (this.index <= word.length) {
          if (word.slice(this.index, this.index + 1) === '<') {
            let close = word.slice(this.index).indexOf('>');
            // let tag = word.slice(this.index, this.index + close + 1);
            this.index += close;
          }
          this.words = word.slice(0, this.index++);
          this.timer = setTimeout(() => {
            this.typing(word);
          }, 100);
        }
      },
      setBlink() {
        this.blink = !this.blink;
        setTimeout(() => {
          this.setBlink();
        }, 500);
      },
      sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      },
    },
  };
</script>

<style lang="less" scoped>
  .font {
    font-size: 1.5rem;
  }
</style>
