<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" />
    <scroll class="content" ref="scroll">
      <detail-swiper :imageTop="imageTop" @imageLoad="imageLoad" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-good-info :imagesInfo="imagesInfo" />
      <detail-good-params :param-info="paramInfo"/>
      <detail-comment-info :comment-info="commentInfo" />
      <p class="today-recommend">今日推荐</p>
      <good-list :goods="recommendList"/>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar';
  import DetailSwiper from './childComps/DetailSwiper';
  import DetailBaseInfo from './childComps/DetailBaseInfo';
  import DetailShopInfo from './childComps/DetailShopInfo';
  import DetailGoodInfo from './childComps/DetailGoodInfo';
  import DetailGoodParams from './childComps/DetailGoodParams';
  import DetailCommentInfo from './childComps/DetailCommentInfo';
  import {getGoodDetailById,getRecommend,Goods,Shop,GoodParams} from 'network/detail';

  import GoodList from 'components/content/goods/GoodsList'

  import {goodsImgListenerMixin} from 'common/mixins'

  import Scroll from 'components/common/scroll/Scroll'

  export default {
    name: 'Detail',
    data() {
      return {
        iid: null,
        imageTop: [],
        goods: {},
        shop: {},
        imagesInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommendList: []
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodInfo,
      DetailGoodParams,
      DetailCommentInfo,
      GoodList,
    },
    created() {
      //获取数据id
      this.iid = this.$route.params.iid;
      //发出网络请求获取数据
      getGoodDetailById(this.iid).then(res=>{
        const data = res.result;
        //存储轮播图需要使用的图片
        this.imageTop = data.itemInfo.topImages;
        //1.获取基本信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //2.获取店铺信息
        this.shop = new Shop(data.shopInfo)
        //获取商品图片信息
        this.imagesInfo = data.detailInfo;
        //获取参数信息
        this.paramInfo = new GoodParams(data.itemParams);
        // 获取评论数据
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0] || {};
        }
      })
      //获取推荐数据
      getRecommend().then((res)=>{
        this.recommendList = res.data.list
        console.log(this.recommendList)
      })
    },
    mixins: [goodsImgListenerMixin],
    methods: {
      imageLoad(){
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 10;
    background-color: #fff;
    height: 100vh;
  }
  .titles{
    display: flex;
    font-size: 13px;
  }
  .titles .titles-item{
    flex: 1;
  }
  .detail-nav-bar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 44px)
  }
  .today-recommend {
    padding: 20px 8px;
    color: black;
 
  }
</style>