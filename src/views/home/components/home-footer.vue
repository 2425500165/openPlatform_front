<template>
<div class="homeFooter">
  <div class="footer">
    <div class="left">© 1998 - 2023 Huaruan All Right Reserved.</div>
    <div class="right">
      <template v-for="(item, index) in rightData" :key="index"> 
        <div class="item">{{ item }}</div>
      </template>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
const rightData = ref(['侵权投诉', '开发者协议', '运营规范','联系我们','问题反馈'])
</script>

<style scoped lang="less">
.homeFooter {

  .footer {

    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    height: 63px;
    border-top: 1px solid #e6e6e6;

    .left {
      font-family: "Hiragino Sans GB","Microsoft YaHei","黑体",Helvetica,Arial,Tahoma,sans-serif;
      font-size: 13px;
      color: #9e9f9f;
    }

    .right {
      display: flex;
      justify-content: space-between;
      font-family: "Hiragino Sans GB","Microsoft YaHei","黑体",Helvetica,Arial,Tahoma,sans-serif;
      font-size: 13px;
      color: #9e9f9f;

      .item{
        margin-left: 8px;
        padding-right: 8px;
        border-right: 1px solid #9e9f9f;

        &:last-child{
          border: 0;
        }
      }
    }
  }
}
</style>
