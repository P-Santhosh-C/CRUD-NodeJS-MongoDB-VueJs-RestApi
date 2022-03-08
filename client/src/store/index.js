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

    async addUser({ commit }, user) {
      const response = await axios.post(URL, user );
      commit("newUser", response.data);
    },

    async deleteUser({ commit }, id) {
      await axios.delete(`${URL}/${id}`);
      commit("removeUser", id);
    },

    // async updateTodo({ commit }, updatedTodo) {
    //   const response = await axios.put(
    //     `http://localhost:5000/users/${updatedTodo.id}`,
    //     updatedTodo
    //   );

    //   commit("updateTodo", response.data);
    // },
  },

  mutations: {
    setUsers: (state, users) => (state.users = users),
    newUser: (state, user) => state.users.push(user),
    removeUser: (state, id) =>
      (state.users = state.users.filter((user) => user.id !== id)),
    // updateTodo: (state, updatedTodo) => {
    //   // Find index
    //   const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);

    //   if (index !== -1) {
    //     state.todos.splice(index, 1, updatedTodo);
    //   }
    // },
  },
  modules: {},
});


{/* <div class="row justify-content-around">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div> */}