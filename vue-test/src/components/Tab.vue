<script setup>
import {ref} from "vue"
//判断当前位置，0--球员页面，1--球队页面
let current = ref(0)
</script>
<template>
     <!-- 主容器 -->
  <div class="container">
    <!-- 头部 -->
    <div class="header">
      <!-- 两个按钮 -->
      <div @click="current = 0" class="button" :class="{ active: current === 0 }">热门球员</div>
      <div @click="current = 1" class="button" :class="{ active: current === 1 }">热门球队</div>
    </div>
    <!-- 主体 -->
    <div class="main">
      <!-- 热门球员页面 -->
      <div v-show="current===0">    
        <!-- <TabList :item="Players" :maxHot="palyerMaxHot"></TabList> -->
        <slot name="0"></slot>
      </div>
      <!-- 热门球队页面 -->
      <div v-show="current === 1">
        <!-- <TabList :item="Teams" :maxHot="teamMaxHot"></TabList> -->
        <slot name="1"></slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* 主容器样式 */
.container {
  width: 400px;
  height: 430px;
  box-sizing: border-box;
  background-color: rgb(52, 52, 230);
  padding: 20px;
}
/* 头部样式 */
.header {
  display: flex;
  height: 30px;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

/* 按钮样式 */
.header .button {
  text-align: center;
  width: 50%;
  height: 100%;
  line-height: 30px;
  cursor: pointer;
  transition: .6s;
}

/* 鼠标滑过按钮盒子样式 */
.header .button:not(.active):hover {
  color: rgb(253, 70, 70);
}

/* 选中状态下的样式 */
.active {
  background-color: rgb(253, 70, 70);
  color: #fff;
}
</style>