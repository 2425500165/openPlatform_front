<template>
  <div class="homeMain">
    <div class="name">支付接入平台</div>
    <div class="info">开放 · 交流 · 共进 · 创造</div>
    <div class="btn" @click="handleBtn">查看文档</div>
    <login-modal ref="loginModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {storeToRefs} from "pinia";
import { ElMessage } from 'element-plus';
import useMainStore from '../../../stores/main';
import useHeaderStore from '../../../stores/header';
import LoginModal from './home-header-login-modal.vue';

// 按钮处理
const router = useRouter()

const loginModal = ref()

const mainStore = useMainStore()
const { isLogin } = storeToRefs(mainStore)

const headerStore = useHeaderStore()
const { activeIndex } = storeToRefs(headerStore)

const handleBtn = () => {
  activeIndex.value = 1
    router.push('/doc')
}
</script>

<style scoped lang="less">
.homeMain{
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 65px - 60px);
  // justify-content: center;
  align-items: center;
  // height: 568px;
  width: 100%;
  background: transparent url("src/assets/image/mianbg.png") no-repeat center top;
  // background-size: 100% 100%;
  // background-size: contain;
    background-size: cover;

  .name {
    font-size: 75px;
    color: #fff;
    margin-top: 11%;
    margin-bottom: 60px;
    letter-spacing: 14px;
    padding-left: 14px;
  }

  .info {
    font-size: 50px;
    font-weight: 300;
    color: #fff;
  }

  .btn {
    margin-top: 60px;
    height: 45px;
    line-height: 45px;
    padding: 0 30px;
    font-size: 24px;
    color: #fff;
    border-radius: 6px;
    border: 1px solid #fff;

    &:hover {
      text-decoration: underline;
    }
  }

}
</style>
