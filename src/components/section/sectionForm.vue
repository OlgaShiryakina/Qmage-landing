<template>
  <section id="sectionForm" class="sectionForm dark-grad">
    <div class="container">
      <div class="level">
        <p>Хотите быстрый старт?</p>
        <a href="javascript:void(0);" class="button">Заказать</a>
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

  }
</style>
