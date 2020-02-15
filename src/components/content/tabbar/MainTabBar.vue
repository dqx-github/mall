<template>
    <div>
      <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item_icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item_icon_active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item_text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="pink">
        <img slot="item_icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item_icon_active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item_text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img slot="item_icon" src="~assets/img/tabbar/shop_cart_none.svg" alt="">
        <img slot="item_icon_active" src="~assets/img/tabbar/shop_cart_none_active.svg" alt="">
        <div slot="item_text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/my">
        <img slot="item_icon" src="~assets/img/tabbar/my.svg" alt="">
        <img slot="item_icon_active" src="~assets/img/tabbar/my_active.svg" alt="">
        <div slot="item_text">我的</div>
      </tab-bar-item>
    </tab-bar>
    </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>

</style>
