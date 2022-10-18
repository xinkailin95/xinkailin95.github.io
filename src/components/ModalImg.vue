<template>
  <!-- The Modal -->
  <div id="myModal" class="modal" :style="imgStyle">
    <span class="close" @click="hideImg">&times;</span>
    <img class="modal-content" :src="modImg" id="img01" />
    <div id="caption" v-html="captions"></div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'ModelImg',
    data() {
      return {
        modImg: '',
        captions: '',
        imgStyle: {
          display: 'none',
        },
      };
    },
    computed: {
      ...mapState(['isPlay', 'imgSrc', 'imgAlt']),
    },
    methods: {
      ...mapMutations(['setPlay', 'setImgUrl', 'setImgAlt']),
      showImg() {
        this.imgStyle.display = 'block';
        this.modImg = this.imgSrc;
        this.captions = this.imgAlt;
      },
      hideImg() {
        this.imgStyle.display = 'none';
        this.setPlay(true);
      },
    },
  };
</script>

<style lang="less" scoped>
  /* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 999; /* Sit on top */
    padding-top: 150px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
  }

  /* Modal Content (image) */
  .modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 1000px;
    max-height: 650px;
  }

  /* Caption of Modal Image */
  #caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 1000px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
  }

  /* Add Animation */
  .modal-content,
  #caption {
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
  }

  @-webkit-keyframes zoom {
    from {
      -webkit-transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
    }
  }

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  /* The Close Button */
  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }

  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }

  /* 100% Image Width on Smaller Screens */
  @media only screen and (max-width: 700px) {
    .modal-content {
      width: 100%;
    }
  }
</style>
