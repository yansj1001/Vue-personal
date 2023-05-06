<script setup>
import {ref} from "vue"
//const props = defineProps(["name","img","rate","hot"])
const props = defineProps(["item"])
const bar_width = {
  width:props.item.barWidth
}
console.log(props.item.img);
</script>
<template>
      <div class="tab-list">
        <!-- 图片和排行 -->
        <div class="photo">
          <img :src="props.item.img" alt="梅西">
          <span>{{ props.item.rate }}</span>
        </div>
        <!-- 描述和热度 -->
        <div class="desc">
          <span>{{ props.item.name }}</span>
          <div class="hot-bar">
            <div class="bar">{{ props.item.hot }}热度</div>
          </div>
        </div>
      </div>
</template>
<style scoped>
/* 单个标签的样式 */
.tab-list{
  display: flex;
  margin-bottom: 20px;
}
/* 图片容器的样式 */
.photo{
  position: relative;
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 20px;
  overflow: hidden;
  margin-right: 15px;
}
/* 图片的样式 */
.photo img{
  width: 100px;
  height: 100px;
}
/* 排名的样式 */
.photo span{
  position: absolute;
  top:0;
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
.desc{
  display: flex;
  flex-flow: column;
  flex: auto;
  font-size: 20px;
  color: #fff;
  justify-content: space-around;
}
/* 热度条容器样式 */
.desc .hot-bar{
  border-radius: 15px;
  background-color: #646362;
  overflow: hidden;
}
/* 热度条样式 */
.desc .bar{
  width: v-bind('bar_width.width');
  white-space: nowrap;
  background-image: linear-gradient(90deg,rgb(211, 4, 4) 50%,rgb(65, 1, 1));
  text-indent: 0.5em;
  border-radius: 15px;
}
</style>