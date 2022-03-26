<template>
  <v-list>
    <Task
      multiple
      active-class=""
      v-for="task in $store.getters.tasksFiltered"
      :key="task.id"
      :task="task"
    />
  </v-list>
</template>

<script>
export default {
  components: {
    Task: require("@/components/Todo/Task.vue").default,
  },
};
</script>

<style></style>
