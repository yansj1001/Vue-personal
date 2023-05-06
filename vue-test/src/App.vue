<script setup>
import { ref, reactive } from "vue"
import PlayerTab from "./components/PlayerTab.vue"
import TeamTab from "./components/TeamTab.vue";
//判断当前位置，0--球员页面，1--球队页面
let current = ref(0)
//创建球员信息对象，代理为响应式数据用于传递给子组件
//梅西
const messi = reactive({
  name:"梅西",
  img:"/images/messi.png",
  rate: 1,
  hot: 433760,
  barWidth:"100%"
})
//C罗
const ronaldo = {
  name:"C罗",
  img:"/images/ronaldo.png",
  rate:2,
  hot:233967,
  barWidth:"60%"
}
//内马尔
const neymar = {
  name:"内马尔",
  img:"/images/neymar.png",
  rate:3,
  hot:222343,
  barWidth:"50%"
}
//巴西
const bx = {
  name:"巴西",
  img: "/images/巴西.jpg",
  rate: 1,
  hot: 422235,
  barWidth: "100%"
}
//荷兰
const hl = {
  name: "荷兰",
  img:"/images/荷兰.jpg",
  rate:2,
  hot:322561,
  barWidth:"70%"
}
//法国
const french = {
  name: "法国",
  img: "/images/法国.jpg",
  rate:3,
  hot: 222331,
  barWidth: "40%"
}
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
      <!-- 单个球员或者国家区域 -->
      <!-- 热门球员页面 -->
      <div v-show="current===0">    
        <PlayerTab :item="messi"></PlayerTab>
        <PlayerTab :item="ronaldo"></PlayerTab>
        <PlayerTab :item="neymar"></PlayerTab>
      </div>
      <!-- 热门球队页面 -->
      <div v-show="current === 1">
        <TeamTab :item="bx"></TeamTab>
        <TeamTab :item="hl"></TeamTab>
        <TeamTab :item="french"></TeamTab>
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