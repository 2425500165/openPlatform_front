<template>
 <div class="homeHeader">
    <div class="menu">
      <!-- logo和菜单区域 -->
        <div class="menuLeft">
          <div class="logo" @click="handleClickLogo()">
            支付接入平台
          </div>
          <div class="menuItem">
            <template v-for="(item, index) in menuList" :key="index">
              <div @click="onMenuChange(item, index)" :class="['item', activeIndex === index ? 'action' : '']">{{ item }}</div>
            </template>
          </div>

        </div>
      
        <!-- 登录区域 -->
        <div class="menuRight">
          <div class="notSign" v-if="isLogin == false">
            <el-button class="loginButton" @click="handleLogin">登录</el-button>
          </div>
          <div class="okSign"  v-if="isLogin == true">
            <span class="text" @click="handleInfo">{{ userInfo.username }}</span>
            <el-divider direction="vertical" />
            <span class="text" @click="handleLogout">退出</span>
          </div>

        </div>
    </div>
    <login-modal ref="loginModal" />
 </div>
</template>

<script setup>
import { ref } from 'vue';
import {storeToRefs} from "pinia";
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import LoginModal from './home-header-login-modal.vue';
import useHeaderStore from '../../../stores/header.js';
import useMainStore from '../../../stores/main.js'

// 菜单处理
const router = useRouter()
const headerStore = useHeaderStore()
const { activeIndex } = storeToRefs(headerStore)

const mainStore = useMainStore()
const { isLogin, userInfo } = storeToRefs(mainStore)


const menuList = ref(['首页', '文档中心', '账号中心'])

// 选择菜单方法
const onMenuChange = (item, index) => {

  
  switch(item) {
      case '首页' :
      activeIndex.value = index
      router.push('/')
      break
      case '文档中心' :
      activeIndex.value = index
      router.push('/doc')
      break
      case '账号中心':
      if(isLogin.value) {
        activeIndex.value = index
        router.push('/account')
      } else {
        activeIndex.value = index
        loginModal.value.centerDialogVisible = true
      }
      break
      default: 
          ElMessage({
          message: '敬请期待',
          type: 'info',
          duration: 1000
        })
      break
  }
}

// logo点击方法
const handleClickLogo = () => {
  activeIndex.value = 0
  router.push('/')  
  
  console.log( activeIndex.value)
}


// 登录处理
const loginModal = ref();
const handleLogin = () =>{
  loginModal.value.centerDialogVisible = true
}
// 用户名点击
const handleInfo = () => {
  activeIndex.value = 2
  router.push('/account')  
}

const handleLogout = () => {
  if(activeIndex.value == 2) {
    activeIndex.value = 0
    isLogin.value = false
    router.push('/')
  }
  isLogin.value = false
  userInfo.value = {}
  // console.log('用户信息', userInfo.value)
}


</script>

<style scoped lang="less">
.homeHeader {
  --header-margin: 12%;
  /* height: 70px; */
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    // color: #006EFF;
    box-sizing: border-box;
    background-color: #040404;
    box-shadow: 0 4px 4px rgba(0,0,0,.16);

    .menuLeft {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      margin-left: var(--header-margin);
      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        // width: 100px;
        color: #fff;
        font-size: 20px;
        // background-color: #fff;
      }

      .menuItem {
        display: flex;
  
        .item {
          display: flex;
          justify-content: center;
          width: 96px;
          color: #c1c6c8;
          font-size: 13px;
          font-family: "Hiragino Sans GB","Microsoft YaHei","黑体",Helvetica,Arial,Tahoma,sans-serif;

          &:hover {
            color: #fff;
          }
        }

        .action {
            color: #fff !important;
          }
      }

    }
  
    .menuRight {
      display: flex;
      align-items: center;
      margin-right: var(--header-margin);
      height: 100%;


      .notSign {
        .loginButton {
          padding: 8px 30px;
        }
      }

      .okSign {
        color: #c1c6c8;
          font-size: 13px;
          font-family: "Hiragino Sans GB","Microsoft YaHei","黑体",Helvetica,Arial,Tahoma,sans-serif;

          .text:hover {
            color: #fff;
          }
      }
    }
  }


 
}

</style>
