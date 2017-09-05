<template>
  <section class="sectionTop dark-grad">
    <div class="container">
      <h2 class="title is-1 title__light">Lorem ipsum set</h2>
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
      <div class="hero is-primary hero-body box-item">
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
  export default {
  }
</script>
<style lang="scss">
  .level-left{
    width:50%;
  }

  .title__light, .title__dark{
      &:after{
        display: block;
        content: '';
        height: 8px;
        width:100px;
        background: #667eea;
        margin: 10px auto;
      }
    }

  .dark-grad{
    color: #fff;
    padding:2rem 20px;
    position: relative;
    &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: .8;
      background: linear-gradient(to bottom, #202226 0%, #131313 100%);

    }
  }
  .subtitle{
    color: #f1f1f1;
  }
  .hero.is-primary{
    background: #fff;

    .title{
      color: #333333;
    }
    .subtitle{
      color: #9e9e9e;
    }
  }
  .box-item{
    border-radius: 10px;
    box-shadow: 0 7px 99px 0 rgba(58, 60, 65, 0.1);
    border: 1px solid #ededed;
  }
</style>
