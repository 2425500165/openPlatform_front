<template>
  <div class="home">
    <el-container>
      <el-header>
        <home-header />
      </el-header>
      <el-main>
        <home-main />
      </el-main>
      <el-footer>
        <home-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import HomeHeader from './components/home-header.vue';
import HomeMain from './components/home-main.vue';
import HomeFooter from './components/home-footer.vue';
</script>

<style scoped lang="less">

 .home {
  
  .el-header,.el-main,.el-footer {
    // height: 70px;
    padding: 0;
  }
 }

</style>
