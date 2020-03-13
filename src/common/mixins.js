import {debounce} from 'common/utils'

export const goodsImgListenerMixin = {
  data(){
    return {
      goodImageLoadLister: null
    }
  },
  mounted() {
    //监听页面goodsItem图片加载，这里使用了事件总线
    const refresh = debounce(this.$refs.scroll.refresh,100);
    this.goodImageLoadLister = ()=>{
      refresh()
    }
    this.$bus.$on('loadImageItem',this.goodImageLoadLister)  
  }
}