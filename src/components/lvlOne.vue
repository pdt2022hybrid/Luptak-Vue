<template>
  <div>
    <div class="container text-white">
      <ul>
        <li :key="todo" v-for="todo in todoList">
        <a class="fs-6 text-decoration-none" @click.prevent="remove(todo)">
          x
        </a>
          {{ todo }}
        </li>
      </ul>
    </div>

    <form class="addNewTodo pt-5" @keydown.enter.prevent="add">
      <input class="text-white" v-model="newTodo" type="text">
    </form>
    
  <span class="text-white fs-6">
    {{ newTodo }}
  </span>

  </div>
</template>

<script>
    export default {
  methods: {
    add() {
      this.todoList.push(
        this.newTodo
      )
    },
    remove(todo) {
      this.todoList = this.todoList.filter( item => item !== todo )
    }
  },
  data() {
    return {
      newTodo: '',
      todoList: [

      ]
    }
  }
}
</script>

<style>
  * {
    font-size: 1.5rem;
    text-align: center;
    background: #182d4f;
    align-items: center;
}
</style>