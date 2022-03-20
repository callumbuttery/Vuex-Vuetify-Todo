<template>
  <div class="text-center">
    <v-menu open-on-hover top offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" @click="handleClick(index)">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Edit",
        icon: "mdi-square-edit-outline",
        click() {
          console.log("edit");
        },
      },
      {
        title: "Delete",
        icon: "mdi-delete",
        click() {
          console.log("delete");
        },
      },
      {
        title: "Due Date",
        icon: "mdi-calendar-range",
        click() {
          console.log("Date");
        },
      },
    ],
  }),
  methods: {
    handleClick(index) {
      this.items[index].click();
    }
  }
};
</script>

<style></style>
