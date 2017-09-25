<template>
  <section class="sectionForm dark-grad comments">
    <div class="field" v-for="item in form">
      <input v-model="item.data" type="text" required="required" class="input">
      <input v-model="item.data" type="text" required="required" class="input">
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped="">
  @import '../../scss/variables';
</style>
