<template>
  <div id="app">
    <block-header></block-header>
    <div class="main">
      <section-top></section-top>
      <section-info></section-info>
      <section-form></section-form>
      <section-team></section-team>
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
  import blockFooter from '@/components/layout/footer.vue'

  export default {
    name: 'app',
    components: {
      blockHeader,
      sectionInfo,
      sectionForm,
      sectionTop,
      sectionTeam,
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
    font: 14px/1.5 Arial, sans-serif;
    overflow-x: hidden;
    word-wrap: break-word;
  }
  h1, h2, h3, h4, h5, h6{
    line-height: 1;
  }
  h1{
    @include responsive(minMedium){font-size: 84px;}
    @include responsive(tablet){font-size: 67px;}
    @include responsive(maxTablet){font-size: 40px;}
  }
  h3{
    @include responsive(minTablet){font-size: 30px;}
    @include responsive(maxTablet){font-size: 23px;}
  }
  .container{
    @include responsive(maxMedium){
      padding: 0 10px;
    }
  }
  .dark-grad{
    color: $color0;
    padding: 2rem 0;
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
  .button-send{
    text-align: center;
    display: inline-block;

    border-radius: 20px;
    padding: 7px 45px;
    color: #fff;
    transition: all .4s;
    box-shadow: 0px 2px 2px 0px #000;
    margin: 0 0 20px 0;
    border:1px solid $color6;
    font-size: 16px;
    &:hover{
      border-radius: 10px;
        box-shadow: 0 7px 23px 0 rgba(58, 60, 65, 0.2);
    }
  }
  .title__light{
    color: $color4;
    text-align: center;
    text-shadow: 1px 1px 3px #000;
  }
  .title__dark{
    text-shadow: 1px 1px 3px #f1f1f1;
    color: $color5;
    text-align: center;
  }
  .title__light, .title__dark{
    &:after{
      display: block;
      content: '';
      height: 8px;
      width:100px;
      background: $color1;
      margin: 10px auto;
    }
  }
</style>
