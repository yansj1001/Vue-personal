export default{
    data(){
        return {
            count:0
        }
    },
    template:`<button @click="count++">点我一下</button><span>{{count}}</span>`
}