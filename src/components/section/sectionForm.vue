<template>
  <section id="sectionForm" class="sectionForm dark-grad">
    <div class="container">
      <div class="level" v-show="!accordion">
        <p class="fast-start">Хотите быстрый старт?</p>
        <a href="javascript:void(0);" @click="accordion = true" class="button button-send">Заказать</a>
      </div>
      <div class="form" v-show="accordion">
        <form>
          <div class="contain">
          <input type="text" placeholder="name">
          <input type="email" placeholder="email">
          <textarea placeholder="Smth write..."></textarea>
          </div>
          <div class="contain">
            <input type="submit" class="button button-send">
            <input type="submit" class="button button-send" value="Отменить" @click="accordion = false">

          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        accordion: false
      }
    },
    computed: {
      ...mapGetters({
        mainData: 'getMainData'
      })
    }
  }
</script>
<style lang="scss">
  @import '../../scss/variables';
  .sectionForm{
    .level{
      align-items: center;
      .button-send{
        margin: 0;
        font-weight: bold;
        font-size: 17px;
        color: $color15;
        text-transform: uppercase;
        background: $color3;
        &:hover{
          border-color: $color12;

        }
      }
    }
    .level{
      margin:0;
    }
    .form{
      display: flex;
      form{
        display: flex;
        align-items: flex-start;
        width:100%;
        justify-content: space-between;
        input, textarea{
          margin: 0 5px 3px 0;
          height:35px;
          padding: 5px;
          border-radius: 5px;
          border:none;
          outline: none;

        }
        textarea{
          max-width: 204px;
          min-width:204px;
          max-height: 130px;
        }
        .button-send{
          background: $color3;
          text-transform: uppercase;
          font-weight:bold;
          padding: 5px 45px;
          &:hover{
            border-color: $color12;
            color: inherit;
          }
        }
        .contain{
          margin:0;
          padding:0;
          display: flex;
          align-items: flex-start;
          @include responsive(maxMedium){

            flex-wrap: wrap;
          }
        }
      }
    }
  }
  .fast-start{
    color: $color4;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
  }
</style>
