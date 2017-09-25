<template>
  <section class="sectionForm dark-grad comments">
    <div class="container">
      <h2 class="title is-1 title__light">Form</h2>
      <form @submit.prevent="submit" class="comments__form">
        <div class="field" v-for="item in form">
          <span class="label">{{ item.label }}</span>
          <input v-model="item.data" type="text" required="required" class="input">
        </div>

        <div class="field">
          <a @click="addNew" class="button button-default">add new field</a>
        </div>
        <input class="button button-default" type="submit">
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        form: [
          {
            label: 'Name',
            data: ''
          },
          {
            label: 'Surname',
            data: ''
          },
          {
            label: 'Last Name',
            data: ''
          }
        ]
      }
    },
    methods: {
      resetData () {
        for (let [key, value] of this.form) {
          console.log(key, value)
        }
      },
      addNew () {

      }
    }
  }
</script>

<style lang="scss" scoped="">
  @import '../../scss/variables';
  .comments{
    strong, .label{
      color: inherit;
    }
  }
  .field{
    width: 400px;
    margin: 0 auto 15px;
    .button{
      width: 100%;
      padding: 9px 45px;
      margin-top: 21px;
    }
  }
</style>
