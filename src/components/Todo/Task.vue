<template>
  <div>
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
    <DeleteDialog v-if="dialogs.delete" :taskId="taskToDelete" @close="dialogs.delete = false"/>
  </div>
</template>

<script>
import DeleteDialog from "./Dialogs/DeleteDialog.vue";

export default {
  props: ["task"],
  data() {
    return {
      dialogs: {
        delete: false,
        taskToDelete: "",
      },
    };
  },
  components: {
    DeleteDialog,
  },
  methods: {
    doneTask: function (taskId) {
      this.$store.dispatch("doneTask", taskId);
    },
    deleteTask: function (taskId) {
      this.dialogs.delete = true;
      this.taskToDelete = taskId;
    },
  },
};
</script>

<style></style>
