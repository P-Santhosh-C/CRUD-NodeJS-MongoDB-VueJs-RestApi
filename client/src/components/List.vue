<template>
  <div>
    <div v-for="todo in allTodos" :key="todo.id">
      <h1>{{ todo.name }}</h1>
      <button v-on:click="deleteTodo(todo.id)">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"]),
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>
