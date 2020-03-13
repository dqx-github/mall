<template>
  <div class="goods-item" @click="goodsItemClick">
    <img :src="goodItemImage" alt="" @load="loadImageItem">
    <div class="goods-item-info">
      <p>{{goodItem.title}}</p>
      <span class="price">{{goodItem.price}} </span>
      <span class="collect">{{goodItem.cfav}} </span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'GoodsListItem',
    props: {
      goodItem: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      loadImageItem(){
        //使用事件总线发送事件
        this.$bus.$emit('loadImageItem');
      },
      //点击跳转到详情页
      goodsItemClick(){
        this.$router.push('/detail/'+this.goodItem.iid);
      }
    },
    computed: {
      goodItemImage(){
        return  this.goodItem.image || this.goodItem.show.img 
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    position: relative;
    padding-bottom: 40px;
    width: 48%;
    margin-bottom: 2%; 
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-item-info{
    font-size: 12px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    text-align: center;
    
  }
  .goods-item-info p {
    /* 设置内容溢出后自动隐藏溢出的内容 */
    overflow: hidden;
    /* 将要溢出的结尾内容设置为... */
    text-overflow: ellipsis;
    /* 设置内容行数为1行 */
    white-space: nowrap;
    margin-bottom: 4px;
  }
  .goods-item-info .price {
    color: var(--color-high-text);
    margin-right: 18px;
  }
  .goods-item-info .collect {
    position: relative;
  }
  .goods-item-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    /* 0 0/14px 14px 代表x轴 y轴/宽 高 例如：10px 2px/13px 12px 意思为x轴10px，y轴2px 宽12px，高12px  */
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px no-repeat;
  }
</style>