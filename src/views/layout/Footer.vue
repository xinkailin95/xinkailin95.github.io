<template>
  <el-footer class="w">
    <div class="links">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/xinkailin/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/xinkai00007/" target="_blank">
            Instagram
          </a>
        </li>
        <li class="lastLi">
          <a href="mailto: xinkailin1995@gmail.com"> Email</a>
        </li>
      </ul>
    </div>
    <div class="copy-right">© Xinkai Lin. All Rights Reserved {{ date }}</div>
  </el-footer>
</template>

<script>
  export default {
    name: 'MyFooter',
    data() {
      return {
        date: new Date().getFullYear(),
      };
    },
  };
</script>

<style lang="less" scoped>
  .el-footer {
    height: 100px;
    padding-top: 30px;
    text-align: center;
    // background-color: #f5f5f5;
    .links {
      margin-bottom: 10px;
      li {
        display: inline;
        margin: 0 1px;
        &:not(:last-child):after {
          content: '|';
        }
      }
    }
    .copy-right {
      font-size: 12px;
      color: grey;
      // background-color: yellow;
    }
  }
</style>
