<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in imageTop" :key="item">
      <img :src="item" alt="" @load="imageLoad">
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
    },
    methods: {
      imageLoad(){
        this.$emit('imageLoad')
      }
    }
  }
</script>

<style>
  .detail-swiper{
    height: 35vh;

  }
</style>