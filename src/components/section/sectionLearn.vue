<template>
  <section class="sectionForm dark-grad comments">
    <div class="container">
      <h2 class="title is-1 title__light">Form</h2>
      <form @submit.prevent="submit" class="comments__form">
        <div class="comments__container">
          <div class="field" v-for="item in fields">
            <span class="label">{{ item.label }}</span>
            <input v-model="item.data" type="text" required="required" class="input">
          </div>
        </div>

        <div class="comments__custom" v-if="customFields">
          <div class="comments__custom__item" v-for="item in customFields">
            <div class="field">
              <span class="label">{{ customLabels.first }}</span>
              <input v-model="item.name" type="text" required="required" class="input">
            </div>
            <div class="field">
              <span class="label">{{ customLabels.second }}</span>
              <input v-model="item.data" type="text" required="required" class="input">
            </div>
          </div>
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
        fields: [
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
        ],
        customFields: [],
        customLabels: {
          first: 'Field name',
          second: 'Field data'
        }
      }
    },
    methods: {
      resetData () {
        for (let [key, value] of this.fields) {
          console.log(key, value)
        }
      },
      addNew () {
        this.customFields.push({
          label: 'Name',
          data: ''
        })
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
    &__custom{
      &__item{
        border: 1px solid #000;
        padding: 15px;
      }
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
