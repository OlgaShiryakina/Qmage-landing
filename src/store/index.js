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
        button: 'отримати повідомлення поштою',
        success: '<h4>Дякуємо за підписку</h4>'
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
    mainInfo: {
      items: [
        {
          link: 'для інтернет магазинів',
          title: 'Що таке Lorem Ipsum?',
          text: '<p>Lorem Ipsum - це текст-"риба", що використовується в друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову гранку та склав на ній підбірку зразків шрифтів. "Риба" не тільки успішно пережила п&#8242;ять століть, але й прижилася в електронному верстуванні, залишаючись по суті незмінною. Вона популяризувалась в 60-их роках минулого сторіччя завдяки виданню зразків шрифтів Letraset, які містили уривки з Lorem Ipsum, і вдруге - нещодавно завдяки програмам комп&#8242;ютерного верстування на кшталт Aldus Pagemaker, які використовували різні версії Lorem Ipsum.</p><p>Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад, "Тут іде текст. Тут іде текст." Це робить текст схожим на оповідний. Багато програм верстування та веб-дизайну використовують Lorem Ipsum як зразок і пошук за терміном "lorem ipsum" відкриє багато веб-сайтів, які знаходяться ще в зародковому стані. Різні версії Lorem Ipsum з&#8242;явились за минулі роки, деякі випадково, деякі було створено зумисно (зокрема, жартівливі).</p>'
        },
        {
          link: 'для партнерів',
          title: 'Чому ми ним користуємось?',
          text: '<p>На відміну від поширеної думки Lorem Ipsum не є випадковим набором літер. Він походить з уривку класичної латинської літератури 45 року до н.е., тобто має більш як 2000-річну історію. Річард Макклінток, професор латини з коледжу Хемпдін-Сидні, що у Вірджінії, вивчав одне з найменш зрозумілих латинських слів - consectetur - з уривку Lorem Ipsum, і у пошуку цього слова в класичній літературі знайшов безсумнівне джерело.Існує багато варіацій уривків з Lorem Ipsum, але більшість з них зазнала певних змін на кшталт жартівливих вставок або змішування слів, які навіть не виглядають правдоподібно. Якщо ви збираєтесь використовувати Lorem Ipsum, ви маєте упевнитись в тому, що всередині тексту не приховано нічого, що могло б викликати у читача конфуз. Більшість відомих генераторів Lorem Ipsum в Мережі генерують текст шляхом повторення наперед заданих послідовностей Lorem Ipsum. Принципова відмінність цього генератора робить його першим справжнім генератором Lorem Ipsum. Він використовує словник з більш як 200 слів латини та цілий набір моделей речень - це дозволяє генерувати Lorem Ipsum, який виглядає осмислено. Таким чином, згенерований Lorem Ipsum не міститиме повторів, жартів, нехарактерних для латини слів і т.ін.</p><p>Класичний текст, використовуваний з XVI сторіччя, наведено нижче для всіх зацікавлених. Також точно за оригіналом наведено розділи 1.10.32 та 1.10.33 цицеронівського "de Finibus Bonorum et Malorum" разом із перекладом англійською, виконаним 1914 року Х.Рекемом.</p>'
        },
        {
          link: 'для розробників',
          title: 'Де собі взяти трохи?',
          text: '<p>Існує багато варіацій уривків з Lorem Ipsum, але більшість з них зазнала певних змін на кшталт жартівливих вставок або змішування слів, які навіть не виглядають правдоподібно. Якщо ви збираєтесь використовувати Lorem Ipsum, ви маєте упевнитись в тому, що всередині тексту не приховано нічого, що могло б викликати у читача конфуз. Більшість відомих генераторів Lorem Ipsum в Мережі генерують текст шляхом повторення наперед заданих послідовностей Lorem Ipsum. Принципова відмінність цього генератора робить його першим справжнім генератором Lorem Ipsum. Він використовує словник з більш як 200 слів латини та цілий набір моделей речень - це дозволяє генерувати Lorem Ipsum, який виглядає осмислено. Таким чином, згенерований Lorem Ipsum не міститиме повторів, жартів, нехарактерних для латини слів і т.ін.</p><p>На відміну від поширеної думки Lorem Ipsum не є випадковим набором літер. Він походить з уривку класичної латинської літератури 45 року до н.е., тобто має більш як 2000-річну історію. Річард Макклінток, професор латини з коледжу Хемпдін-Сидні, що у Вірджінії, вивчав одне з найменш зрозумілих латинських слів - consectetur - з уривку Lorem Ipsum, і у пошуку цього слова в класичній літературі знайшов безсумнівне джерело.</p>'
        }
      ]
    },
    team: {
      title: 'Наша команда!',
      form: {
        title: 'Стань частиною нашої команди!',
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
    },
    getMainInfo (state) {
      return state.mainInfo
    }
  },
  actions: {
    addContact: function ({commit}, value) {
      if (value) {
        console.log('addContact commit')
        commit('addContact', value)
      } else {
        console.log('addContact error')
        // TODO: ERROR
      }
    }
  },
  mutations: {
    addContact: function (state, value) {
      state.mainData.sendMail.input = value
    }
  }
})
export default store
