<template>
      <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item_icon"></slot></div>
        <div v-else><slot name="item_icon_active"></slot></div>
        <!-- <div :class="{textActive:isActive}"><slot name="item_text"></slot></div> -->
        <div :style="activeStyle"><slot name="item_text"></slot></div>
      </div>
</template>

<script>

export default {
  name: 'TabBarItem',
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data(){
    return {
      
    }
  },
  methods: {
    itemClick(){
      // this.$router.push()
      this.$router.replace(this.path).catch((e)=> {})
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle(){
      return this.isActive? {color: this.activeColor}:{};
    }
  },
  components: {
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 4px;
  }
</style>
