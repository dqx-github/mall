<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
    name: 'Scroll',
    props:{
      probeType:{
        type: Number,
        default: 0
      },
      pullUpLoad:{
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        bscroll: null
      }
    },
    mounted() {
      this.bscroll = new BScroll(this.$refs.wrapper,{
        click: true,
        tap: true,
        pullUpLoad: this.pullUpLoad,
        probeType: this.probeType
      });

      this.bscroll.on('scroll',(position)=>{
        this.$emit('contentScroll',position);
      })

      this.bscroll.on('pullingUp',()=>{
          this.$emit('pullingUp')
      })
    },
    methods: {
      scrollTo(x,y,time=300){
        this.bscroll.scrollTo(x,y,time);
      },
      refresh(){
        console.log("-----")
        this.bscroll.refresh();
      },
      finishPullUp(){
        setTimeout(()=>{
           this.bscroll.finishPullUp();
        },1000)
      }
    }
  }
</script>

<style scoped>

</style>