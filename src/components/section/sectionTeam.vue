<template>
  <section id="sectionTeam" class="sectionTeam light_theme">
    <div class="container">
      <h2 class="title is-1 title__dark">Стать частью нашей команды</h2>

      <div class="form-resume">
        <form>
          <textarea name="" id="" cols="30" rows="10" placeholder="Напишите что-нибудь про себя"></textarea>
          <label class="file_upload">
            <span class="button-send">Выбрать</span>
            <mark>Файл не выбран</mark>
            <input type="file">
          </label>
          <input class="button-send" type="submit">
        </form>
      </div>
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
  @import '../../scss/variables';
  .sectionTeam{
    text-align: center;
    position: relative;
    overflow: hidden;
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
      color: $color4;
    }
  }
  .members{
    display: flex;
    justify-content: space-around;
  }
  .member{
    .devel{
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
  .form-resume{
    display: flex;
    justify-content: center;
    margin: 0 0 40px 0;
    form{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding:30px 25px;
      position: relative;
      box-shadow: 0px 5px 19px -7px #000;

      textarea{
        resize: none;
        margin: 0 0 20px 0;
        border-radius: 7px;
        background: $color7;
        padding: 6px 10px;
        outline: none;
        color: $color8;
        font-size: 20px;
      }
      mark{
        font-size: 13px;
        background: transparent;
        color: $color5;
        cursor: pointer;
      }
      input{
        cursor: pointer;
      }
      .button-send{
        cursor: pointer;
        background: $color1;
      }
    }

  }
  input[type="file"]{
    display: none;
  }
</style>
