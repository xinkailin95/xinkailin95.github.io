<template>
  <el-header class="clearfix">
    <div class="my-name">
      <h1><router-link to="/">Xinkai Lin</router-link></h1>
    </div>
    <div class="my-link">
      <ul>
        <li><router-link class="link-color" to="/home">Home</router-link></li>
        <li>
          <router-link class="link-color" to="/about">About</router-link>
        </li>
        <li>
          <router-link class="link-color" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </el-header>
</template>

<script>
  export default {
    name: 'MyHeader',
  };
</script>

<style lang="less" scoped>
  .el-header {
    margin: 0 auto;
    height: 130px;
    font-size: 20px;
    background-color: #fcfcfc;
    text-align: center;
    .my-name {
      line-height: 100px;
    }
    .my-link {
      height: 25px;
      ul li {
        display: inline-block;
        padding: 0 20px;
      }
    }
    .link-color {
      color: grey;
      font-weight: bold;
    }
    .link-color:hover {
      color: #333;
    }
    .active-router {
      color: #333;
    }
  }
</style>
