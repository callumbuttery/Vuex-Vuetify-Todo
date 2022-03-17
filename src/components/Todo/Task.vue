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
  </div>
</template>

<script>
export default {
  props: ['task'],
  methods: {
    doneTask: function (taskId) {
      this.$store.dispatch("doneTask", taskId);
    },
    deleteTask: function (taskId) {
      this.$store.dispatch("deleteTask", taskId);
    },
  },
};
</script>

<style></style>
