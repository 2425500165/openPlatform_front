<template>
  <RouterView />
</template>



<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<style>
/* ::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
} */




/* 滚动条 */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 2px;
}
::-webkit-scrollbar-thumb {
  background: rgb(205, 206, 206);

  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #333;
}
::-webkit-scrollbar-corner {
  background: #fff;
}
</style>
