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
  },
  //methods属性
  methods:{
    ceShi(){
      let a = 5
      let b = 6
      return a + b
    },
    changeAge(){
      if(this.stu.age === 18){
        this.stu.age -= 1
      }else{
        this.stu.age = 18
      }
    }
  },
  //computed属性
  //该属性与methods的主要区别在于，computed中的函数只会在其依赖的属性发生改变后才会调用
  computed:{
    info(){
      return this.stu.age >= 18 ? "你已经成年": "你还未成年"
    }
  }
}
</script>

<template>
    <h1>{{ msg }}</h1>
    <hr>
    <h3>{{ this.stu.name }}--{{ this.stu.age }}--{{ this.stu.gender }}</h3>
    <hr>
    <button>{{ ceShi() }}</button>
    <hr>
    <h1>{{ info }}</h1>
    <button @click="changeAge()">点我一下</button>
</template>