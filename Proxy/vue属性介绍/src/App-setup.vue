<!-- <script>
import { reactive } from 'vue';
export default{
    setup(){
        //此处的数据就是普通变量，不是响应式数据，变量修改时不会在视图中产生效果
        const name = "孙悟空"
        let count = 0
        //此处使用reactive（），参数中的对象会称为响应式数据
        const stu = reactive({
            name:"猪八戒",
            age:18,
            gender:"男"
        })
        function changeAge(){
            stu.age = 28
        }
        return {
            name,
            count,
            stu,
            changeAge
        }
    }
}
</script> -->
<script setup>
import { reactive } from 'vue';
const msg = 111
//const count = 0
const stu = reactive({
    name:"孙悟空",
    count:0
})
</script>

<template>
    <p>{{ msg }}</p>
    <p @click="stu.count++">{{ stu.count }}</p>
    <!-- <button @click="changeAge">点我一下</button> -->
    <h1>{{ stu.name }}</h1>
</template>