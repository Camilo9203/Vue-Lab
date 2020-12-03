Vue.component('click-counter', {
  //template: '<button @click="count++">{{count}}</button>',
  template: '#click-counter-template',
  data () {
    return {
      count: 0
    }
  }
})
// Vue.component('plan-picker', {
//   template: '#plan-picker-template',
//   data() {
//     return {
//       plans: ['The Single', 'The Curious', 'The Addict']
//     }
//   }
// })
//Vue.component('plan', { } )
let PlanComponent = {
  template: '#plan-template',
  props: {
    name: {
      type: String,
      required: true
    },
    selectedPlan: {
      type: String
      }
    },
    computed: {
      isSelected() {
        return this.name === this.selectedPlan
      }
    },
    methods: {
      select() {
        this.$emit('select', this.name)
      }
    }
}

let PlanPickerComponent = {
  template: '#plan-picker-template',
  components: {
    plan: PlanComponent
  },
  data() {
    return {
      plans: ['The Single', 'The Curious', 'The Addict'],
      selectedPlan: null
    }
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan
    }
  }
}

new Vue({
  el: '#app',
  components: {
    'plan-picker': PlanPickerComponent
  }
}) 