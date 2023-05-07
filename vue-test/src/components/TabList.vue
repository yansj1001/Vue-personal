<script setup>
import TabItem from './TabItem.vue';
const props = defineProps(["item","maxHot"])

</script>
<template>
    <TabItem v-for="player of props.item" :item="player" :maxHot="props.maxHot"></TabItem>
</template>