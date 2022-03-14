<template>
  <div class="home pa-6">
    <v-subheader>Tasks</v-subheader>

    <AddTaskInput />

    <ListTasks v-if="$store.state.tasks.length"/>
    <NoTasks v-else/>

  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
    AddTaskInput: require('@/components/Todo/addTaskInput.vue').default,
    ListTasks: require('@/components/Todo/ListTasks.vue').default,
    NoTasks: require('@/components/Todo/NoTasks.vue').default,
  },
};
</script>

<style>
  .noTaskContainer {
    opacity: '50%'
  }
</style>
