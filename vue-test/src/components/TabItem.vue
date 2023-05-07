<script setup>
import Photo from "./photo.vue";
import HotBar from "./hotBar.vue";
const props = defineProps(["item","maxHot"])
const width = props.item.hot / props.maxHot * 100 + "%"
</script>
<template>
      <div class="tab-item">
        <!-- 图片和排行 -->
        <Photo :img="props.item.img" :rate="props.item.rate"></Photo>
        <!-- 描述和热度 -->
        <div class="desc">
          <span>{{ props.item.name }}</span>
          <HotBar :hot="props.item.hot" :width="width"></HotBar>
        </div>
      </div>
</template>
<style scoped>
/* 单个标签的样式 */
.tab-item{
  display: flex;
  margin-bottom: 20px;
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
</style>