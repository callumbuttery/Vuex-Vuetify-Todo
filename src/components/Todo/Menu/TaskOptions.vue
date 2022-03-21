<template>
  <div class="text-center">
    <v-menu open-on-hover top offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleClick(index)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <DeleteDialog
      v-if="dialogs.delete"
      :task="task"
      @close="dialogs.delete = false"
    />

    <EditDialog
      v-if="dialogs.edit"
      :task="task"
      @close="dialogs.edit = false"
    />
  </div>
</template>

<script>
import DeleteDialog from "../Dialogs/DeleteDialog.vue";
import EditDialog from "../Dialogs/EditDialog.vue";

export default {
  props: ["task"],
  data: () => ({
    items: [
      {
        title: "Edit",
        icon: "mdi-square-edit-outline",
        click() {
          this.dialogs.edit = true;
        },
      },
      {
        title: "Delete",
        icon: "mdi-delete",
        click() {
          this.dialogs.delete = true;
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
    dialogs: {
      delete: false,
      edit: false,
      taskToDelete: "",
    },
  }),
  methods: {
    handleClick(index) {
      this.items[index].click.call(this);
    },
  },
  components: {
    DeleteDialog,
    EditDialog,
  },
};
</script>

<style></style>
