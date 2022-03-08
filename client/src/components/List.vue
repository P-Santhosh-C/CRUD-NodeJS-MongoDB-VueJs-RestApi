<template>
  <div>
    <div>
      <h3>Search</h3>
      <input type="text" v-model="search" placeholder="Search Name..." />
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Cell</th>
          <th>Email</th>
          <th>Location</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody v-for="(user, index) in allUsers" :key="user._id">
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.cell }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.location }}</td>
          <td>
            <button class="primary" v-on:click="deleteUser(user._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
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
