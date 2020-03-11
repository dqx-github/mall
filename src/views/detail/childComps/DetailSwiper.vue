<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in imageTop" :key="item">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'

  export default {
    name: 'DetailSwiper',
    props: {
      imageTop: {
        type: Array,
        default (){
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style>
  .detail-swiper{
    height: 35vh;

  }
</style>