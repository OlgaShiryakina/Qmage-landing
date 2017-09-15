<template>
  <section id="sectionTop" class="sectionTop dark-grad">
    <div class="container level">
      <div>
        <h1>{{ mainData.title }}</h1>
        <div class="sectionTop__slogan" v-html="mainData.slogan"></div>
      </div>
      <form @submit.prevent="submit" class="form box">
        <h3 class="form__title" v-html="formSubscribe.title"></h3>
        <div class="field">
          <input required title="наприклад main@mail.com" pattern="^[^@]+@[^@.]+\.[^@]+$" class="input" type="email" placeholder="Email" v-model="newSubscribe">
        </div>
        <button class="button button-default">{{ formSubscribe.button }}</button>
        <div :class="{ show: show }" class="form__message">
          <div v-if="successEmail" v-html="formSubscribe.success"></div>
          <div v-else v-html="formSubscribe.error"></div>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default{
    data () {
      return {
        newSubscribe: '',
        successEmail: false,
        show: false
      }
    },
    created: function () {
      this.resetSubscription()
    },
    computed: {
      ...mapGetters({
        mainData: 'getMainData',
        formSubscribe: 'getSubscribe',
        subscribers: 'getSubscribers'
      })
    },
    methods: {
      submit () {
//        let email = this.newSubscribe.replace(/(^\s*)|(\s*)$/g, '')
        let equality = this.checkEquality()

        if (equality) {
          this.successEmail = true
          this.$store.dispatch('addSubscriber', this.newSubscribe)
        } else {
          this.successEmail = false
        }

        this.showMessage()
        this.resetSubscription()
      },
      resetSubscription () {
        this.newSubscribe = ''
      },
      checkEquality () {
        for (let i in this.subscribers) {
          if (this.subscribers[i] === this.newSubscribe) {
            return false
          }
        }
        return true
      },
      showMessage () {
        let vm = this
        vm.show = true
        setTimeout(function () {
          vm.show = false
        }, 3000)
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
      font-family: $titleFont;
      @include responsive(minMedium){
        font-size: 20px;
      }
      @include responsive(tablet){
        font-size: 18px;
      }
    }
  }
</style>
