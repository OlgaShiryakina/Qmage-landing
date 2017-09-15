<template>
  <section id="sectionInfo" class="sectionInfo light_theme">
    <div class="">
      <carousel-3d :inverse-scaling="800" :autoplay="true" :autoplay-timeout="6000" :display="3" :space="800" :width="760">
        <slide  v-for="(item, index) in mainInfo.items" :index="index">
          <div>
            <h2 class="title">{{ item.title }}</h2>
            <div v-html="item.text"></div>
          </div>
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
  .carousel-3d{
    &-container {
      @include responsive(minTablet){height: 400px !important;}
      @include responsive(phone){height: 600px !important;}
      @include responsive(maxPhone){height: 800px !important;}
    }
    &-slide {
      padding: 20px;
      background: $color0;
      border: 0;
      box-shadow: inset 0 0 5px 6px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      &.current{cursor: default;}
      @include responsive(minTablet){height: 400px !important;}
      @include responsive(phone){height: 600px !important;}
      @include responsive(maxPhone){height: 800px !important;}
      .title {
        font-size: 30px;
        font-style: italic;
        color: #504a71;
        margin: 10px 0 20px 0;
        text-align: center;
      }
      p{
        text-indent: 20px;
        line-height: 1.3;
        margin: 10px 0 0;
      }
    }
  }
</style>
