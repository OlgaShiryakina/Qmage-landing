<template>
  <div class="actions" v-on-clickaway="closeActions">
    <a class="fa fa-cog actions-link" @click="openActions"></a>
    <div class="actions-container">
      <a class="fa fa-pencil"></a>
      <a class="fa fa-trash" @click="someDelete"></a>
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
    props: ['index'],
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
      onClick (e) {
//        console.log(ev.offsetX, ev.offsetY)
        if (this.$el === e.target.parentElement) {
          console.log('if onClick')
        } else {
          this.$el.classList.remove('open')
        }
        console.log('onClick', this.$el, e.target.parentElement)
      },
      openActions (e) {
        this.$el.classList.add('open')
      },
      closeActions (e) {
        this.$el.classList.remove('open')
      },
      someDelete () {
        this.$parent.$options.methods.deleteItem(this)
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
