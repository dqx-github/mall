<template>
      <div id="home">
        <div class="home-nav">
          <nav-bar>
            <div slot="left"></div>
            <div slot="center">购物街</div>
            <div slot="right"></div>
          </nav-bar>
        </div>
      </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';

  export default {
    name: 'Home',
    components: {
      NavBar
    }
  }
</script>

<style>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
