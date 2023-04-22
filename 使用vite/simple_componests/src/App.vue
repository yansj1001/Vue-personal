<script>
import MyButton from "./components/MyButton.vue"
export default{
    data(){
        return {
            count:0
        }
    },
    components:{
        MyButton
    }
}
</script>
<template>
    <MyButton>{{count}}</MyButton>
</template>