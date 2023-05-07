<script setup>
const props = defineProps(["hot","width"])
</script>
<template>
    <div class="hot-bar">
            <div class="bar">{{ props.hot }}热度</div>
          </div>
</template>
<style scoped>
/* 热度条容器样式 */
.desc .hot-bar{
  border-radius: 15px;
  background-color: #646362;
  overflow: hidden;
}
/* 热度条样式 */
.desc .bar{
  width: v-bind('props.width');
  white-space: nowrap;
  background-image: linear-gradient(90deg,rgb(211, 4, 4) 50%,rgb(65, 1, 1));
  text-indent: 0.5em;
  border-radius: 15px;
}</style>