<template>
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
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: "",
      action: "",
    };
  },
  methods: {
    addTask: function () {
      if (this.newTaskTitle) {
        this.action = "Added new task";
        this.$store.dispatch("addTask", this.newTaskTitle, this.action);
        this.newTaskTitle = "";
      }
    },
  },
};
</script>

<style></style>
