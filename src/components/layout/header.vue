<template>
  <header class="header">
    <div class="container level">
      <div class="logo is-flex"><img src="../../assets/qpard-white.png" :alt="mainData.title"></div>
      <ul class="header__nav is-flex">
        <li v-for="item in nav.items">
          <a v-scroll-to="'#' + item.link" href="javascript:void(0);">{{ item.name }}</a>
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
  .header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    color: #fff;
    background: #000;
    .container {
      height: $headerHeight;
    }
    .level {
      @include responsive(maxTablet){
        display: flex;
    }
    }
    .logo {
      font-size: 20px;
      align-items: center;
      width: 155px;
    }
    &__nav {
      margin: 0;
      @include responsive(maxTablet){
        display: none !important;
      }
      li {
        padding: 0 10px;
        margin: 0;
      }
      a {
        color: #fff;
        &:hover{
          color: $color3;
        }
      }
    }
  }
</style>
