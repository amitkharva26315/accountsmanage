<template>
  <div class="row">
        <div class="col-md-2">
            <input type="checkbox" v-model="todo.completed">
        </div>
        <div class="col-md-8" v-bind:class="{'is-completed':todo.completed}">
            <p>{{todo.title}}</p>
        </div>
        <div class="col-md-2">
            <button class="btn btn-danger" type="button" @click="$emit('emit-todo', todo.id)">x</button>
        </div>
  </div>
</template>

<script>
export default {
    "name":"ToDoItem",
    "props":["todo"],
    "methods":{
    }
}
</script>

<style scoped>
.is-completed{
    text-decoration: line-through;
}
</style>