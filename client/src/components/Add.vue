<template>
  <div>
    <br />
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="name" placeholder="Name" />
        <input type="text" v-model="cell" placeholder="Cell" />
        <input type="text" v-model="email" placeholder="Email" />
        <input type="text" v-model="location" placeholder="Location" />
        <input type="submit" value="Submit" />
      </form>
    </div>
    <br />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Add",
  data() {
    return {
      name: "",
      cell: "",
      email: "",
      location: "",
    };
  },
  methods: {
    ...mapActions(["addUser"]),
    onSubmit(e) {
      e.preventDefault();
      this.addUser({
        name: this.name,
        cell: this.cell,
        email: this.email,
        location: this.location,
      });
      (this.name = ""),
        (this.cell = ""),
        (this.email = ""),
        (this.location = "");
    },
  },
};
</script>

<style></style>
