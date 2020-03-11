<template>
  <div>
    <detail-nav-bar />
    <detail-swiper :imageTop="imageTop" />
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop" />
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar';
  import DetailSwiper from './childComps/DetailSwiper';
  import DetailBaseInfo from './childComps/DetailBaseInfo';
  import DetailShopInfo from './childComps/DetailShopInfo';
  import {getGoodDetailById,Goods,Shop} from 'network/detail';

  export default {
    name: 'Detail',
    data() {
      return {
        iid: null,
        imageTop: [],
        goods: {},
        shop: {}
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo
    },
    created() {
      //获取数据id
      this.iid = this.$route.params.iid;
      //发出网络请求获取数据
      getGoodDetailById(this.iid).then(res=>{
        const data = res.result;
        //存储轮播图需要使用的图片
        this.imageTop = data.itemInfo.topImages;
        console.log(data)
        //1.获取基本信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //2.获取店铺信息
        this.shop = new Shop(data.shopInfo)
      })
    },
    
  }
</script>

<style scoped>
  .titles{
    display: flex;
    font-size: 13px;
  }
  .titles .titles-item{
    flex: 1;
  }
  
</style>