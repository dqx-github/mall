<template>
      <div class="recommend">
        <div v-for="item in recommends" :key="item.link" class="recommend-item">
          <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}} </div>
          </a>
        </div>
      </div>
</template>

<script>

  export default {
    name: 'Home',
    props :{
      recommends : {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>>
  
