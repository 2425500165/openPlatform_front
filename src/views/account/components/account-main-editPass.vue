<template>
  <div class="accountMainContent">
      <div class="title">
      <div class="titleName">
        修改密码
      </div>
      <!-- <div class="btn">修改</div> -->
    </div>
    <div class="info">
      <div class="item"><div class="label">主体类型</div> <span>{{ '-' }}</span></div>
      <div class="item"><div class="label">主体名称</div> <span>{{ '互联网' }}</span></div>
      <div class="item"><div class="label">注册地</div> <span>{{ '中国' }}</span></div>
    </div>
  </div>
</template>

<script setup>

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
      font-family: "Hiragino Sans GB","Microsoft YaHei","黑体",Helvetica,Arial,Tahoma,sans-serif;
    }
    .btn {
      font-family: "Hiragino Sans GB","Microsoft YaHei","黑体",Helvetica,Arial,Tahoma,sans-serif;
      color: var(--el-color-primary);
      cursor:pointer;
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
      font-family: "Hiragino Sans GB","Microsoft YaHei","黑体",Helvetica,Arial,Tahoma,sans-serif;

      .label{
        width: 80px;
      }

    }
  }
}

</style>
