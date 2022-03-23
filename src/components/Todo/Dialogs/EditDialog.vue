<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5">
        Edit task <v-text-field v-model="taskTitle"
      /></v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')"> Cancel </v-btn>
        <v-btn
          color="blue darken-1"
          text
          :disabled="checkDisabled"
          @click="saveTask"
          @keyup.enter="checkDisabled"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      taskTitle: null,
    };
  },
  props: {
    task: "",
  },
  computed: {
    checkDisabled: function () {
      return !this.taskTitle || this.taskTitle === this.task.title;
    },
  },
  methods: {
    saveTask: function () {
      if (!this.checkDisabled ) {
        const payload = {
          id: this.task.id,
          value: this.taskTitle,
        };

        this.$store.dispatch("editTask", payload);
        this.$emit("close");
      }
    },
  },
  mounted() {
    this.taskTitle = this.task.title;
  },
};
</script>

<style></style>
