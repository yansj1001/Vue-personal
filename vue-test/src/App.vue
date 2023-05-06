<script setup>
import { ref, reactive } from "vue"
//import MyTab from "./components/Mytab.vue"
let current = ref(0)
const messi = reactive({
  src: "/iamges/messi.png",
  rank: 1,
  name: "梅西",
  hot: "433323",
  hot_bar: "80%"
})
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
        <div class="tab-list">
          <!-- 图片和排行 -->
          <div class="photo">
            <img src="/images/messi.png" alt="梅西">
            <span>1</span>
          </div>
          <!-- 描述和热度 -->
          <div class="desc">
            <span>梅西</span>
            <div class="hot-bar">
              <div class="bar">483323热度</div>
            </div>
          </div>
        </div>
        <!-- <MyTab :item="messi"></MyTab> -->

      </div>
      <!-- 热门球队页面 -->
      <div v-show="current === 1">
        <div class="tab-list">
          <!-- 图片和排行 -->
          <div class="photo">
            <img src="/images/巴西.jpg" alt="巴西">
            <span>1</span>
          </div>
          <!-- 描述和热度 -->
          <div class="desc">
            <span>巴西</span>
            <div class="hot-bar">
              <div class="bar">383323热度</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* 主容器样式 */
.container {
  width: 400px;
  height: 400px;
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

/* 单个标签的样式 */
.tab-list {
  display: flex;
  margin-bottom: 20px;
}

/* 图片容器的样式 */
.photo {
  position: relative;
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 20px;
  overflow: hidden;
  margin-right: 15px;
}

/* 图片的样式 */
.photo img {
  width: 100px;
  height: 100px;
}

/* 排名的样式 */
.photo span {
  position: absolute;
  top: 0;
  left: 0;
  width: 35px;
  height: 35px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  border-bottom-right-radius: 10px;
  background-color: #fa7822;
}

/* 名字及热度的样式 */
.desc {
  display: flex;
  flex-flow: column;
  flex: auto;
  font-size: 20px;
  color: #fff;
  justify-content: space-around;
}

/* 热度条容器样式 */
.desc .hot-bar {
  border-radius: 15px;
  background-color: #646362;
  overflow: hidden;
}

/* 热度条样式 */
.desc .bar {
  background-image: linear-gradient(90deg, rgb(211, 4, 4) 50%, rgb(65, 1, 1));
  text-indent: 0.5em;
  border-radius: 15px;
}</style>