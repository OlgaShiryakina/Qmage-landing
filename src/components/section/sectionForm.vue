<template>
  <section id="sectionForm" class="sectionForm dark-grad">
    <div class="container">
      <h2 class="title is-1 title__light">{{ team.form.title }}</h2>
      <div class="columns">
        <div class="column">
          <p>На відміну від поширеної думки Lorem Ipsum не є випадковим набором літер. Він походить з уривку класичної латинської літератури 45 року до н.е., тобто має більш як 2000-річну історію. Річард Макклінток, професор латини з коледжу Хемпдін-Сидні, що у Вірджінії, вивчав одне з найменш зрозумілих латинських слів - consectetur - з уривку Lorem Ipsum, і у пошуку цього слова в класичній літературі знайшов безсумнівне джерело.Існує багато варіацій уривків з Lorem Ipsum, але більшість з них зазнала певних змін на кшталт жартівливих вставок або змішування слів, які навіть не виглядають правдоподібно. </p>
          <ol>
            <li>Розробник</li>
            <li>менеджер</li>
            <li>Розробник</li>
            <li>менеджер</li>
            <li>Розробник</li>
            <li>менеджер</li>
          </ol>
          <p>Якщо ви збираєтесь використовувати Lorem Ipsum, ви маєте упевнитись в тому, що всередині тексту не приховано нічого, що могло б викликати у читача конфуз. Більшість відомих генераторів Lorem Ipsum в Мережі генерують текст шляхом повторення наперед заданих послідовностей Lorem Ipsum. Принципова відмінність цього генератора робить його першим справжнім генератором Lorem Ipsum. Він використовує словник з більш як 200 слів латини та цілий набір моделей речень - це дозволяє генерувати Lorem Ipsum, який виглядає осмислено. Таким чином, згенерований Lorem Ipsum не міститиме повторів, жартів, нехарактерних для латини слів і т.ін.Класичний текст, використовуваний з XVI сторіччя, наведено нижче для всіх зацікавлених. Також точно за оригіналом наведено розділи 1.10.32 та 1.10.33 цицеронівського "de Finibus Bonorum et Malorum" разом із перекладом англійською, виконаним 1914 року Х.Рекемом.</p>
        </div>
        <ol v-for="candidate in candidates">
          <li>{{ candidates.name }}</li>
          <li></li>
        </ol>
        <div class="column">
          <form class="form box">
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
        this.$store.commit('newResume', this.formData)
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
