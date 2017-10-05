<template>
  <section class="dark-grad comments">
    <div class="container">
      <h2 class="title is-1 title__light">Form</h2>
      <form @submit.prevent="submit" class="comments__form">
        <div class="comments__container">
          <div class="field" v-for="(item, index) in fields">
            <actions v-if="item.editable" :index="index"></actions>
            <span class="label">{{ item.label }} {{ item.required }}</span>
            <input v-model="item.data" type="text" class="input" :required="item.required">
          </div>
        </div>

        <div class="comments__custom" v-if="customFields">
          <div class="comments__custom__item" v-for="item in customFields">
            <div class="field">
              <span class="label">{{ customLabels.first }}</span>
              <input v-model="item.label" type="text" class="input">
            </div>
            <div class="field">
              <span class="label">{{ customLabels.second }}</span>
              <input v-model="item.data" type="text" class="input">
            </div>
          </div>
        </div>
        <div class="buttons is-flex">
          <input class="button button-default" type="submit">
          <a @click="addNew" class="button button-default">Add new field</a>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  import actions from '@/components/layout/actions.vue'

  export default {
    components: {
      actions
    },
    data () {
      return {
        customFields: [],
        customLabels: {
          first: 'Field name',
          second: 'Field data'
        }
      }
    },
    computed: {
      ...mapGetters({
        fields: 'getFields'
      })
    },
    mounted () {
//      window.localStorage.setItem('myData', JSON.stringify(this.customLabels))
      let defaultToken = JSON.parse(window.localStorage.getItem('myData'))
      if (defaultToken) {
        this.$store.dispatch('setField', defaultToken)
//        JSON.parse(localStorage.getItem('default_auth_token') || '[]')
//        window.localStorage.removeItem('myData')
        console.log(true, window.localStorage['myData'])
      } else {
        console.log(false, window.localStorage['myData'])
      }
    },
    methods: {
      resetData () {
//        for (let [key, value] of this.fields) {
//          console.log(key, value)
//        }
        this.customFields = []
      },
      addNew () {
        this.customFields.push({
          label: '',
          data: '',
          required: false,
          editable: true
        })
      },
      submit () {
        let formData = [...this.fields, ...this.customFields]
        console.log(formData)
        this.$store.dispatch('setField', formData)
        window.localStorage.setItem('myData', JSON.stringify(formData))
        this.resetData()
      },
      openActions (e) {
        e.target.parentElement.classList.add('open')
      },
      deleteItem (i) {
        console.log(i, this.$store)
      }
    }
  }
</script>

<style lang="scss" scoped="">
  @import '../../scss/variables';
  .comments{
    background-image: url("../../assets/bg1.jpg");
    @extend .imageCoverFixed;
    strong, .label{
      color: inherit;
    }
    &__custom{
      &__item{
        border: 1px solid #000;
        padding: 15px;
      }
    }
  }
  .field, .buttons{
    width: 400px;
    margin: 0 auto 15px;
  }
  .buttons{
    margin-top: 21px;
    justify-content: space-between;
    .button{
      width: 45%;
      padding: 9px 45px;
    }
  }
</style>
