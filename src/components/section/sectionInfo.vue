<template>
  <section class="sectionInfo">
    <div class="container">
  <tabs animation="slide" :only-fade="false">
    <tab-pane label="Lorem">
      <section class="hero is-medium is-primary is-bold hero-body">
          <div class="container">
            <h1 class="title">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h1>
            <h2 class="subtitle">
              Lorem ipsum dolor sit amet.
            </h2>
          </div>
        </section>
    </tab-pane>
    <tab-pane label="Ipsum">
      <section class="hero is-primary hero-body">
          <div class="container">
            <h1 class="title">
              Lorem ipsum dolor.
            </h1>
            <h2 class="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam culpa distinctio neque placeat quae quasi sint soluta velit veritatis!
            </h2>
        </div>
      </section>
    </tab-pane>
    <tab-pane label="Dolor" selected>
      <section class="hero is-primary hero-body">
          <div class="container">
            <h1 class="title">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus est numquam, perferendis quasi quis rem.
            </h1>
            <h2 class="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque laboriosam nostrum, quisquam totam velit voluptatum. A aliquid, commodi et hic in ipsum magni modi nesciunt pariatur, totam ullam vel voluptatibus!
            </h2>
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
    background: #f0f0f0;
    padding:2rem 0;
  }

</style>
