<script setup>
import { reactive , ref} from 'vue';
//$属于实验性属性，有不确定性，在正常开发中尽量避免使用
const count = $ref(0)
console.log(count);
</script>
<template>
    <h1>ref响应式代理</h1>
    <h2 @click="count++">{{ count }}</h2>
</template>