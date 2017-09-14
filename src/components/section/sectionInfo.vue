<template>
  <section id="sectionInfo" class="sectionInfo light_theme">
    <div class="container swiper">
      <!--<swiper :options="swiperOptionTop" class="gallery-top" :only-fade="false" ref="swiperTop">-->
      <swiper :options="swiperMain" ref="swiperMain">
        <swiper-slide v-for="item in mainInfo.items"  :label="item.link">
          <h2 class="title">{{ item.title }}</h2>
          <div v-html="item.text"></div>
        </swiper-slide>
        <!--<div class="swiper-pagination" slot="pagination"></div>-->
      </swiper>
      <div class="swiper-pagination  swiper-pagination-bullets" ref="swiperNav"></div>
      <slot name="pagination">
        <div class="swiper-pagination" ref="swiperNav">
          <a class="swiper-pagination-bullet 789" v-for="(item, index) in mainInfo.items" :title="item.link">{{ item.link }}</a>
        </div>
      </slot>
    </div>
  </section>

</template>

<script>
  import { mapGetters } from 'vuex'
  import { Tabs, TabPane } from 'vue-bulma-tabs'
  require('swiper/dist/css/swiper.css')

  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  export default {
    components: {
      Tabs,
      TabPane,
      swiper,
      swiperSlide
    },
    data: function () {
      return {
        swiperMain: {
          paginations: ['0', '1', '2', '4', '5'],
          test: mapGetters({
            mainInfo: 'getMainInfo'
          }),
          effect: 'fade',
          loop: true,
//          autoplay: 2500,
//          paginationType: 'bullet',
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true
//          paginationBulletRender (swiper, index, className) {
//            let paginations = this.paginations
//            console.log(this)
//            return `<span class="${className} swiper-pagination-bullet-custom">${paginations[index]}</span>`
//            // return '<span class="' + className + ' swiper-pagination-bullet-custom' + '">' + (index + 1) + '</span>';
//          }
//          paginationTitleRender: function (nr, item) {
//            let title = this.paginations[nr]
//            console.log(nr, item)
//            return '<span class="' + title + '">' + title + '</span>'
//          }
        }
      }
    },
    computed: {
      ...mapGetters({
        mainInfo: 'getMainInfo'
      })
    },
    mounted: function () {
      let nav = this.$refs.swiperNav
      let child = nav.querySelectorAll('span')
      for (let i = (child.length - 1); i > -1; i--) {
        child[i].innerHTML = this.mainInfo.items[i].link
      }
    }
  }
</script>
<style lang="scss">
  @import '../../scss/variables';
  .sectionInfo{
    .level{
      align-items: flex-start;
    }
    .swiper{
      overflow: hidden;
      &-container{
        @include responsive(minTablet){
          width: calc(100% - 200px);
          float: right;
        }
        @include responsive(maxTablet){

        }
      }
      &-pagination{
        @include responsive(minTablet){
          width: 200px;
          float: left;
          text-align: left;
        }
        span{
          cursor: pointer;
          width: 160px;
          height: 50px;
          display: flex;
          align-items: center;
          border-radius: 3px;
          font-weight: 500;
          background: #fff;
          font-size: 14px;
          line-height: 1.2;
          color: #000;
          text-transform: uppercase;
          justify-content: flex-start;
          margin-bottom: 10px;
          box-shadow: 0 7px 99px 0 rgba(58, 60, 65, 0.1);
          padding: 10px;
          box-sizing: border-box;
          &.swiper-pagination-bullet-active{
            background: $color1;
            color: #fff;
          }
        }
      }
      &-slide{
        background: $color13;
      }
    }
    .list-items{
      color: $color5;
      list-style: disc;
      padding: 5px 0 5px 15px;
      font-size: 15px;
    }
    @include responsive(maxTablet){
      .title{
        font-size: 20px;
      }
    }
    .hero.is-primary{
      padding: 15px 20px;
      @include responsive(maxTablet){
        padding: 1rem;
      }
    }
  }
  .level{
    .subtitle{
      color: #6e717f !important;
    }
    .title{
      color: #35495e !important;
    }
  }
  .level-right{
    width:100%;
    flex-direction: column;
    align-items: flex-start;
    @include responsive(maxTablet){
      width: 100%;
    }
  }
  .level-left{
    flex-direction: column;
    align-items: flex-start;
    width:100%;
    @include responsive(maxTablet){
      width: 100%;
    }
  }
  .light_theme{
    background: $color13;
    padding: 70px 0;
  }
</style>
