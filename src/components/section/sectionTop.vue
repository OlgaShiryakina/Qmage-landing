<template>
  <section id="sectionTop" class="sectionTop dark-grad">
    <div class="container level">
      <div>
        <h1>{{ mainData.title }}</h1>
        <div class="sectionTop__slogan" v-html="mainData.slogan"></div>
      </div>
      <div class="subscribe box">
        <h3 class="subscribe__title">{{ mainData.sendMail.title }}</h3>
        <!--<span>{{ mainData.sendMail.placeholder }}</span>-->
        <div class="field">
          <input class="input" type="email" placeholder="Email" v-model="mainData.sendMail.input">
        </div>
        <a class="button button-send" href="javascript:void(0);">{{ mainData.sendMail.button }}</a>
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
    .button-send{
      background: #6a5acd;
      border-color: #5c42ff;
      color: #f1f1f1;

    }
    .container{
      padding-top: 10%;
      @include responsive(minTablet){padding-bottom: 10%;}
    }
    &__slogan{
      @include responsive(minMedium){
        font-size: 20px;
        line-height: 0.8;
        letter-spacing: 4px;
        margin: -9px 0 0 3px;
        text-align: justify;
        -moz-text-align-last: justify;
        text-align-last: justify;
      }
      @include responsive(tablet){
        font-size: 18px;
        line-height: 0.9;
        letter-spacing: 2px;
        margin: -5px 0 0 3px;
      }
    }
  }
  .subscribe{
    &.box{
      @include responsive(minTablet){
        width: 350px;
      }
      @include responsive(maxTablet){
        width: 100%;
        padding: 10px;
        margin: 50px 0 0 0 !important;
      }
    }
    &__title{
      text-align: center;
      @include responsive(minTablet){margin: 0 0 30px;}
      @include responsive(maxTablet){margin: 0 0 20px;}
    }
    .input{
      border-radius: 20px;
      padding-right: 15px;
      padding-left: 15px;
    }
    .button{
      display: block;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
</style>
