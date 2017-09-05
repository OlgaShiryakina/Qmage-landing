<template>
  <section class="sectionInfo light_theme">
    <div class="container">
  <tabs animation="slide" :only-fade="false">
    <tab-pane label="Lorem">
      <section class="hero is-primary hero-body box-item">
          <div class="container">
            <h2 class="title">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h2>
            <h3 class="subtitle">
              Lorem ipsum dolor sit amet.
            </h3>
          </div>
        </section>
    </tab-pane>
    <tab-pane label="Lorem">
      <section class="hero is-primary hero-body box-item">
        <div class="container">
          <h2 class="title">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, atque..
          </h2>
          <h3 class="subtitle">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur..
          </h3>
        </div>
      </section>
    </tab-pane>
    <tab-pane label="Lorem">
      <section class="hero is-primary hero-body box-item">
        <div class="container">
          <h2 class="title">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor..
          </h2>
          <h3 class="subtitle">
            Lorem ipsum dolor sit amet Lorem ipsum dolor..
          </h3>
        </div>
      </section>
    </tab-pane>
  </tabs>
    </div>
  </section>
</template>
<script>
  import { Tabs, TabPane } from 'vue-bulma-tabs'

  export default {
    components: {
      Tabs,
      TabPane
    }
  }
</script>
<style lang="scss">

  .sectionInfo{
    padding:2rem 0;
  }
  .light_theme{
    background: #f0f0f0;
    padding: 2rem 20px;
  }
  .tabs li.is-active a{
    border-bottom-color: #667eea;
    color: #667eea;
  }
  .tab-content{
    margin: 0 !important;
  }
</style>
