<template>
  <header class="header">
    <div class="container">
      <!--<div class="logo is-flex">{{ mainData.title }}</div>-->
      <ul>
        <li v-for="item in nav.items">
          <a :href="item.link">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>




<script>
  import { mapGetters } from 'vuex'

  export default{
    name: 'header',
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters({
        nav: 'getNav',
        mainData: 'getMainData'
      })
    }
  }
</script>

<style lang="scss">
  @import '../../scss/variables';
  .header{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    height: $headerHeight;
  }
</style>
