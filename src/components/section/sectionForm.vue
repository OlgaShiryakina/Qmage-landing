<template>
  <section id="sectionForm" class="sectionForm dark-grad">
    <div class="container">
      <div class="level">
        <p class="fast-start">Хотите быстрый старт?</p>
        <a href="javascript:void(0);" class="button button-send button-blue-dark">Заказать</a>
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
  .sectionForm{
    .level{
      align-items: center;
      .button-send{
        margin: 0;
        font-weight: bold;
        font-size: 17px;
        color: #f2f2f2;
        text-transform: uppercase;
      }
    }
  }
  .fast-start{
    color: #f1f1f1;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
  }
</style>
