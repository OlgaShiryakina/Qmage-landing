<template>
  <section id="sectionTeam" class="sectionTeam light_theme">
    <div class="container">
      <h2 class="title is-1 title__dark">{{ team.title }}</h2>
      <swiper :options="swiperOption" class="container sectionTeam__slider">
        <swiper-slide class="sectionTeam__item" v-for="item in team.items">
          <img src="../../assets/logo.png" alt="">
          <span class="sectionTeam__item__name">{{ item.name }}</span>
          <strong class="sectionTeam__item__position">{{ item.position }}</strong>
          <i class="sectionTeam__item__info">{{ item.info }}</i>
          <ul>
            <li><a href="javascript:void(0);"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
            <li><a href="javascript:void(0);"><i class="fa fa-telegram" aria-hidden="true"></i></a></li>
            <li><a href="javascript:void(0);"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
            <li><a href="javascript:void(0);"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
            <li><a href="javascript:void(0);"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
          </ul>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
  import { mapGetters } from 'vuex'

  require('swiper/dist/css/swiper.css')

  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  export default {
    name: 'app',
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        abc: '',
        swiperOption: {
          slidesPerView: 4,
          paginationClickable: true,
          spaceBetween: 30,
          autoplay: 2500,
          loop: true,
          breakpoints: {
            1200: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            850: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            600: {
              slidesPerView: 1,
              spaceBetween: 20
            }
          }
        }
      }
    },
    computed: {
      ...mapGetters({
        team: 'getTeam'
      })
    }
  }
</script>
<style lang="scss">
  @import '../../scss/variables';
  .sectionTeam{
    text-align: center;
    position: relative;
    overflow: hidden;
    &__slider{
      display: flex;
      justify-content: space-around;
    }
    &__item{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      &>img{
        height:140px;
      }
      &__name{
        font-size:23px;
        font-weight:bold;
      }
      &__position{
        font-size:12px;
        color: $color5;
        width:100%;
        &:after{
          display: block;
          content: '';
          height: 1px;
          width:70%;
          margin: 10px auto;
          background: $color5;
        }
      }
      &__info{
        font-size: 15px;
        margin: 0 0 10px 0;
        padding: 0 20px;
        line-height: 20px;
      }
      ul{
        display: flex;
        justify-content: center;
        width:100%;
      }
      li{
        margin:0 10px;
        a{
          padding:0;
          i{
            font-size: 25px;
            color: $color5;
            transition: all .4s;
            &:hover{
              color: $color1;
            }
          }
        }
      }
    }
  }
</style>
