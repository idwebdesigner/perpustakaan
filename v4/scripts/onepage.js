Vue.config.productionTip = false

Vue.component('start', {
  template: '#start'
})

Vue.component('biblio', {
  template: '#biblio'
})

Vue.component('antologi', {
  template: '#antologi'
})

new Vue({
  el: '#app',

  data: {
    page: 'start'
  },

  methods: {
    onChangePage(to) {
      this.page = to
    }
  }
})
