<template>
  <el-header class="w clearfix">
    <div class="my-name">
      <h1><router-link class="name" to="/">Xinkai Lin</router-link></h1>
    </div>
    <div class="my-link">
      <ul>
        <li><router-link class="link-color" to="/home">Home</router-link></li>
        <li>
          <router-link class="link-color" to="/photo">Photo</router-link>
        </li>
        <li>
          <router-link class="link-color" to="/games">Games</router-link>
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
  @blue-green: #4dc0b5;

  .el-header {
    height: 130px;
    font-size: 20px;
    // background-color: #fcfcfc;
    margin-bottom: 20px;
    text-align: center;
    .my-name {
      line-height: 100px;
      .name {
        border-bottom: none;
      }
    }
    .my-link {
      height: 25px;
      ul {
        li {
          display: inline-block;
          padding: 0 20px;
        }
      }
    }
    .link-color {
      color: grey;
      font-weight: bold;
    }
    .link-color:hover {
      color: #2d3748;
      border-bottom: 2px solid;
      border-color: @blue-green;
    }
    .active-router {
      color: #2d3748;
      border-bottom: 2px solid;
      border-color: @blue-green;
    }
  }
</style>
