<template>
      <div id="home">
          <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
          <home-swiper :banners="banners"></home-swiper>
          <recommend-view :recommends="recommends"></recommend-view>
          <feature-view/>
          <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
          <ul>
            <li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li><li>消息</li>
          </ul>
      </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import TabControl from 'components/content/tabcontrol/TabControl.vue';

  import HomeSwiper from './childComps/HomeSwiper';
  import RecommendView from './childComps/RecommendView';
  import FeatureView from './childComps/FeatureView';

  import {getHomeMultidata,getHomeGoods} from 'network/home';
  

  export default {
    name: 'Home',
    components: {
      NavBar,
      TabControl,
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
        }
      }
    },
    created(){
      //1.请求多个数据
      this.getHomeMultidata();
      //2.请求goods数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods: {
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
        },err=>console.log(err))
      }
    }
  }
</script>

<style scoped>
  #home{
    margin-top: 44px;
    width: 100%;
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
  }
</style>
