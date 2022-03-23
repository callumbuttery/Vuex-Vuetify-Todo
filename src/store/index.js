import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    snackbar: {
      show: false,
      text: "My timeout is set to 2000.",
      timeout: 2000,
    },
    tasks: [
      {
        id: 1,
        title: "Wake up",
        active: false,
      },
      {
        id: 2,
        title: "Shower",
        active: false,
      },
      {
        id: 3,
        title: "Get dressed",
        active: false,
      },
    ],
  },
  mutations: {
    addTask: function (state, newTaskTitle) {
      const newTask = {
        id: Date.now(),
        title: newTaskTitle,
        active: false,
      };

      state.tasks.push(newTask);
    },
    doneTask: function (state, taskId) {
      const task = findTask(taskId)
      task.active = !task.active;
    },
    deleteTask: function (state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    editTask: function (state, payload) {
      const task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.title = payload.value;
    },
    


    showSnackbar: function (state, text) {
      let timeout = 0;
      if(state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 500;
      }
      setTimeout(() => {
        state.snackbar.show=true;
        state.snackbar.text=text; 
      }, timeout);
    },
  },
  actions: {
    editTask({ commit }, payload){
      commit('editTask', payload);
      commit('showSnackbar', 'Edited Task!');
    },
    addTask({ commit }, newTaskTitle){
      commit('addTask', newTaskTitle);
      commit('showSnackbar', 'Added Task!');
    },
    deleteTask({ commit }, taskId){
      commit('deleteTask', taskId);
      commit('showSnackbar', 'Deleted Task!');
    },
    doneTask({ commit }, taskId){
      commit('doneTask', taskId);
      commit('showSnackbar', 'Finished Task!');
    }
  },
  modules: {},
});
