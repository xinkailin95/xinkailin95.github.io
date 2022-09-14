<template>
  <el-header class="header clearfix">
    <div class="myName">
      <h1>Xinkai Lin</h1>
    </div>
    <div class="myLink">
      <ul>
        <li><router-link class="linkColor" to="/home">Home</router-link></li>
        <li>
          <router-link class="linkColor" to="/about">About</router-link>
        </li>
        <li>
          <router-link class="linkColor" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
    <div class="greeting">
      <h2>Welcome to my website, take a look around~</h2>
    </div>
  </el-header>
</template>

<script>
  export default {
    name: 'MyHeader',
  };
</script>

<style lang="less" scoped>
  .header {
    min-width: 1500px;
    height: 120px;
    font-size: 20px;
    background-color: #fcfcfc;
    .myName {
      float: left;
      margin: 10px 10px 10px 0;
      width: 200px;
      line-height: 100px;
      border-right: 1px solid #edeef0;
      // background-color: red;
    }
    .myLink {
      float: left;
      padding-top: 20px;
    }
    .greeting {
      float: left;
      margin-left: 255px;
      // width: 544px;
      line-height: 120px;
      h2 {
        font-weight: 400;
      }
    }
    .linkColor {
      color: grey;
      font-weight: bold;
    }
    .linkColor:hover {
      color: #333;
    }
    .active-router {
      color: #333;
    }
  }
</style>
