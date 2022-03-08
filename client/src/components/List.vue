<template>
  <div>
    <div>
      <h3>Search</h3>
      <input type="text" v-model="search" placeholder="Search Name..." />
    </div><br />
    <div class="row justify-content-around">
      <div class="col-3" v-for="user in allUsers" :key="user._id">
        <div class="card">
          <h4>Name:{{ user.name }}</h4>
          <h4>Email:{{ user.email }}</h4>
          <h4>cell:{{ user.cell }}</h4>
          <h4>Location:{{ user.location }}</h4>
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
    ...mapActions(["fetchUsers", "deleteUser"]),
  },
  computed: mapGetters(["allUsers"]),
  created() {
    this.fetchUsers();
  },
};
</script>
