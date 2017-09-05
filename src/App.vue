<template>
  <div id="app">
    <block-header></block-header>
    <div class="main">
      <section-top></section-top>
      <section-info></section-info>
      <section-team></section-team>
      <section-review></section-review>
    </div>
    <block-footer></block-footer>
  </div>
</template>

<script>
  import blockHeader from '@/components/layout/header.vue'
  import sectionTop from '@/components/section/sectionTop.vue'
  import sectionInfo from '@/components/section/sectionInfo.vue'
  import sectionTeam from '@/components/section/sectionTeam.vue'
  import sectionReview from '@/components/section/sectionReview.vue'
  import blockFooter from '@/components/layout/footer.vue'

  export default {
    name: 'app',
    components: {
      blockHeader,
      sectionInfo,
      sectionTop,
      sectionTeam,
      sectionReview,
      blockFooter
    }
  }
</script>
<style lang="scss">
  @import '~bulma';
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
    font-size: 84px;
  }
</style>
