import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    nav: {
      isActive: 0,
      items: [
        {
          name: 'item1',
          link: 'sectionTop'
        },
        {
          name: 'item2',
          link: 'sectionInfo'
        },
        {
          name: 'item3',
          link: 'sectionTeam'
        },
        {
          name: 'item4',
          link: 'sectionForm'
        },
        {
          name: 'item5',
          link: 'sectionForm'
        }
      ]
    }
  },
  getters: {
    getNav (state) {
      return state.nav
    }
  }
})
export default store
