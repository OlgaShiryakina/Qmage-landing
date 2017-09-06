import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    mainData: {
      title: 'Console24',
      slogan: 'Повний і легкий контроль за <br> вашої електронною комерцією!',
      sendMail: {
        title: 'Дізнайся про дату запуску першим',
        placeholder: 'Ми повідомимо тобі поштою',
        input: '',
        button: 'отримати повідомлення поштою'
      },
      phones: [
        {
          name: 'MTC',
          phone: '0666464848'
        },
        {
          name: 'Life',
          phone: '0936564348'
        }
      ],
      email: 'console24@gmail.com'
    },
    nav: {
      items: [
        {
          name: 'Home',
          link: 'sectionTop'
        },
        {
          name: 'Info',
          link: 'sectionInfo'
        },
        {
          name: 'FastStart',
          link: 'sectionForm'
        },
        {
          name: 'Team',
          link: 'sectionTeam'
        },
        {
          name: 'Review',
          link: 'sectionReview'
        }
      ]
    },
    team: {
      title: 'Стань частиною нашої команди!',
      form: {
        message: '',
        file: '',
        fileName: ''
      },
      items: [
        {
          name: 'Георгий Анисимов',
          position: 'Розробник',
          info: 'Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому'
        },
        {
          name: 'Вадим Одинцов',
          position: 'програміст',
          info: 'Багато програм верстування та веб-дизайну використовують Lorem Ipsum як зразок і пошук за терміном "lorem ipsum" відкриє багато веб-сайтів, які знаходяться ще в зародковому стані.'
        },
        {
          name: 'Большаков Вячеслав',
          position: 'менеджер',
          info: 'Різні версії Lorem Ipsum з&#8242;явились за минулі роки, деякі випадково, деякі було створено зумисно (зокрема, жартівливі).'
        }
      ]
    }
  },
  getters: {
    getNav (state) {
      return state.nav
    },
    getMainData (state) {
      return state.mainData
    },
    getTeam (state) {
      return state.team
    }
  }
})
export default store
