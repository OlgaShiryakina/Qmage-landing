<template>
  <section id="sectionForm" class="sectionForm dark-grad">
    <div class="container">
      <h2 class="title is-1 title__light">{{ team.form.title }}</h2>
      <div class="columns">
        <div class="column">
          <div></div>
          <ol>
            <li>Розробник</li>
            <li>менеджер</li>
            <li>Розробник</li>
            <li>менеджер</li>
            <li>Розробник</li>
            <li>менеджер</li>
          </ol>
          <ul>
            <li v-for="candidate in candidates">
              <div>{{ candidate.name }}</div>
            </li>
          </ul>
        </div>
        <div class="column">
          <form ref="candidateForm" class="form box">
            <h3 class="form__title">Відправляй резюме</h3>
            <div class="field">
              <span class="label">Iм'я</span>
              <input v-model="formData.name" type="text" class="input">
            </div>
            <div class="field">
              <span class="label">Email</span>
              <input v-model="formData.email" type="email" class="input">
            </div>
            <div class="field">
              <span class="label">Супровідний текст</span>
              <textarea v-model="formData.message" class="textarea"></textarea>
            </div>
            <div class="field">
              <span class="label"> </span>
              <label class="file_upload">
                <i class="fa fa-paperclip" aria-hidden="true"></i>
                <span v-if="formData.fileName">{{ formData.fileName }}</span>
                <span v-else>Додати файл резюме</span>
                <input  @change="onFileChange" type="file">
              </label>
            </div>
            <input class="button button-default" type="submit" @click.prevent="sendResume">
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        formData: {
          name: '',
          email: '',
          message: '',
          file: '',
          fileName: ''
        }
      }
    },
    computed: {
      ...mapGetters({
        mainData: 'getMainData',
        team: 'getTeam',
        candidates: 'getCandidates'
      })
    },
    methods: {
      onFileChange (e) {
        let files = e.target.files || e.dataTransfer.files
        if (!files.length) {
          return
        }
        this.formData.fileName = files[0].name
        this.createImage(files[0])
      },
      createImage (file) {
        let reader = new FileReader()
        let vm = this
        reader.onload = (e) => {
          vm.formData.file = e.target.result
        }
        reader.readAsDataURL(file)
      },
      sendResume () {
        this.$store.dispatch('newResume', this.formData)
        this.resetData()
        console.log('sendResume', this.formData)
      },
      resetData () {
        this.formData = {
          name: '',
          email: '',
          message: '',
          file: '',
          fileName: ''
        }
      }
    }
  }
</script>
<style lang="scss">
  @import '../../scss/variables';
  .sectionForm{
    background-image: url("../../assets/bg1.jpg");
    @extend .imageCoverFixed;
    .column:last-child{
      flex: 0 0 auto;
    }
    .button-default{
      text-transform: uppercase;
      font-weight:bold;
      padding: 5px 45px;
    }
    .file_upload{
      border: 2px dashed #e1e1e1;
      color: $color2;
      padding: 0 10px;
      margin: 20px 0;
      height: 55px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      word-break: break-all;
      position: relative;
      input{
        position: absolute;
        z-index: -1;
        opacity: 0;
        width: 0;
        height: 0;
      }
      i{
        margin: 0 10px 0 0;
        color: $color16;
      }
      span{
        max-width: calc(100% - 40px);
        max-height: 46px;
        overflow: hidden;
        line-height: 1.2;
      }
    }
  }
</style>
