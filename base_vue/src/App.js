import MyButton from "./components/MyButton"
export default{
    data(){
        return {
           msg:"我的子组件页面" ,
           count:0
        }
    },
    components:{
        MyButton
    },
    template:`
    <h1>{{msg}}</h1>
    <MyButton></MyButton>
    <MyButton></MyButton>
    <MyButton></MyButton>
    <MyButton></MyButton>`
}