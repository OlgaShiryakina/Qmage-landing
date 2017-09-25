<template>
  <div id="app">
    <block-header></block-header>
    <div class="main">
      <section-top></section-top>
      <section-info></section-info>
      <section-form></section-form>
      <section-team></section-team>
      <section-learn></section-learn>
    </div>
    <block-footer></block-footer>
  </div>
</template>

<script>
  import blockHeader from '@/components/layout/header.vue'
  import sectionTop from '@/components/section/sectionTop.vue'
  import sectionInfo from '@/components/section/sectionInfo.vue'
  import sectionForm from '@/components/section/sectionForm.vue'
  import sectionTeam from '@/components/section/sectionTeam.vue'
  import sectionLearn from '@/components/section/sectionLearn.vue'
  import blockFooter from '@/components/layout/footer.vue'

  export default {
    name: 'app',
    components: {
      blockHeader,
      sectionInfo,
      sectionForm,
      sectionTop,
      sectionTeam,
      sectionLearn,
      blockFooter
    }
  }
</script>
<style lang="scss">
  @import '~bulma';
  @import 'scss/variables';
  .subtitle {
    margin: 0 !important;
  }
  body {
    margin: 0;
    font: 14px/1.5 $mainFont;
    overflow-x: hidden;
    word-wrap: break-word;
  }
  h1, h2, h3, h4, h5, h6{
    line-height: 1 !important;
    font-weight: 400 !important;
  }
  h1{
    @include responsive(minMedium){font-size: 84px;}
    @include responsive(tablet){font-size: 67px;}
    @include responsive(maxTablet){font-size: 40px;}
  }
  h3{
    @include responsive(minTablet){font-size: 48px;}
    @include responsive(maxTablet){font-size: 30px;}
  }
  h3{
    @include responsive(minTablet){font-size: 30px;}
    @include responsive(maxTablet){font-size: 23px;}
  }
  h4{
    @include responsive(minTablet){font-size: 23px;}
    @include responsive(maxTablet){font-size: 20px;}
  }
  img{
    max-width: 100%;
    height: auto;
  }
  ol, ul{
    list-style-position: inside;
    margin: 20px 0;
    li + li{
      margin-top: 10px;
    }
  }
  .container{
    @include responsive(maxMedium){
      padding: 0 10px;
    }
  }
  .dark-grad{
    color: $color0;
    padding: 70px 0;
    position: relative;
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
    .label{
      font-weight: 400;
      font-size: 14px;
      margin: 0;
    }
  }
  .button-default{
    text-align: center;
    display: inline-block;
    border-radius: 20px;
    padding: 7px 45px;
    color: #fff;
    transition: all .4s;
    box-shadow: 0 2px 2px 0 #000;
    margin: 0 0 20px 0;
    border:1px solid $color6;
    font-size: 16px;
    line-height: 1;
    text-decoration: none !important;
    cursor: pointer;
    background: $color3;
    &:hover, &.button:focus{
      color: #fff;
      border-radius: 10px;
      border-color: $color12;
      box-shadow: 0 7px 23px 0 rgba(58, 60, 65, 0.2);
    }
  }
  .light_theme{
    background: $color13;
    padding: 70px 0;
  }
  .input{
    &:focus{
      border-color: #5c42ff;
    }
  }
  .form{
    position: relative;
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
    .button{
      display: block;
      padding: 5px;
      width:100%;
    }
    &__message{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      color: #6a5acd;
      font-style: italic;
      box-sizing: border-box;
      background: rgba(255, 255, 255, 0.9);
      visibility: hidden;
      opacity: 0;
      transition: opacity 3s linear,  visibility 0.3s 0s linear;
      &>*{
        transform: scale(0.5);
        transition: transform 0.3s linear;
        position: relative;
      }
      &.show{
        visibility: visible;
        opacity: 1;
        transition: opacity 0.3s linear,  visibility 0s 0s linear;
        &>*{
          transform: scale(1);
        }
      }
    }
  }
  .title{
    &__light, &__dark{
      &:after{
        display: block;
        content: '';
        height: 3px;
        width: 200px;
        background: $color1;
        margin: 10px auto;
      }
    }
    &__dark{
      color: $color5;
      text-align: center;
    }
    &__light{
      color: $color4;
      text-align: center;
    }
  }
  .hero.is-primary{
    color: $color2;
  }
</style>
