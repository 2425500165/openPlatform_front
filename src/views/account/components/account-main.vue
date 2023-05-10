<template>
<div class="accountMain">
  <el-container>
      <el-aside width="242px">
        <el-menu
        :router="true"
        :default-active="activeIndex"
        :default-openeds="['/accountMainUserInfo']"
      >
      <template v-for="(item, index) in menuList" :key="index">
        <el-menu-item :index="item.path">
          <span>{{ item.title }}</span>
        </el-menu-item>
      </template>
      
      </el-menu>
      </el-aside>
      <el-main>
          <!-- <account-main-content /> -->
          <router-view></router-view>
      </el-main>
    </el-container>
</div>
</template>

<script setup>
import { ref } from 'vue'
// import AccountMainContent from './account-main-content.vue';

//菜单处理
const menuList = ref([
  {
    title: '基本资料',
    path: '/accountMainUserInfo'
  },
  {
    title: '修改密码',
    path: '/accountMainEditPass'
  }
])
const activeIndex = ref('/accountMainUserInfo')
const handleSelecat = (e) => {
  console.log(e)
}

</script>

<style scoped lang="less">
.accountMain {
  margin: 0 auto;
  padding: 50px;
  min-height: calc(100vh - 65px - 60px - 100px);
  width: 70%;

  .el-menu-item.is-active {
    color: #fff;
    background: #060606;
  } 

  .el-menu {
    border: 0;
  }
  .el-aside, .el-main{
    border: 1px solid var(--el-border-color);
  }
  .el-main {
    border-left: 0;
    padding: 0
  }

}

</style>
