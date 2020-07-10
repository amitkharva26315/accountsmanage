import json from "../../../shared/data/data.json";
import dataTable from "../../../components/pages/data_table/data_table.vue";
// const $ = require('jquery');

export default {
  components: {
    dataTable
  },
  data() {
    return {
      myJson: json,
      items: json.party,
      filter_fields: ['name', 'gstin', 'state', 'code', 'address'],
      fields: [
        { key: 'id', label: 'ID', sortable: true, sortDirection: 'desc' },
        { key: 'name', label: 'Name', sortable: true, class: 'text-center' },
        { key: 'gstin', label: 'GSTIN', sortable: true, class: 'text-center' },
        { key: 'state', label: 'State', sortable: true, class: 'text-center' },
        { key: 'code', label: 'Code', sortable: true, class: 'text-center' },
        { key: 'address', label: 'Address', sortable: true, class: 'text-center' },
        { key: 'actions', label: 'Actions' }
      ],
      party: {
        'name': '',
        'gstin': '',
        'state': '',
        'code': '',
        'address': '',
      },
      modal_title: 'Add Party Modal'
    }
  },
  methods: {
    addUpdateModal(item) {
      console.log(item);
      this.party = {};
      this.party = item;
      if (this.party.id) {
        this.modal_title = 'Edit Party Modal';
      }
      else {
        this.modal_title = 'Add Party Modal';
      }
      // this.$root.$emit('bv::show::modal');
      // this.bvModal.show('add-edit-party-modal');
      this.$refs['modal'].show()
    },
    resetModal() {
      // this.party = {};
    },
    handleOk(bvModalEvt) {
      console.log('handleOk');
      if (this.party.id) {
        alert("Successfully Updated");
      }
      else {
        // this.party.id = this.json.party.length+1;
        console.log(this.party);
        // this.json.party = [...this.json.party, this.party];
        alert("Successfully Added");
      }
    }
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