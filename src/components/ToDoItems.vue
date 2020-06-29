<template>
  <div class="container">
      <!-- {{todos}} -->
      <div class="todo-add">
          <ToDoAdd v-on:emit-todo-add="itemAdd"/>
      </div>
      <div class="todo-items">
        <ToDoItem v-bind:todo="todo" v-on:emit-todo="itemDelete" v-bind:key="todo.id" v-for="todo of todos" />
      </div>
  </div>
</template>

<script>
import ToDoItem from './ToDoItem';
import ToDoAdd from './ToDoAdd';

export default {
    "name":'ToDoItems',
    "components":{
        ToDoItem,
        ToDoAdd
    },
    "methods":{
        itemDelete(id){
            this.todos = this.todos.filter(x=>x.id!=id);
        },
        itemAdd(new_item_name){
            let new_todo = {};
            new_todo.id = this.todos.length+1;
            new_todo.title = new_item_name;
            new_todo.completed = false;
            this.todos = [...this.todos, new_todo];
        },
        markComplete(todo){
            todo.completed != todo.completed;
        }
    },
    data(){
        return {
                "todos":[
                {
                    "id":1,
                    "title":"item 1",
                    "completed":false
                },
                {
                    "id":2,
                    "title":"item 2",
                    "completed":false
                },
                {
                    "id":3,
                    "title":"item 3",
                    "completed":true
                }
            ]
        }
    }
}
</script>

<style>
.todo-items, .todo-add{
    margin:10px;
}
</style>