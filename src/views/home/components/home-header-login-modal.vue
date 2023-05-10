<template>
  <el-dialog
    class="homeHeaderLoginModal"
    v-model="centerDialogVisible"
    title="登录"
    width="450px"
    center
  >
    <template #header="{ close, titleId, titleClass }">
      <div class="customHeader">登录</div>
    </template>
    <div class="loginFrom">
      <el-form
        ref="loginForm"
        :model="loginFormData"
        status-icon
        :rules="rules"
      >
        <el-form-item label="账号:" prop="username">
          <el-input v-model="loginFormData.username" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input
            v-model="loginFormData.password"
            type="password"
            placeholder="请输入密码"
          />
        </el-form-item>
        <div class="forgetPass">
          <el-checkbox class="loginCheck" v-model="loginFormData.isOk">接受用户协议</el-checkbox>
          <span class="text">忘记密码</span>
        </div>
        <el-form-item>
          <el-button class="btn" type="primary" @click="handleLogin(loginForm)">登录</el-button>
          <el-button class="btn" style="margin-left: 30px" @click="handleCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-dialog>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { ElMessage } from 'element-plus';
import useMainStore from '../../../stores/main.js';
import useHeaderStore from "../../../stores/header";

// 弹窗状态
const centerDialogVisible = ref(false);
const loginForm = ref()
const loginFormData = ref({
  username: "admin",
  password: "123456",
  isOk: true
});
// 表单规则
const rules = reactive({
  username: [ 
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 2,max: 7,message: '长度在 2 到 7 个字符'}
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { pattern: /^(\w){5,25}$/, message: '只能输入5-25个字母、数字、下划线'},
    { min: 5,max: 25,message: '长度在 5 到 25个字符'}
  ]
})

const router = useRouter()
const route = useRoute()

const mainStore = useMainStore()
const { isLogin, userInfo } = storeToRefs(mainStore)

const headerStore = useHeaderStore()
const { activeIndex } = storeToRefs(headerStore)


const menuList = ref([
  {
    title: '首页',
    path: '/'
  },
  {
    title: '文档中心',
    path: '/doc'
  },
  {
    title: '账号中心',
    path: '/account'
  }
])

// 弹窗按钮事件
const handleLogin = async (formEl) => {
  if(!formEl) return 
  await formEl.validate((valid) => {
    if (valid) {
        ElMessage({
        message: '登陆成功',
        type: 'success',
        duration: 1000
      })
      isLogin.value = true
      // 跟useheaderStore 里的索引对比menuList 得出当前在那个页面点击的登录登录成功直接跳转
      userInfo.value = loginFormData.value
      // console.log('用户信息',userInfo.value)
      router.push(menuList.value[activeIndex.value].path)
      centerDialogVisible.value = false


    } else {
      ElMessage({
        message: '请补全账号或密码',
        type: 'warning',
        duration: 1000
      })
    }
  })
}
// 取消
const handleCancel = () => {
  if (route.path == '/docMainGuide') {
    activeIndex.value = 1
  }
  centerDialogVisible.value = false
  userInfo.value = {}
  // console.log('用户信息',userInfo.value)
}

defineExpose({
  centerDialogVisible,
});
</script>

<style lang="less">
.homeHeaderLoginModal {
  .el-dialog__header {
    padding: 0;
    margin: 0;
  }

  .el-form-item__content {
    justify-content: center !important;
  }

  .customHeader {
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: 100%;
    height: 50px;
    color: #333;
    font-size: 18px;
    font-weight: 400;
    background-color: #f4f7f9;
    box-sizing: border-box;
  }

  .loginFrom {
    padding: 0 10px;
    // height: 200px;

    .btn {
      padding: 8px 50px;
    }

    .forgetPass {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
      width: 100%;
      color: var(--el-color-primary);
      // .text {
      //   text-decoration:underline;
      // }
      &:hover {
        color: #3292ff;
        cursor: pointer;
      }
    }
  }
}
</style>
