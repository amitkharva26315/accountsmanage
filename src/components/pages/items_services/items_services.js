import json from "../../../shared/data/data.json";
import dataTable from "../../../components/pages/data_table/data_table.vue";

export default {
    components: {
      dataTable
    },
    data() {
        return {
            myJson: json,
            items: json.items_service,
            filter_fields: ['name', 'type'],
            fields: [
                { key: 'id', label: 'ID', sortable: true, sortDirection: 'desc' },
                { key: 'name', label: 'Name', sortable: true, class: 'text-center' },
                { key: 'type', label: 'Type', sortable: true, class: 'text-center' },
                { key: 'actions', label: 'Actions' }
            ]
        }
    },
    methods: {
        // itemDelete(id) {
        //   axios
        //     .delete('https://jsonplaceholder.typicode.com/todos/' + id)
        //     .then(response => {
        //       console.log(response);
        //       this.todos = this.todos.filter(x => x.id != id);
        //     }).catch(err => console.log(err));
        // },
        // itemAdd(new_item_name) {
        //   let new_todo = {};
        //   // new_todo.id = this.todos.length+1;
        //   new_todo.title = new_item_name;
        //   new_todo.completed = false;

        //   axios
        //     .post('https://jsonplaceholder.typicode.com/todos', new_todo)
        //     .then(response => {
        //       console.log(response);
        //       this.todos = [...this.todos, new_todo];
        //     }).catch(err => console.log(err));
        // },
        // itemPost(todo) {
        //   todo.completed != todo.completed;
        //   axios
        //     .post('https://jsonplaceholder.typicode.com/todos/' + todo.id, todo)
        //     .then(response => {
        //       console.log(response);
        //     }).catch(err => console.log(err));
        // }
    }
}