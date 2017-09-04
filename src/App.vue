<template>
  <div id="app">
    <header>
    <router-view></router-view>
    </header>
    <main class="main">
      <section class="sectionTop"></section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
  @import '~bulma';

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
  padding:100px 20px 0;
}

header {
  margin: 0;
  padding: 0 16px 0 24px;
  background-color: #a0d4dc;
  color: #ffffff;
}
.header{
  display: flex;
  justify-content: space-between;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
