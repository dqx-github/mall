<template>
  <div class="top-back">
    <img src="~assets/img/common/top-back.svg" alt="">
  </div>
</template>

<script>

  export default {
    name: 'TopBack'
  }
</script>

<style scoped>
  .top-back{
    position: fixed;
    left: 270px;
    bottom: 48px;
   
  }
  .top-back img{
    widows: 35px;
    height: 35px;
    background-color: #fff;
     border-radius: 20px;
  
  }
</style>