<template>
  <div id="app">
    <block-header></block-header>
    <div class="main">
      <section-top></section-top>
      <section-info></section-info>
      <section-team></section-team>
      <section-review></section-review>
      <block-footer></block-footer>
    </div>
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
body {
  margin: 0;
  background: #f1f1f1;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}
.main{
  padding:80px 20px 0;

}
header {
  margin: 0;
  padding: 0 16px 0 24px;
  background-color: #a0d4dc;
  color: #ffffff;
}
.header{
  display: flex;
  justify-content: space-between;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
