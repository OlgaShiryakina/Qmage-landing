<template>
  <div class="header">
    <img src="../assets/logo.png" alt="">
    <nav>
      <ul>
        <li v-for="item in items"><a href="#">
          {{ item.navItem }}
        </a></li>
      </ul>
    </nav>
  </div>
</template>




<script>
  export default{
    name: 'header',
    data () {
      return {
        msg: 'Hello',
        items: [
          {navItem: 'Item1'},
          {navItem: 'Item2'},
          {navItem: 'Item3'},
          {navItem: 'Item4'},
          {navItem: 'Item5'}
        ]
      }
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
