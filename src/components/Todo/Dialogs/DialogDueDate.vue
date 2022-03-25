<template>
  <v-dialog
    ref="dialog"
    :value="true"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="$emit('close')"> Cancel </v-btn>
      <v-btn text color="primary" @click="saveDate"> OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      date: null,
    };
  },
  props: {
    task: "",
  },
  mounted() {
    if (this.task.dueDate) {
      this.date = this.task.dueDate;
    }
  },
  methods: {
    saveDate: function () {
      const payload = {
        date: this.date,
        id: this.task.id,
      };
      this.$store.dispatch("saveDate", payload);
      this.$emit('close');
    },
  },
};
</script>

<style></style>
