<template>
  <section id="sectionTeam" class="sectionTeam dark-grad">
    <div class="container">
      <h2 class="title is-1 title__light">OUR TEAM</h2>
        <div class="container members">
          <div class="member">
            <img src="../../assets/logo.png" alt="">
            <strong>Разработчик</strong>
            <span>John Dou</span>
            <ul>
              <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
            </ul>
          </div>
          <div class="member">
            <img src="../../assets/logo.png" alt="">
            <strong>Разработчик</strong>
            <span>John Dou</span>
            <ul>
              <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
            </ul>
          </div>
          <div class="member">
            <img src="../../assets/logo.png" alt="">
            <strong>Разработчик</strong>
            <span>John Dou</span>
            <ul>
              <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
    </div>
  </section>

</template>
<script>
  require('swiper/dist/css/swiper.css')
  export default {
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 30,
          keyboardControl: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev'
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
    color: #292525;
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
  .member:nth-child(2n+1){
    padding:40px 0 0 0;
  }
  .member{
    strong{
      font-size:28px;
    }
    span{
      font-size:17px;
    }
    ul{
      display: flex;
      justify-content: space-around;
      width:100%;
    }
    li{
      a{
        padding:0;
        i{
          font-size: 25px;
          color: #f1f1f1;
          transition: all .4s;
          &:hover{
            color: #667eea;
          }
        }
      }
    }

  }
</style>
