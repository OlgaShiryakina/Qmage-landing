<template>
  <section id="sectionTeam" class="sectionTeam dark-grad">
    <div class="container">
      <h2 class="title is-1 title__dark">OUR TEAM</h2>
        <swiper :options="swiperOption" class="container members">
          <swiper-slide class="member">
            <img src="../../assets/logo.png" alt="">
            <span class="name">John Dou</span>
            <strong class="devel">Разработчик</strong>
            <i class="about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque culpa, enim error excepturi nulla repellendus vitae.</i>
            <ul>
              <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-telegram" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
            </ul>
          </swiper-slide>
          <swiper-slide class="member">
            <img src="../../assets/logo.png" alt="">
            <span class="name">John Dou</span>
            <strong class="devel">Разработчик</strong>
            <i class="about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque culpa, enim error excepturi nulla repellendus vitae.</i>
            <ul>
              <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-telegram" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
            </ul>
          </swiper-slide>
          <swiper-slide class="member">
            <img src="../../assets/logo.png" alt="">
            <span class="name">John Dou</span>
            <strong class="devel">Разработчик</strong>
            <i class="about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque culpa, enim error excepturi nulla repellendus vitae.</i>
            <ul>
              <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-telegram" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
            </ul>
          </swiper-slide>
          <swiper-slide class="member">
            <img src="../../assets/logo.png" alt="">
            <span class="name">John Dou</span>
            <strong class="devel">Разработчик</strong>
            <i class="about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque culpa, enim error excepturi nulla repellendus vitae.</i>
            <ul>
              <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-telegram" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
            </ul>
          </swiper-slide>
          <swiper-slide class="member">
            <img src="../../assets/logo.png" alt="">
            <span class="name">John Dou</span>
            <strong class="devel">Разработчик</strong>
            <i class="about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque culpa, enim error excepturi nulla repellendus vitae.</i>
            <ul>
              <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-telegram" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
            </ul>
          </swiper-slide>
          <swiper-slide class="member">
            <img src="../../assets/logo.png" alt="">
            <span class="name">John Dou</span>
            <strong class="devel">Разработчик</strong>
            <i class="about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque culpa, enim error excepturi nulla repellendus vitae.</i>
            <ul>
              <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-telegram" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
            </ul>
          </swiper-slide>
    </swiper>
    </div>
  </section>

</template>
<script>
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
        swiperOption: {
          slidesPerView: 3,
          paginationClickable: true,
          spaceBetween: 30,
          autoplay: 3500,
          breakpoints: {
            1024: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            780: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            520: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
        }
      }
    }
  }
</script>
<style lang="scss">
  .title__light{
    color: #f1f1f1;
    text-align: center;
    text-shadow: 1px 1px 3px #000;
  }
  .title__dark{
    text-shadow: 1px 1px 3px #f1f1f1;
    color: #35495e;
    text-align: center;
  }
  .member{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    &>img{
      height:140px;
    }
    strong{
      color: #f1f1f1;
    }
  }
  .members{
    display: flex;
    justify-content: space-around;
  }
  .member:nth-child(2n+1){padding:40px 0 0 0;}
  .member{
    .devel{
      font-size:12px;
      color: #35495e;
      width:100%;
      &:after{
        display: block;
        content: '';
        height: 1px;
        width:70%;
        margin: 10px auto;
        background: #35495e;
      }
    }
    .name{
      font-size:23px;
      font-weight:bold;

    }
    .about{
      font-size:16px;
      margin: 0 0 10px 0;
      padding: 0 20px;
      line-height: 20px;
    }
    ul{
      display: flex;
      justify-content: space-around;
      width:100%;
    }
    li{
      margin:0 10px;
      a{
        padding:0;
        i{
          font-size: 25px;
          color: #35495e;
          transition: all .4s;
          &:hover{
            color: #667eea;
          }
        }
      }
    }
  }
</style>
