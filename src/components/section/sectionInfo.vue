<template>
  <section id="sectionInfo" class="sectionInfo light_theme">
    <div class="container">
  <tabs animation="slide" :only-fade="false">
    <tab-pane v-for="item in mainInfo.items" :label="item.link">
      <section class="hero is-primary hero-body box-item">
        <div class="level">
          <div class="level-left">
            <h2 class="title">{{ item.title }}</h2>
            <div v-html="item.text"></div>
          </div>
        </div>
        </section>
    </tab-pane>
  </tabs>
    </div>
  </section>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { Tabs, TabPane } from 'vue-bulma-tabs'

  export default {
    components: {
      Tabs,
      TabPane
    },
    computed: {
      ...mapGetters({
        mainInfo: 'getMainInfo'
      })
    }
  }
</script>
<style lang="scss">
  @import '../../scss/variables';
  .sectionInfo{
    padding:2rem 0;
    min-height:500px;
    .level{
      align-items: flex-start;
    }
    .list-items{
      color: $color5;
      list-style: disc;
      padding: 5px 0 5px 15px;
      font-size: 15px;
    }
    @include responsive(maxTablet){
      .title{
        font-size: 20px;
      }
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
    width:100%;
    flex-direction: column;
    align-items: flex-start;
    @include responsive(maxTablet){
      width: 100%;
    }
  }
  .level-left{
    flex-direction: column;
    align-items: flex-start;
    width:100%;
    @include responsive(maxTablet){
      width: 100%;
    }
  }

  .light_theme{
    background: $color13;
    padding: 2rem 0;
  }
  .tabs{
    margin: 0 25px 0 0;
    @include responsive(maxTablet){
      margin: 0;
    }
  }
  .tabs a{
    width: 100%;
    height: 100%;
    @include responsive(maxPhone){
      padding: 2px;
      font-size: 14px;
      line-height: 1.3;

    }
  }
  .tabs li.is-active a{
    border-bottom-color: #667eea;
    color: $color1;
  }
  .tab-content{
    margin: 0 !important;
  }
  .vue-bulma-tabs.is-layout-top{
    flex-direction: row !important;
    @include responsive(maxTablet){
      flex-direction: column !important;

    }
  }
  .tabs ul{
    border: none;
    align-items: flex-end;
    @include responsive(maxTablet){
      flex-direction: row;
      overflow: hidden;
      width: 100%;
      justify-content: space-between;
    }
    li{
      margin: 0 0 10px 0;
      padding: 0 20px;
      overflow: hidden;
      max-width: 235px;
      text-align: center;
      font-weight: bold;
      width:100%;
      @include responsive(maxTablet){
        width: 33%;
        height: 90%;
        padding: 7px 1px;
      }
      span{
        white-space: normal;
        word-break: break-word;
      }
    }
  }
  .tabs li.is-active a{
    background: $color14;
    color: $color0;
  }
  .tab-list{
    flex-direction: column;
  }
  .tabs a{
    border:none;
    background: $color0;
    border-radius: 5px;
    @include responsive(maxTablet){
      width: 100%;
    }
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
      border-left: 5px solid $color14;
      border-bottom: 5px solid transparent;
      @include responsive(maxTablet) {
        bottom: -5px;
        top:initial;
        left: calc(50% - 5px);
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid $color14;
        border-bottom:initial;
      }
      }
    }

</style>
