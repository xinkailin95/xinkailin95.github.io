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
        content: '',
        blink: true,
      };
    },
    props: {
      contents: Array,
    },
    mounted() {
      this.setBlink();
      this.start();
    },
    methods: {
      start() {
        this.content = this.contents.reduce(
          (prev, curr) => prev + ' ' + curr,
          ''
        );

        this.timer = setTimeout(() => {
          this.typing();
        }, 2400);
      },
      typing() {
        if (this.index <= this.content.length) {
          if (this.content.slice(this.index, this.index + 1) === '<') {
            let close = this.content.slice(this.index).indexOf('>');
            // let tag = this.content.slice(this.index, this.index + close + 1);
            this.index += close;
          }
          this.words = this.content.slice(0, this.index++);
          this.timer = setTimeout(() => {
            this.typing();
          }, 100);
        }
      },
      setBlink() {
        this.blink = !this.blink;
        setTimeout(() => {
          this.setBlink();
        }, 500);
      },
      showAll() {
        clearTimeout(this.timer);
        this.words = this.content;
      },
    },
  };
</script>

<style lang="less" scoped>
  .font {
    font-size: 1.5rem;
  }
</style>
