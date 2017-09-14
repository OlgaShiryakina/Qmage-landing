<template>
  <section id="sectionInfo" class="sectionInfo light_theme">
    <div class="container" >
      <!--<swiper :options="swiperOptionTop" class="gallery-top" :only-fade="false" ref="swiperTop">-->
      <swiper :options="swiperMain" ref="swiperMain">
        <swiper-slide v-for="item in mainInfo.items"  :label="item.link">
          <h2 class="title">{{ item.title }}</h2>
          <div v-html="item.text"></div>
        </swiper-slide>
        <!--<div class="swiper-pagination" slot="pagination"></div>-->
      </swiper>
      <!--<div class="swiper-pagination  swiper-pagination-bullets" ref="swiperNav"></div>-->
      <slot name="pagination">
        <div class="swiper-pagination  swiper-pagination-bullets" ref="swiperNav">
          <span class="swiper-pagination-bullet 789" v-for="(item, index) in mainInfo.items" :title="item.link">{{ item.link }}</span>
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
//      let nav = this.$refs.swiperNav
//      let child = nav.querySelectorAll('span')
//      for (let i = (child.length - 1); i > -1; i--) {
//        child[i].innerHTML = this.mainInfo.items[i].link
//      }
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
      &-container{
        @include responsive(maxTablet){
          padding: 0 0 25px 0;
        }
      }
      &-pagination{
        span{
          cursor: pointer;
          width: 20px;
          height: 20px;
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
  .gallery-top{
    background: #fff;
    border-radius: 10px;
    .swiper-slide{
      opacity: 0 !important;
      transition: all .354443335s cubic-bezier(0.4, 0, 1, 1) !important;
      .is-primary{
box-shadow: none;
        border:none;
      }
    }
    .swiper-slide-active{
      opacity: 1 !important;
    }
  }
.gallery-thumbs{
  width: 200px !important;
    @include responsive(maxTablet){
      height: inherit !important;
      width:100% !important;
      text-align: center;

  }
  .swiper-wrapper{
    transform: none !important;
    display: flex;
    flex-direction: column;
    @include responsive(maxTablet){
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;

    }
  }
  .swiper-slide{
    max-width:165px !important;
    min-height:60px;
    height: initial;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0 !important;
    span{
      white-space: normal;
      word-break: break-word;
      padding: 10px 15px;
      min-width:120px;
      max-width: 120px;
      text-transform: uppercase;
      border-radius: 5px;
      background-color: #fff;
      font-size: 14px;
      line-height: 1.4;
      margin: 0;
      font-weight: bold;
      position: relative;
      z-index: 2;
      border: 1px solid #ededed;
      cursor: pointer;
      @include responsive(maxTablet){
        height: 70%;
        display: flex;
        align-items: center;
        line-height: 1.2;
      }
      @media screen and (max-width:555px){
        padding: 5px;
        font-size:12px;
        text-align: center;
        justify-content: center;
      }
    }
  }
  .swiper-slide-active{
    span{
      background: $color14;
      color: $color0;
      position: relative;
      &:before{
        display: block;
        content: '';
        top:40%;
        right: -5px;
        position: absolute;
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-left: 5px solid $color14;
        border-bottom: 5px solid transparent;
        @include responsive(maxTablet) {
          bottom: -5px;
          top:initial;
          left: calc(50% - 5px);
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid $color14;
          border-bottom:initial;
        }
      }
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
