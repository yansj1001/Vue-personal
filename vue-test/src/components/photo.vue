<script setup>
import { computed } from 'vue';

const props = defineProps(["img","rate"])
console.log(props.rate);
const color = computed(()=>{
    if (props.rate == 1) {
        return "rgb(254,45,70)"
    } else if (props.rate == 2) {
        return "rgb(245,102,1)"
    } else {
        return "rgb(247,169,1)"
    }
}) 
</script>
<template>
    <div class="photo">
          <img :src="props.img" alt="梅西">
          <span>{{ props.rate }}</span>
        </div>
</template>
<style scoped>
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
  background-color: v-bind(color);
}</style>