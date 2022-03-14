import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
      const task = state.tasks.filter((task) => task.id === taskId)[0];

      task.active = !task.active;
    },
    deleteTask: function (state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
  },
  actions: {},
  modules: {},
});
