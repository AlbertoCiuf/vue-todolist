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
    ],
    newTask:{
      text:'',
      done: false
    },
    error: false
  },
  methods: {
    removeTask(index){
      this.tasks.splice(index,1);
    },
    addTask(){
      if (this.newTask.text.length < 3) {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      } else {
        this.tasks.push(this.newTask)
        this.newTask= {
          text:'',
          done: false
        };
      } 
    }
  }
});