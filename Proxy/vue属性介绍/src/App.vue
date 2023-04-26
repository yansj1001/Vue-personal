<script>
import {shallowReactive} from "vue"
export default{
  data(){
    return {
      msg:"响应式数据",
      stu:{
        name:"孙悟空",
        age:18,
        gender:"男"
      }
    }
  }
}
</script>

<template>
    <h1>{{ msg }}</h1>
    <hr>
    <h3>{{ this.stu.name }}--{{ this.stu.age }}--{{ this.stu.gender }}</h3>
</template>