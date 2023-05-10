<template>
  <div class="accountMainContent">
    <div class="title">
      <div class="titleName">修改密码</div>
      <!-- <div class="btn">修改</div> -->
    </div>
    <div class="info">
      <el-form
        ref="formRef"
        :model="editFormData"
        status-icon
        :rules="rules"
        label-position="left"
        label-width="125px"
      >
        <el-form-item label="当前密码" prop="password">
          <el-input
            style="width: 300px"
            type="password"
            v-model="editFormData.password"
          />
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input
            style="width: 300px"
            type="password"
            v-model="editFormData.newPassword"
          />
        </el-form-item>
        <el-form-item label="再次输入新密码" prop="newPassword2">
          <el-input
            style="width: 300px"
            type="password"
            v-model="editFormData.newPassword2"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)"
            >修改</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { ElMessage } from 'element-plus';
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import useMainStore from "../../../stores/main";
import useHeaderStore from "../../../stores/header";

const router = useRouter()
const formRef = ref();

const editFormData = ref({
  password: "",
  newPassword: "",
  newPassword2: "",
});

const validateNewPassword = (rule, value, callback) => {
  if (value === editFormData.value.password) {
    callback(new Error("新密码不能与原密码相同!"));
  } else {
    callback();
  }
};
const validateNewPassword2 = (rule, value, callback) => {
  if (value !== editFormData.value.newPassword) {
    callback(new Error("与新密码不一致!"));
  } else {
    callback();
  }
};

const rules = reactive({
  password: [{ required: true, message: "请输入原密码", trigger: "blur" }],
  newPassword: [
    { required: true, message: "请设置新密码", trigger: "blur" },
    { validator: validateNewPassword, trigger: "blur" },
  ],
  newPassword2: [
    { required: true, message: "请确认新密码", trigger: "blur" },
    { validator: validateNewPassword2, trigger: "blur" },
  ],
});


const mainStore = useMainStore()
const { isLogin } = storeToRefs(mainStore)
const headerStore = useHeaderStore()
const { activeIndex } = storeToRefs(headerStore)
const submitForm = () => {
  ElMessage({
        message: '修改成功请重新登录',
        type: 'success',
        duration: 1000
  })
  isLogin.value = false
  activeIndex.value = 0
  router.push('/')
};
</script>

<style scoped lang="less">
.accountMainContent {
  display: flex;
  flex-direction: column;
  padding: 50px;
  width: 100%;
  border-bottom: 1px solid #e6e7ec;
  box-sizing: border-box;

  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e6e7ec;

    .titleName {
      font-family: "Hiragino Sans GB", "Microsoft YaHei", "黑体", Helvetica,
        Arial, Tahoma, sans-serif;
    }
    .btn {
      font-family: "Hiragino Sans GB", "Microsoft YaHei", "黑体", Helvetica,
        Arial, Tahoma, sans-serif;
      color: var(--el-color-primary);
      cursor: pointer;
    }
  }

  .info {
    margin-bottom: 30px;

    .item {
      display: flex;
      align-items: center;
      justify-content: left;
      margin-bottom: 30px;
      font-size: 14px;
      color: #222;
      font-family: "Hiragino Sans GB", "Microsoft YaHei", "黑体", Helvetica,
        Arial, Tahoma, sans-serif;

      .label {
        width: 80px;
      }
    }
  }
}
</style>
