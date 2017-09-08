<template>
  <footer class="footer dark-grad">
    <div class="container level">
      <div class="footer__logo"><img src="../../assets/qpard-white.png" :alt="mainData.title"></div>
      <ul class="footer__phones">
        <li v-for="item in mainData.phones">
          <span class="icon is-small">
            <i class="fa fa-phone"></i>
          </span>
          {{ item.name }} : {{ item.phone }}
        </li>
        <li>
          <span class="icon is-small">
            <i class="fa fa-envelope-o"></i>
          </span>
          {{ mainData.email }}
        </li>
      </ul>
    </div>
  </footer>
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
    }
  }
</script>

<style lang="scss">
  @import '../../scss/variables';
  .footer{
    &__logo{
      width: 155px;
    }
    &__phones{

    }
  }
</style>
