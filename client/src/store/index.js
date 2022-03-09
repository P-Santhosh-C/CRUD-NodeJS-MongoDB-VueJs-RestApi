import { createStore } from "vuex";
import axios from "axios";

const URL = "http://localhost:5000/users";

export default createStore({
  state: {
    users: [],
  },

  getters: {
    allUsers: (state) => {
      return state.users;
    },
  },

  actions: {
    async fetchUsers({ commit }) {
      const response = await axios.get(URL);

      commit("setUsers", response.data);
    },

    async fetchUsersByName({ commit }, name) {
      const response = await axios.get(`${URL}/${name}`);

      commit("setUsers", response.data);
    },

    async addUser({ commit }, user) {
      const response = await axios.post(URL, user);
      commit("newUser", response.data);
    },

    async deleteUser({ commit }, id) {
      await axios.delete(`${URL}/${id}`);
      commit("removeUser", id);
    },

    async updateUser({ commit }, updatedUser) {
      console.log("hi");
      const response = await axios.put(
        `${URL}/${updatedUser._id}`,
        updatedUser
      );

      commit("updateUser", response.data);
    },
  },

  mutations: {
    setUsers: (state, users) => (state.users = users),
    newUser: (state, user) => state.users.push(user),
    removeUser: (state, id) =>
      (state.users = state.users.filter((user) => user._id !== id)),
    updateUser: (state, updatedUser) => {
      // Find index
      const index = state.users.findIndex((user) => user.id === updatedUser.id);

      if (index !== -1) {
        state.users.splice(index, 1, updatedUser);
      }
    },
  },
  modules: {},
});
