<template>
  <div class="home pa-6">
    <v-subheader>Tasks</v-subheader>

    <v-text-field
      v-model="newTaskTitle"
      outlined
      hide-details
      clearable
      label="Add Task"
      append-icon="mdi-plus"
      class="pa-5"
      @click:append="addTask"
      @keyup.enter="addTask"
    ></v-text-field>

    <v-list v-if="$store.state.tasks" class="pt-0" flat>
      <div
        multiple
        active-class=""
        v-for="task in $store.state.tasks"
        :key="task.id"
      >
        <v-list-item :class="{ blue: task.active }">
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                @click="doneTask(task.id)"
                :input-value="task.active"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.active }"
                >{{ task.title }}</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon>
                <v-icon color="primary lighten-1" @click="deleteTask(task.id)"
                  >mdi-delete</v-icon
                >
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
      </div>
    </v-list>
    <div v-else class="noTaskContainer">
      <div align="center">
        <v-icon class="pt-5" size="50px" color="primary">mdi-check</v-icon>
      </div>

      <div align="center" class="text-h5 text--primary pt-5">No Tasks</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      newTaskTitle: "",
    };
  },
  methods: {
    addTask: function () {
      this.$store.commit("addTask", this.newTaskTitle);
      this.newTaskTitle = "";
    },
    doneTask: function (taskId) {
      this.$store.commit("doneTask", taskId);
    },
    deleteTask: function (taskId) {
      this.$store.commit("deleteTask", taskId);
    },
  },
};
</script>

<style>
.noTaskContainer {
  opacity: 50%;
}
</style>
