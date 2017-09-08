<template>
  <section id="sectionForm" class="sectionForm dark-grad">
    <div class="container">
      <div class="level" v-show="!accordion">
        <p class="fast-start">Хотите быстрый старт?</p>
        <a href="javascript:void(0);" @click="accordion = true" class="button button-send">Заказать</a>
      </div>
      <div class="form" v-show="accordion">
        <div class="form-resume">
          <form>
            <textarea v-model="team.form.message" placeholder="Супровідний текст"></textarea>
            <label class="file_upload">
              <i class="fa fa-paperclip" aria-hidden="true"></i>
              <span v-if="team.form.fileName">{{ team.form.fileName }}</span>
              <span v-else>Выберите файл</span>
              <input  @change="onFileChange" type="file">
            </label>
            <input class="button-send" type="submit">
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
        accordion: false
      }
    },
    computed: {
      ...mapGetters({
        mainData: 'getMainData',
        team: 'getTeam'
      })
    },
    methods: {
      onFileChange (e) {
        let files = e.target.files || e.dataTransfer.files
        if (!files.length) {
          return
        }
        this.team.form.fileName = files[0].name
        this.createImage(files[0])
      },
      createImage (file) {
        let reader = new FileReader()
        let vm = this
        reader.onload = (e) => {
          vm.team.form.file = e.target.result
        }
        reader.readAsDataURL(file)
      }
    }
  }
</script>
<style lang="scss">
  @import '../../scss/variables';
  .sectionForm{
    background-image: url("../../assets/bg1.jpg");
    @extend .imageCoverFixed;
    .level{
      align-items: center;
      margin:0;
      .button-send{
        margin: 0;
        font-weight: bold;
        font-size: 17px;
        color: $color15;
        text-transform: uppercase;
        background: $color3;
        &:hover{
          border-color: $color12;

        }
      }
    }
    .form{
      display: flex;
      form{
        display: flex;
        align-items: flex-start;
        width:100%;
        justify-content: space-between;
        input, textarea{
          margin: 0 5px 3px 0;
          height:35px;
          padding: 5px;
          border-radius: 5px;
          border:none;
          outline: none;

        }
        textarea{
          max-width: 204px;
          min-width:204px;
          max-height: 130px;
        }
        .button-send{
          background: $color3;
          text-transform: uppercase;
          font-weight:bold;
          padding: 5px 45px;
          &:hover{
            border-color: $color12;
            color: inherit;
          }
        }
        .contain{
          margin:0;
          padding:0;
          display: flex;
          align-items: flex-start;
          @include responsive(maxMedium){

            flex-wrap: wrap;
          }
        }
      }
    }
    .file_upload{
      border: 2px dashed #e1e1e1;
      color: rgba(255, 255, 255, 0.702);
      padding: 0 10px;
      margin: 0 0 20px 0;
      height: 55px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      word-break: break-all;
      i{
        margin: 0 10px 0 0;
      }
    }
  }
  .fast-start{
    color: $color4;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
  }
</style>
