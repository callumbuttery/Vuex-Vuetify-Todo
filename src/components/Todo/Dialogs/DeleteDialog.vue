<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Delete task? </v-card-title>
      <v-card-text>Are you sure you want to delete this task?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')"> No </v-btn>
        <v-btn color="blue darken-1" text @click="deleteTask"> Yes </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    taskId: "",
  },
  methods: {
    deleteTask: function () {
      this.$store.dispatch("deleteTask", this.taskId);
      this.dialog = false;
    },
  },
};
</script>

<style></style>
