<template>
  <section id="sectionInfo" class="sectionInfo light_theme">
    <div class="container">
  <tabs animation="slide" :only-fade="false">
    <tab-pane label="Lorem">
      <section class="hero is-primary hero-body box-item">
          <div class="level">
            <div class="level-left">
            <h2 class="title">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit.
            </h2>
            <h3 class="subtitle">
              Lorem ipsum dolor sit amet.
            </h3>
            </div>
            <div class="level-right">
              <h2 class="title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quam.
              </h2>
              <h3 class="subtitle">
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque dicta dolor dolore doloribus eos, et exercitationem non optio veritatis.
              </h3>
            </div>
          </div>
        </section>
    </tab-pane>
    <tab-pane label="Lorem">
      <section class="hero is-primary hero-body box-item">
        <div class="level">
          <div class="level-left">
            <h2 class="title">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h2>
            <h3 class="subtitle">
              Lorem ipsum dolor sit amet.
            </h3>
          </div>
          <div class="level-right">
            <h2 class="title">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h2>
            <h3 class="subtitle">
              Lorem ipsum dolor sit amet.
            </h3>
          </div>
        </div>
      </section>
    </tab-pane>
    <tab-pane label="Lorem">
      <section class="hero is-primary hero-body box-item">
        <div class="level">
          <div class="level-left">
            <h2 class="title">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h2>
            <h3 class="subtitle">
              Lorem ipsum dolor sit amet.
            </h3>
          </div>
          <div class="level-right">
            <h2 class="title">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h2>
            <h3 class="subtitle">
              Lorem ipsum dolor sit amet.
            </h3>
          </div>
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
    min-height:500px;
    .level{
      align-items: flex-start;
    }
  }

  .level{
    .subtitle{
      color: #6e717f !important;
    }
    .title{
      color: #35495e !important;
    }
  }
  .level-right{
    width:50%;
    flex-direction: column;
    align-items: flex-start;
  }
  .level-left{
    flex-direction: column;
    align-items: flex-start;
  }
  .light_theme{
    background: #f0f0f0;
    padding: 2rem 20px;
  }
  .tabs{
    margin: 0 25px 0 0;
  }
  .tabs li.is-active a{
    border-bottom-color: #667eea;
    color: #667eea;
  }
  .tab-content{
    margin: 0 !important;
  }
  .vue-bulma-tabs.is-layout-top{
    flex-direction: row !important;
  }
  .tabs ul{
    border: none;
    li{
      margin: 0 0 10px 0;
      padding: 0 20px;
      overflow: hidden;
    }
  }
  .tabs li.is-active a{
    background: #586FD9;
    color: #fff;
  }
  .tab-list{
    flex-direction: column;
  }
  .tabs a{
    border:none;
    background: #fff;
    border-radius: 5px;
  }
  .tabs li.is-active a{
    position: relative;
    &:before{
      display: block;
      content: '';
      top:40%;
      right: -5px;
      position: absolute;
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-left: 5px solid #586FD9;
      border-bottom: 5px solid transparent;
    }
  }
</style>
