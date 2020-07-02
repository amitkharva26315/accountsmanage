<template>
  <div class="container">
      <!-- {{todos}} -->
      <div class="todo-add">
          <ToDoAdd v-on:emit-todo-add="itemAdd"/>
      </div>
      <div class="todo-items">
        <ToDoItem v-bind:todo="todo" v-on:emit-todo="itemDelete" v-on:emit-todo-checkbox="itemPost" v-bind:key="todo.id" v-for="todo of todos" />
      </div>
      {{ info }}
  </div>
</template>

<script>
import ToDoItem from './ToDoItem';
import ToDoAdd from './ToDoAdd';
import axios from 'axios';

export default {
    "name":'ToDoItems',
    "components":{
        ToDoItem,
        ToDoAdd
    },
    "methods":{
        itemDelete(id){
            axios
            .delete('https://jsonplaceholder.typicode.com/todos/'+id)
            .then(response => {
                console.log(response);
                this.todos = this.todos.filter(x=>x.id!=id);
            }).catch(err=>console.log(err));
        },
        itemAdd(new_item_name){
            let new_todo = {};
            // new_todo.id = this.todos.length+1;
            new_todo.title = new_item_name;
            new_todo.completed = false;

            axios
            .post('https://jsonplaceholder.typicode.com/todos',new_todo)
            .then(response => {
                console.log(response);
                this.todos = [...this.todos, new_todo];
            }).catch(err=>console.log(err));
        },
        itemPost(todo){
            todo.completed != todo.completed;
            axios
            .post('https://jsonplaceholder.typicode.com/todos/'+todo.id,todo)
            .then(response => {
                console.log(response);
            }).catch(err=>console.log(err));
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
            ],
            info: null
        }
    },
    mounted () {
        axios
        .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => (this.todos = response.data));
  }
}
</script>

<style>
.todo-items, .todo-add{
    margin:10px;
}
</style>