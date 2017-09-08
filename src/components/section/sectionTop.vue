<template>
  <section id="sectionTop" class="sectionTop dark-grad">
    <div class="container level">
      <div>
        <h1>{{ mainData.title }}</h1>
        <div class="sectionTop__slogan" v-html="mainData.slogan"></div>
      </div>
      <form id="subscribe" class="form box">
        <h3 class="form__title">{{ mainData.sendMail.title }}</h3>
        <span>{{ mainData.sendMail.placeholder }}</span>
        <div class="field">
          <input required title="например main@mail.com" pattern="^[^@]+@[^@.]+\.[^@]+$" class="input" type="email" placeholder="Email" v-model="mainData.sendMail.input">
        </div>
        <button form="subscribe" class="button button-default" @click="sendMailTo(mainData.sendMail.input)">{{ mainData.sendMail.button }}</button>
      </form>
    </div>
  </section>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default{
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters({
        mainData: 'getMainData'
      })
    },
    methods: {
      sendMailTo (value) {
        const reg = '^[^@]+@[^@.]+\\.[^@]+$'
        let result = value.match(reg)
        if (result) {
          console.log('sendMailTo send')
          this.$store.dispatch('addContact', result[0])
        } else {
          console.log('sendMailTo error')
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../../scss/variables';
  .level-left{
    width:50%;
  }
  .subtitle{
    color: $color4;
  }
  .hero.is-primary{
    background: $color0;

    .title{
      color: $color9;
    }
    .subtitle{
      color: $color10;
    }
  }
  .box-item{
    border-radius: 10px;
    box-shadow: 0 7px 99px 0 rgba(58, 60, 65, 0.1);
    border: 1px solid $color11;
  }
  .sectionTop{
    background-image: url("../../assets/bg1.jpg");
    @extend .imageCoverFixed;
    padding-top: $headerHeight;
    .button-default{
      background: $color3;
      border-color: $color12;
      color: $color4;
      display: flex;
      align-items: center;
    }
    .container{
      padding-top: 10%;
      @include responsive(minTablet){padding-bottom: 10%;}
    }
    &__slogan{
      @include responsive(minMedium){
        font-size: 20px;
        line-height: 0.8;
        letter-spacing: 4px;
        margin: -9px 0 0 3px;
        text-align: justify;
        -moz-text-align-last: justify;
        text-align-last: justify;
      }
      @include responsive(tablet){
        font-size: 18px;
        line-height: 0.9;
        letter-spacing: 2px;
        margin: -5px 0 0 3px;
      }
    }
  }
</style>
