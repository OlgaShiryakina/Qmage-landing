<template>
  <footer class="footer level">
    <div class="footer__logo"><img src="../../assets/logo.png" :alt="mainData.title"></div>
    <ul class="footer__phones">
      <li v-for="item in mainData.phones">
        <span class="icon">
          <i class="fa fa-phone-o"></i>
        </span>
        {{ item.phone }}
      </li>
      <li>
        <span class="icon">
          <i class="fa fa-envelope-o"></i>
        </span>
        {{ mainData.email }}
      </li>
    </ul>
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

<style>
  header{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }
  nav ul{
    display: flex;
    justify-content: space-around;
    list-style: none;
    height:100%;
    margin:0;

  }
  img{
    height:80px;
  }
  a{
    color: #124442;
    text-decoration: none;
    padding:10px 20px;
    display: flex;
    align-items: center;
    height:100%;
  }
  li{

    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }
  .hero{
    align-items: center;
    flex-direction: row;
  }
</style>
