<template>
  <section class="sectionTeam">
    <div class="container">
      <h2 class="title is-1">OUR TEAM</h2>
        <div class="container members">
          <div class="member">
            <img src="../../assets/logo.png" alt="">
            <strong>Разработчик</strong>
            <span>John Dou</span>
            <ul>
              <li><a href="#"><img src="https://maxcdn.icons8.com/Color/PNG/512/Logos/instagram_new-512.png" alt=""></a></li>
              <li><a href="#"><img src="https://g.twimg.com/about/feature-corporate/image/twitterbird_RGB.png" alt=""></a></li>
            </ul>
          </div>
          <div class="member">
            <img src="../../assets/logo.png" alt="">
            <strong>Разработчик</strong>
            <span>John Dou</span>
            <ul>
              <li><a href="#"><img src="https://maxcdn.icons8.com/Color/PNG/512/Logos/instagram_new-512.png" alt=""></a></li>
              <li><a href="#"><img src="https://g.twimg.com/about/feature-corporate/image/twitterbird_RGB.png" alt=""></a></li>
            </ul>
          </div>
          <div class="member">
            <img src="../../assets/logo.png" alt="">
            <strong>Разработчик</strong>
            <span>John Dou</span>
            <ul>
              <li><a href="#"><img src="https://maxcdn.icons8.com/Color/PNG/512/Logos/instagram_new-512.png" alt=""></a></li>
              <li><a href="#"><img src="https://g.twimg.com/about/feature-corporate/image/twitterbird_RGB.png" alt=""></a></li>
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
.member{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &>img{
    height:140px;
  }
}
  .members{
    display: flex;
    justify-content: space-around;
  }

.member:nth-child(2n+1){
  padding:40px 0 0 0;
}
  ul{
    display: flex;
    justify-content: space-around;
    width:100%;
  }
  li{
    a{
      padding:0;
      img{
        height:20px;
      }
    }
  }
</style>
