<template>
  <div class="home">
    <!-- <span class="greeting">{{ greeting }}</span> -->
    <!-- <div class="title" v-for="(v, k) in content"> -->
    <type-writer :str="str"></type-writer>
    <!-- </div> -->
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
        content: [],
        str: "Hi, I'm Xinkai Lin.</br> I'm a software developer living in New York.</br>I like video games, play guitar and taking photograph.",
        words: [
          "Hi, I am Xinkai Lin. I'm a Software developer living in New York",
          'Here are some information about me',
          'I like video games, guitar and taking photograph.',
        ],
      };
    },
    mounted() {
      this.setTime();
    },
    methods: {
      setTime() {
        this.words.forEach((v, k) => {
          setTimeout(() => {
            this.content.push(v);
          }, k * 2500);
        });
      },
    },
  };
</script>

<style lang="less" scoped>
  .home {
    height: 700px;
    // text-align: center;
    // background-color: pink;
    .greeting {
      font-size: 24px;
    }
  }
</style>
