<template>
  <div>
    <div>
      <h3>Search</h3>
      <input
        type="text"
        @change="fetchUsersByName(search)"
        v-model="search"
        placeholder="Search Name..."
      />
    </div>
    <br />
    <div class="row justify-content-around">
      <div class="col-3" v-for="user in allUsers" :key="user._id">
        <div class="card">
          <h4>Name:{{ user.name }}</h4>
          <h4>Email:{{ user.email }}</h4>
          <h4>cell:{{ user.cell }}</h4>
          <h4>Location:{{ user.location }}</h4>
          <button class="btn btn-danger" v-on:click="edituser(user._id)">
            Edit
          </button>
          <button class="btn btn-danger" v-on:click="deleteUser(user._id)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    ...mapActions(["fetchUsers", "fetchUsersByName", "deleteUser"]),
    adduser() {},
  },
  computed: mapGetters(["allUsers"]),
  created() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
  color: aliceblue;
  background-color: black;
}
</style>
