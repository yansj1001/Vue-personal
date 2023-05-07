<script setup>
import { reactive } from "vue"
import TabList from "./components/TabList.vue";
import Tab from "./components/Tab.vue"

//创建球员信息对象，代理为响应式数据用于传递给子组件
//球员
const Players = reactive([{
  name:"梅西",
  img:"/images/messi.png",
  rate: 1,
  hot: 433760,
},
{
  name:"C罗",
  img:"/images/ronaldo.png",
  rate:2,
  hot:233967,
},
{
  name:"内马尔",
  img:"/images/neymar.png",
  rate:3,
  hot:222343,
}
])
//获取球员的最高热度
const palyerMaxHot = Players[0].hot
//球队
const Teams = reactive([{
  name:"巴西",
  img: "/images/巴西.jpg",
  rate: 1,
  hot: 422235,
},
{
  name: "荷兰",
  img:"/images/荷兰.jpg",
  rate:2,
  hot:322561,
},
{
  name: "法国",
  img: "/images/法国.jpg",
  rate:3,
  hot: 222331,
}
])
//获取球队的最高热度
const teamMaxHot = Teams[0].hot
</script>
<template>
  <Tab>
    <template #0>
      <TabList :item="Players" :maxHot="palyerMaxHot"></TabList>
    </template>
    <template #1>
      <TabList :item="Teams" :maxHot="teamMaxHot"></TabList>
    </template>
  </Tab>
</template>
