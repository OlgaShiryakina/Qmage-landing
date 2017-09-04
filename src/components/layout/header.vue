<template>
  <header class="header">
    <img src="../../assets/logo.png" alt="">
    <nav>
      <ul>
        <li v-for="item in items"><a href="#">
          {{ item.navItem }}
        </a></li>
      </ul>
    </nav>
  </header>
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

<style scoped>
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
  }
  li{
    padding:10px 20px;
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }
</style>
