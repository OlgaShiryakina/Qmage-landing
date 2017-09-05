<template>
  <section class="sectionTop dark-grad">
    <div class="container level">
      <div>
        <h1>{{ mainData.title }}</h1>
        <div class="sectionTop__slogan" v-html="mainData.slogan"></div>
      </div>
    </div>
  </section>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default{
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters({
        mainData: 'getMainData'
      })
    }
  }
</script>

<style lang="scss">
  @import '../../scss/variables';
  .level-left{
    width:50%;
  }
  .dark-grad{
    background: linear-gradient(to bottom, #a0a0a0 0%, #d0d0d0 100%);
    color: #fff;
  }
  .sectionTop{
    background: url("../../assets/bg.jpg") center bottom no-repeat;
    background-size: 100% auto;
    position: relative;
    padding-top: $headerHeight;
    &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, #2d2d2d 0%, #000000 100%);
      opacity: .9;
    }
    .container{
      padding: 10% 0;
    }
    &__slogan{
      text-align: justify;
      -moz-text-align-last: justify;
      text-align-last: justify;
      font-size: 20px;
      letter-spacing: 4px;
      line-height: 0.8;
      margin: -9px 0 0 3px;
    }
  }
</style>
