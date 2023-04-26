<script>
import {shallowReactive} from "vue"
export default{
  data(){
    this.msg1 = "这里不会变"
    //被shallowReactive包含的对象，会成为浅响应式对象，即stu中的属性不会被vue代理
    // return shallowReactive({
    //   msg:"响应式数据",
    //   stu:{
    //     name: "孙悟空",
    //     age: 18,
    //     gender: "男"
    //   }
    // })
    //不使用shallowReactive函数，返回的对象中的所有属性都会被代理，是深响应对象
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
    <h2>{{ msg1 }}</h2>
    <hr>
    <h3>{{ this.stu.name }}--{{ this.stu.age }}--{{ this.stu.gender }}</h3>
</template>