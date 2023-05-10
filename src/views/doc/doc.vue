<template>
  <div class="doc">
    
    <el-container>
      <el-header>
        <home-header />
      </el-header>
      <el-main>
        <doc-main />
      </el-main>
      <el-footer>
        <home-footer />
      </el-footer>
    </el-container>

  </div>
</template>

<script setup>
import HomeHeader from '../home/components/home-header.vue';
import HomeFooter from '../home/components/home-footer.vue';
import DocMain from './components/doc-main.vue';
</script>

<style scoped lang="less">

 .doc {
  
  .el-header,.el-main,.el-footer {
    // height: 70px;
    padding: 0;
  }
 }

</style>
