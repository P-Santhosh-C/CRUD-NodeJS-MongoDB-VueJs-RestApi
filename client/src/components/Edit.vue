<template>
  <div>
    <form @submit="onSubmit">
      <input type="text" v-model="user.name" placeholder="Name" />
      <input type="text" v-model="user.cell" placeholder="Cell" />
      <input type="text" v-model="user.email" placeholder="Email" />
      <input type="text" v-model="user.location" placeholder="Location" />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Edit",
  computed: {
    ...mapGetters(["allUsers"]),
    user() {
      return this.allUsers.find((v) => v._id == this.$route.params.id);
    },
  },
  methods: {
    ...mapActions(["updateUser"]),
    async onSubmit(e) {
      e.preventDefault();
      await this.updateUser(this.user);
      this.$router.push({ name: "List" });
    },
  },
};
</script>
