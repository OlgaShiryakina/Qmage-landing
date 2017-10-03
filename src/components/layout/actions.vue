<template>
  <div class="actions" v-on-clickaway="away">
    <a class="fa fa-cog actions-link" @click="myClick"></a>
    <div class="actions-container">
      <a class="fa fa-pencil"></a>
      <a class="fa fa-trash"></a>
    </div>
  </div>
</template>

<script>
//  import { mapGetters } from 'vuex'
  import { directive as onClickaway } from 'vue-clickaway'

  export default{
    directives: {
      onClickaway: onClickaway
    },
    data () {
      return {
      }
    },
    mounted: function () {
      // Attach event listener to the root vue element
//      document.addEventListener('click', this.onClick)
      // this.$el.addEventListener('click', this.onClick)
    },
    beforeDestroy: function () {
//      document.removeEventListener('click', this.onClick)
      // this.$el.removeEventListener('click', this.onClick)
    },
    methods: {
      toggleActions () {
        console.log('toggleActions')
        this.$el.classList.toggle('open')
      },
      onClick: function (e) {
//        console.log(ev.offsetX, ev.offsetY)
        if (this.$el === e.target.parentElement) {
          console.log('if onClick')
        } else {
          this.$el.classList.remove('open')
        }
        console.log('onClick', this.$el, e.target.parentElement)
      },
      myClick: function (e) {
        this.$el.classList.add('open')
        console.log('You clicked on me!', this.$el, e.target.parentElement)
      },
      away: function (e) {
        this.$el.classList.remove('open')
        console.log('You clicked away...', this.$el, e.target.parentElement)
      }
    }
  }
</script>

<style lang="scss">
  .actions{
    $actionWidth: 30px;

    position: relative;
    display: inline-block;
    a{
      text-decoration: none;
      width: $actionWidth;
      height: $actionWidth;
      line-height: $actionWidth;
      display: inline-block;
      vertical-align: middle;
      &:hover{text-decoration: none;}
    }
    &-link{
      height: $actionWidth + 2px !important;
    }
    &-container{
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      border-radius: 5px;
      justify-content: center;
      background: #fff;
      border: 1px solid #ededed;
      .open &{display: inline-flex;}
      &>*{
        &:nth-child(n+2){
          margin-left: 10px;
        }
      }
    }
  }
</style>
