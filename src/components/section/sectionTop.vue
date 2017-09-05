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
  .title__light, .title__dark{
    &:after{
      display: block;
      content: '';
      height: 8px;
      width:100px;
      background: #667eea;
      margin: 10px auto;
    }
  }
  .dark-grad{
    color: #fff;
    padding:2rem 20px;
    position: relative;
    &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: .8;
      background: linear-gradient(to bottom, #202226 0%, #131313 100%);

    }
  }
  .subtitle{
    color: #f1f1f1;
  }
  .hero.is-primary{
    background: #fff;

    .title{
      color: #333333;
    }
    .subtitle{
      color: #9e9e9e;
    }
  }
  .box-item{
    border-radius: 10px;
    box-shadow: 0 7px 99px 0 rgba(58, 60, 65, 0.1);
    border: 1px solid #ededed;
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
