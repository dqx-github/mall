<template>
      <div class="recommend">
        <div v-for="item in recommends" :key="item.link" class="recommend-item">
          <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}} </div>
          </a>
        </div>
      </div>
</template>

<script>

  export default {
    name: 'Home',
    props :{
      recommends : {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    width: 100%;
    padding: 10px 0 20px;
    /* font-size: var(--font-size); */
    font-size: 14px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    flex: 1;
    width: 65px;
    height: 65px;
    
  }
</style>
