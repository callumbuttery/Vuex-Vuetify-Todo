<template>
  <row>
    <v-text-field
      :value="$store.state.search"
      @input="$store.commit('setSearch', $event)"
      @focus="closeSearch = false"
      @blur="closeSearch = true"
      placeholder="Search"
      outlined
      dense
      clearable
      prepend-inner-icon="mdi-magnify"
      class="expanding-search mt-2"
      :class="{ closed: closeSearch, open: !closeSearch }"
    ></v-text-field>
  </row>
</template>

<script>
export default {
  data() {
    return {
      closeSearch: true,
    };
  },
};
</script>

<style lang="sass">
.expanding-search
  &.closed
      max-width: 45px
      transition: max-width 0.6s
  &.open
      max-width: 250px
      transition: max-width 0.3s
</style>
