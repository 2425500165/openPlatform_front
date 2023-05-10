<template>
  <div class="docMain">
    <el-container>
      <el-aside width="242px">
        <el-menu
          :router="true"
          :default-active="activeIndex"
          :default-openeds="['/docWeiXin']"
        >
          <template v-for="(item, index) in menuList" :key="index">
            <el-sub-menu index="doc" v-if="item.children.length > 0">
              <template #title>
                <span>{{ item.title }}</span>
              </template>
              <el-menu-item-group>
                <template v-for="(menuItem, indey) in item.children" :key="indey">
                  <el-menu-item :index="menuItem.path">{{
                    menuItem.title
                  }}</el-menu-item>
                </template>
              </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item :index="item.path" v-else>
              <span>{{ item.title }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from "vue";

//菜单处理
const menuList = ref([
  {
    title: "接入指南",
    path: "/docMainGuide",
    children: [
      {
        title: "微信",
        path: "/docWeiXin",
      },
      {
        title: "支付宝",
        path: "/docZhifuBao",
      },
    ],
  },
  {
    title: "常见问题",
    path: "/docMainQuestion",
    children: [],
  },
]);
const activeIndex = ref("/docWeiXin");
</script>

<style scoped lang="less">
.docMain {
  margin: 0 auto;
  padding: 50px;
  min-height: calc(100vh - 65px - 60px - 100px);
  width: 70%;

  :deep(.el-menu-item-group__title) {
    display: none !important;
  }

  .el-menu-item.is-active {
    color: #fff;
    background: #060606;
  }

  .el-menu {
    border: 0;
  }
  .el-aside,
  .el-main {
    border: 1px solid var(--el-border-color);
  }
  .el-main {
    border-left: 0;
    padding: 50px;
  }
}
</style>
