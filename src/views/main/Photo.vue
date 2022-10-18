<template>
  <div class="photo">
    <el-carousel
      class="banner"
      :autoplay="isPlay"
      :interval="4000"
      type="card"
      height="400px"
    >
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <img
          class="myImg"
          :src="imgUrl(item.url)"
          :alt="item.alt"
          style="height: 400px; width: 100%"
          @click="imgClick(imgUrl(item.url), item.alt)"
        />
      </el-carousel-item>
    </el-carousel>
    <modal-img ref="modalRef"></modal-img>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import ModalImg from '@/components/ModalImg.vue';

  export default {
    name: 'MyPhoto',
    components: {
      ModalImg,
    },
    computed: {
      ...mapState(['imgList', 'isPlay']),
    },
    methods: {
      ...mapMutations(['setPlay', 'setImgUrl', 'setImgAlt']),
      imgUrl(url) {
        return require(`@/assets/images/${url}`);
      },
      imgClick(url, alt) {
        this.setPlay(false);
        this.setImgUrl(url);
        this.setImgAlt(alt);
        this.$refs.modalRef.showImg();
      },
    },
    mounted() {
      this.setPlay(true);
    },
  };
</script>

<style lang="less" scoped>
  .photo {
    min-height: 600px;
    .banner {
      padding-top: 100px;
      .myImg {
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
      }
    }
  }
</style>
