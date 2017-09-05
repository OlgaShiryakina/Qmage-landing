<template>
  <section class="sectionTop dark-grad">
    <div class="container">
      <h1 class="title">mainData.title</h1>
      <div class="level">
        <div class="level-left">
          <div class="level-item">Lorem ipsum dolor sit.</div>
          <p class="subtitle is-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, architecto dolore eius eos illo iste iusto mollitia nisi quis voluptatibus.</p>
        </div>
        <div class="level-right">
          <div class="level-item">
            <div class="field has-addons">
              <p class="control">
                <input class="input" type="text" placeholder="Something good">
              </p>
              <p class="control">
                <button class="button">
                  Click
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="hero is-primary hero-body">
          <div class="container">
            <h1 class="title">
              Lorem ipsum dolor!
            </h1>
            <h2 class="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at consequuntur cum cupiditate, debitis eligendi id impedit magni neque quas suscipit veritatis. Facilis nesciunt porro provident quaerat quia veritatis voluptas!
            </h2>
          </div>
      </div>
    </div>
  </section>
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
  .level-left{
    width:50%;
  }
  .sectionTop{
    padding:2rem 0;
  }
  .dark-grad{
    background: linear-gradient(to bottom, #a0a0a0 0%, #d0d0d0 100%);
    color: #fff;
  }
  .sectionTop{
    background: url("../../assets/bg.jpg") center bottom no-repeat;
    background-size: 100% auto;
    position: relative;
    &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, #2d2d2d 0%, #000000 100%);
      opacity: .9;
    }
  }
</style>
