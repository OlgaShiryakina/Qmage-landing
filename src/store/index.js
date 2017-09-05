import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    mainData: {
      title: 'Console24',
      slogan: 'Полный и легкий контроль за <br> вашей электронной комерцией!',
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
      isActive: 0,
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
    }
  },
  getters: {
    getNav (state) {
      return state.nav
    },
    getMainData (state) {
      return state.mainData
    }
  }
})
export default store
