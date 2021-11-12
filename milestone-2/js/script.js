const app = new Vue({
  el: '#app',
  data: {
    tasks: [
      {
        text: 'Studiare Vue.js',
        done: false
      },
      {
        text: 'Ripassare CSS',
        done: true
      },
      {
        text: 'Passare un buon weekend',
        done: false
      },

    ]
  },
  methods: {
    removeTask(index){
      this.tasks.splice(index,1);
    }
  }
});