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
        <v-icon small class="mr-2" v-if="task.dueDate">mdi-clipboard-text-clock-outline </v-icon>
        <v-list-item-action>
          <v-list-item-action-text>{{ task.dueDate }}</v-list-item-action-text>
        </v-list-item-action>
        <v-list-item-action>
          <TaskMenu :task="task" />
        </v-list-item-action>
      </template>
    </v-list-item>
  </div>
</template>

<script>
import TaskMenu from "./Menu/TaskOptions.vue";

export default {
  props: ["task"],
  components: {
    TaskMenu,
  },
  methods: {
    doneTask: function (taskId) {
      this.$store.dispatch("doneTask", taskId);
    },
  },
};
</script>

<style></style>
