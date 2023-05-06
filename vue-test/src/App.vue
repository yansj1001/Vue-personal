<script setup>

</script>
<template>
  <div class="container">
    <div class="header">
      <div class="button active" >热门球员</div>
      <div class="button">热门球队</div>
    </div>
    <div class="main">
      <div class="tab-list">
        <div class="photo">
          <img src="../public/images/messi.png" alt="梅西">
          <span class="des">1</span>
        </div>
        <div class="desc">
          <span>梅西</span>
          <div class="hot-bar">
            <div class="bar">433323热度</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container{
  width: 400px;
  height: 400px;
  box-sizing: border-box;
  background-color: rgb(52, 52, 230);
  padding: 20px;
}
.header{
  display: flex;
  height: 30px;
  border-radius: 20px;
  background-color: #fff;
  overflow: hidden;
  justify-content: center;
  align-items: center;
}
.header .button{
  text-align: center;
  width: 50%;
  height: 100%;
  line-height: 30px;
  cursor: pointer;
  transition: .6s;
}
.header .button:not(.active):hover{
  color: rgb(253, 70, 70);
}
.active{
  background-color: rgb(253, 70, 70);
  color: #fff;
}
.tab-list{
  display: flex;
  margin: 20px;
}
.photo{
  background-color: #fff;
  width: 100px;
  height: 100px;
}
.photo img{
  width: 100px;
  height: 100px;
}
.photo span{
  position: absolute;
}
</style>