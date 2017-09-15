<template>
  <footer class="footer dark-grad">
    <div class="container level">
      <div class="footer__logo"><img src="../../assets/qpard-white.png" :alt="mainData.title"></div>
      <ul class="footer__phones">
        <li v-for="item in mainData.phones">
          <span class="icon is-small">
            <i class="fa fa-phone"></i>
          </span>
          <strong>{{ item.name }} :</strong>
          <span>{{ item.phone }}</span>
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
    &.dark-grad{
      padding: 20px 0;
    }
    &__logo{
      width: 155px;
      @include responsive(maxTablet){margin: 0 auto;}
    }
    &__phones{
      margin: 0;
      @include responsive(maxTablet){margin: 20px auto 0;display: table;}
      strong{
        color: inherit;
        width: 42px;
        display: inline-block;
      }
    }
  }
</style>
