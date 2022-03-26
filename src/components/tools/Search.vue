<template>
  <v-text-field
    placeholder="Search"
    outlined
    dense
    clearable
    prepend-inner-icon="mdi-magnify"
    class="expanding-search mt-1 closed"
  ></v-text-field>
</template>

<script>
export default {};
</script>

<style lang="sass">
.expanding-search
    &.closed
        max-width: 45px
</style>
