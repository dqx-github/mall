<template>
      <div id="home">
          <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
          <scroll class="content" ref="scroll" 
          :probeType="3" 
          :pullUpLoad="true"
          @contentScroll="contentScroll"
          @pullingUp="loadMore">
            <home-swiper :banners="banners"></home-swiper>
            <recommend-view :recommends="recommends"></recommend-view>
            <feature-view/>
            <tab-control @tabControlItemClick="tabControlItemClick" class="tab-control" :titles="['流行','新款','精选']"></tab-control>
            <goods-list :goods="showGoods"></goods-list>
          </scroll>
          <top-back @click.native="backClick" v-show="isShow"></top-back>
      </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import Scroll from 'components/common/scroll/Scroll';
  import TabControl from 'components/content/tabcontrol/TabControl.vue';
  import GoodsList from 'components/content/goods/GoodsList';
  import TopBack from 'components/content/topback/TopBack';

  import HomeSwiper from './childComps/HomeSwiper';
  import RecommendView from './childComps/RecommendView';
  import FeatureView from './childComps/FeatureView';

  import {getHomeMultidata,getHomeGoods} from 'network/home';
  import {debounce} from '@/common/utils';
  

  export default {
    name: 'Home',
    components: {
      NavBar,
      Scroll,
      TabControl,
      GoodsList,
      TopBack,
      HomeSwiper,
      RecommendView,
      FeatureView
    },
    data(){
      return {
        banners: [],
        recommends: [],
        goods:{
          'pop':{list: [],page: 0},
          'new':{list: [],page: 0},
          'sell':{list: [],page: 0}
        },
        nowGoodsType: 'pop',
        isShow: false
      }
    },
    created(){
      //1.请求多个数据
      this.getHomeMultidata();
      //2.请求goods数据
      const goodsKeyArr = Object.keys(this.goods);
      for(let goodsKey of goodsKeyArr){
        this.getHomeGoods(goodsKey)
      }
    },
    mounted(){
      const refresh = debounce(this.$refs.scroll.refresh,500);
       this.$bus.$on('loadImageItem',()=>{
        refresh()
      })  
    },
    computed: {
      showGoods(){
        return this.goods[this.nowGoodsType].list
      }
    },
    methods: {
      /**
       * 事件监听相关的方法
       */
      tabControlItemClick(titleCurrentIndex){
        const goodsKeyArr = Object.keys(this.goods);
        this.nowGoodsType = goodsKeyArr[titleCurrentIndex];
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0);
      },
      contentScroll(position){
        this.isShow = (-position.y) > 1000;
      },
      loadMore(){
        this.getHomeGoods(this.nowGoodsType);
      },
      /**
       * 网络请求相关的方法
       */
      //请求多个数据
      getHomeMultidata(){
        getHomeMultidata().then(res =>{
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        },err=>console.log(err))
      },
      //请求goods数据
      getHomeGoods(type){
        const page = this.goods[type].page += 1;
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list);
          this.$refs.scroll.finishPullUp();
        },err=>console.log(err))
      }
    }
  }
</script>

<style scoped>
  #home{
    /* margin-top: 44px; */
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; 
  }
  .tab-control{
    position: sticky;
    top: 44px;
    background-color: #fff;
    z-index: 9;
  }
  /* .content{
    height: calc(100% - 93px);
    overflow: hidden;
  } */
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0; 
  }
</style>
