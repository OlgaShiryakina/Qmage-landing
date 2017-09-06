<template>
  <section id="sectionForm" class="sectionForm dark-grad">
    <div class="container">
      <div class="level">
        <p class="fast-start">Хотите быстрый старт?</p>
        <a href="javascript:void(0);" class="button button-send">Заказать</a>
      </div>
    </div>
  </section>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
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
  }
  .fast-start{
    color: $color4;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
  }
</style>
