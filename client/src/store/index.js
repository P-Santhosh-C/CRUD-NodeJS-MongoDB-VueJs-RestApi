import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    todos: [],
  },

  getters: {
    allTodos: (state) => {
      return state.todos;
    },
  },

  actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get("http://localhost:5000/users");

      commit("setTodos", response.data);
    },

    // async addTodo({ commit }, title) {
    //   const response = await axios.post("http://localhost:5000/users", {
    //     title,
    //     completed: false,
    //   });

    //   commit("newTodo", response.data);
    // },

    async deleteTodo({ commit }, id) {
      await axios.delete(`http://localhost:5000/users/${id}`);

      commit("removeTodo", id);
    },

    // async updateTodo({ commit }, updatedTodo) {
    //   const response = await axios.put(
    //     `http://localhost:5000/users/${updatedTodo.id}`,
    //     updatedTodo
    //   );

    //   commit("updateTodo", response.data);
    // },
  },

  // posts.map((post) =>
  //       post._id === action.payload._id ? action.payload : post
  //     );

  mutations: {
    setTodos: (state, todos) => (state.todos = todos),
    // newTodo: (state, todo) => state.users.unshift(todo),
    removeTodo: (state, id) =>
      (state.todos = state.todos.filter((todo) => todo.id !== id)),
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
