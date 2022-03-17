<template>
  <v-snackbar v-model="$store.state.snackbar.show" :timeout="timeout">
    {{ $store.state.snackbar.text }}

    <template v-slot:action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="$store.state.snackbar.show = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
};
</script>

<style></style>
