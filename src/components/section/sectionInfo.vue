<template>
  <section id="sectionInfo" class="sectionInfo light_theme">
    <div class="container">
      <carousel-3d :inverse-scaling="800" :autoplay="true" :autoplay-timeout="3000" :display="3" :space="800" :width="600" :height="500">
        <slide  v-for="(item, index) in mainInfo.items" :index="index">
          <h2 class="title">{{ item.title }}</h2>
          <div v-html="item.text"></div>
        </slide>
      </carousel-3d>
    </div>
  </section>

</template>

<script>
  import { mapGetters } from 'vuex'
  import { Carousel3d, Slide } from 'vue-carousel-3d'

  export default {
    components: {
      Carousel3d,
      Slide
    },
    data: function () {
      return {
      }
    },
    computed: {
      ...mapGetters({
        mainInfo: 'getMainInfo'
      })
    }
  }
</script>
<style lang="scss">
  @import '../../scss/variables';
  .carousel-3d-container {
    .carousel-3d-slide {
      padding: 20px;
      background: $color0;
      border: 0;
      box-shadow: inset 0 0 5px 6px rgba(0, 0, 0, 0.15);
      .title {
        font-size: 30px;
        font-style: italic;
        color: #504a71;
        margin: 10px 0 20px 0;
        text-align: right;
      }
      p{
        text-indent: 20px;
        line-height: 1.3;
        margin: 10px 0 0;
      }
    }
  }
</style>
