new Vue({
  el: '#app',
  data: {
    formdata: {
      name: '',
      email: '',
      about: ''
    },
    persons: [],
    errors: []
  },
  computed: {
    aboutLength: function () {
      return this.formdata.about.length
    }
  },
  methods: {
    register: function () {
      this.errors = []
      if (this.formdata.name === '')
        this.errors.push('El campo nombre es obligatorio')
      if (this.formdata.email === '')
        this.errors.push('El campo correo electrónico es obligatorio')
      if (this.formdata.about === '')
        this.errors.push('El campo acerca de mí es obligatorio')

      if (this.errors.length === 0)
        this.savePerson(this.formdata)
    },
    savePerson: function (person) {
      // Creating new item without reactivity
      var newItem = {
        name: person.name,
        email: person.email,
        about: person.about
      }

      // Pushing new item
      this.persons.push(newItem)
      
      // Cleaning form 
      this.formdata.name = ''
      this.formdata.email = ''
      this.formdata.about = ''
    }
  }
})
