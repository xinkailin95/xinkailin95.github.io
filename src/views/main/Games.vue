<template>
  <div class="games">
    <ul class="content" v-for="item in gameList" :key="item.id">
      <li>
        <div class="img">
          <a :href="item.link" target="_blank">
            <img :src="imgUrl(item.url)" :alt="item.alt" />
          </a>
        </div>
        <div class="info">
          <a :href="item.link" target="_blank">
            <div class="desc">{{ item.title }}</div>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'MyGames',
    computed: {
      ...mapState(['gameList']),
    },
    methods: {
      imgUrl(url) {
        return require(`@/assets/images/${url}`);
      },
    },
  };
</script>

<style lang="less" scoped>
  .games {
    min-height: 600px;
    padding-top: 50px;
    padding-left: 50px;
    .content {
      li {
        width: 275px;
        height: 240px;
        float: left;
        box-sizing: border-box;
        border: 1px solid #eee;
        margin-bottom: 20px;
        margin-right: 20px;
        &:hover {
          box-shadow: 0 0 5px rgb(0 0 0 / 20%);
        }
      }
      .img {
        width: 274px;
        height: 185px;
        overflow: hidden;
        img {
          width: 275px;
          height: 185px;
        }
        .animate {
          transition: all 1.5s;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
      .info {
        text-align: center;
        .desc {
          margin-top: 14px;
          height: 44px;
          font-size: 16px;
          overflow: hidden;
          color: #333;
        }
      }
    }
  }
</style>
