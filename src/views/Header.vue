<template>
  <div class="header">
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content ep-bg-purple myName">
          <h1>Xinkai Lin</h1>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content ep-bg-purple myLink">
          <ul>
            <li>
              <router-link class="linkColor" to="/home">Home</router-link>
            </li>
            <li>
              <router-link class="linkColor" to="/about">About</router-link>
            </li>
            <li>
              <router-link class="linkColor" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content ep-bg-purple greeting">
          <p>Welcome to my website, take a look around~</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'MyHeader',
  };
</script>

<style lang="less" scoped>
  .header {
    // position: absolute;
    height: 110px;
    // min-width: 1000px;
    font-size: 20px;
    // background-color: blue;
    .myName {
      margin-top: 10px;
      padding: 10px 0px 0px 20px;
      height: 80px;
      border-right: 1px solid gray;
      // background-color: red;
    }
    .myLink {
      padding-top: 20px;
    }
    .greeting {
      font-size: 30px;
      padding-top: 25px;
    }
    .linkColor {
      color: grey;
      font-weight: bold;
    }
    .active-router {
      color: black;
    }
    .active-router:hover {
      color: black;
    }
    el-row {
      margin-bottom: 20px;
    }
    el-row:last-child {
      margin-bottom: 0;
    }
    .grid-content {
      // border-radius: 4px;
      min-height: 36px;
    }
  }
</style>
