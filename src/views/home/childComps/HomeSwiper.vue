<template>
      <swiper>
        <swiper-item v-for="item in banners" :key="item.link">
          <a :href="item.link">
            <img :src="item.image" alt="" @load="homeSwiperImgLoad">
          </a>
        </swiper-item>
      </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'

  export default {
    name: 'Home',
    data() {
      return {
        isLoad: false
      }
    },
    props :{
      banners : {
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      homeSwiperImgLoad(){
        if(this.isLoad === false){
          this.$emit('homeSwiperImgLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
