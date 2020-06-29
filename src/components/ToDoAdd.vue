
<template>
    <div class="row">
        <div class="col-md-11">
            <input type="text" class="form-control" placeholder="Enter Item Name" v-model="todo_add">
        </div>
        <div class="col-md-1">
            <button class="btn btn-primary" type="button" v-on:click="itemAdd()">+</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"ToDoAdd",
    methods:{
        itemAdd(){
            this.$emit("emit-todo-add",this.todo_add);
            this.todo_add = "";
        }
    },
    data(){
        return {
            todo_add:""
        }
    }
}
</script>

<style>

</style>