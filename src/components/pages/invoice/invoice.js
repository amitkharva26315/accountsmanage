import json from "../../../shared/data/data.json";
import dataTable from "../../../components/pages/data_table/data_table.vue";

export default {
    components: {
      dataTable
    },
    data() {
        return {
            myJson: json,
            items: json.invoice,
            filter_fields: ['invoice_no', 'invoice_date', 'invoice_total_amount', 'invoice_taxable'],
            fields: [
                { key: 'id', label: 'ID', sortable: true, sortDirection: 'desc' },
                { key: 'invoice_no', label: 'Invoice No', sortable: true, class: 'text-center' },
                { key: 'invoice_date', label: 'Invoice Date', sortable: true, class: 'text-center' },
                { key: 'invoice_total_amount', label: 'Invoice Total Amount', sortable: true, class: 'text-center' },
                { key: 'invoice_taxable', label: 'Invoice Taxable', sortable: true, class: 'text-center' },
                { key: 'actions', label: 'Actions' }
            ]
        }
    },
    mounted() {
        for(var i=0;i<this.items.length;i++){
            this.items[i].sub_item = this.myJson.invoice_items.filter(x=>x.invoice_id == this.items[i].id);
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