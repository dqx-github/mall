<template>
      <div class="goods">
          <goods-list-item v-for="item in goods" :key="item.acm" :goodItem="item" />
      </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: 'GoodsList',
    components: {
      GoodsListItem
    },
    props: {
      goods:{
        type: Array,
        default(){
          return []
        }
      }  
    }
  }
</script>

<style scoped>
  .goods{
    display: flex;
    /* 默认不包裹，设置之后会按照内容的宽度进行包裹 */
    flex-wrap: wrap;
    /* 设置展示的内容均等分 */
    justify-content: space-around;
  }
</style>