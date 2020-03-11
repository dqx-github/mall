<template>
  <div>
    <nav-bar class="detail-nav-bar">
      <div slot="left" @click="backClick">
        <img src="~assets/img/detail/back.svg" alt="">
      </div>
      <div slot="center" class="titles">
        <div v-for="(item,index) in titles" 
          :key="item" class="titles-item"
          @click="itemClick(index)"
          :class="{active:currentIndex === index}">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';

  export default {
    name: 'DetailNavBar',
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      itemClick(index){
        this.currentIndex = index;
      },
      backClick(){
        this.$router.back();
      }
    },
    
  }
</script>

<style scoped>
  .detail-nav-bar img{
    width: 24px;
    height: 24px;
    margin-top: 11px;
  }
  .titles{
    display: flex;
    font-size: 13px;
  }
  .titles .titles-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
</style>