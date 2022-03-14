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
    }
  },
  methods: {
    addTask: function () {
      this.$store.commit("addTask", this.newTaskTitle);
      this.newTaskTitle = "";
    },
  },
};
</script>

<style></style>
