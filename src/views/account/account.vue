<template>
  <div class="account">
    <el-container>
      <el-header>
        <home-header />
      </el-header>
      <el-main>
        <account-main />
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
import AccountMain from './components/account-main.vue';


</script>

<style scoped lang="less">

 .account {
  
  .el-header,.el-main,.el-footer {
    // height: 70px;
    padding: 0;
  }
 }

</style>
