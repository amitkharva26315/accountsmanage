<template>
  <!-- Main Content -->
  <div id="content">
    <!-- Begin Page Content -->
    <div class="container-fluid">
      <!-- DataTales Example -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Party Master</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            {{items}}
            <!-- <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Name</th>
                  <th>GSTIN</th>
                  <th>State</th>
                  <th>Code</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-bind:key="party.id" v-for="party of myJson.party">
                  <td>{{party.id}}</td>
                  <td>{{party.name}}</td>
                  <td>{{party.gstin}}</td>
                  <td>{{party.state}}</td>
                  <td>{{party.Code}}</td>
                  <td>{{party.address}}</td>
                  <td>
                    <button type="button" class="btn btn-warning"><i class="fa fa-paint-brush" aria-hidden="true"></i> EDIT</button> &nbsp; 
                    <button type="button" class="btn btn-danger"><i class="fa fa-trash"></i> DELETE</button>
                  </td>
                </tr>
              </tbody>
            </table> -->
            <dataTable v-bind:items="items" v-bind:fields="fields" v-bind:filter_fields="filter_fields" v-on:add_update_modal="addUpdateModal"></dataTable>
            <!-- v-on:emit-item-delete="itemDelete" v-on:emit-item-post="itemPost" -->
            
            <!-- Add Edit modal -->
            <b-modal id="add-edit-party-modal" ref="modal" :title="modal_title" @show="resetModal" @hidden="resetModal"
                @ok="handleOk">
                <form ref="form" @submit.stop.prevent="handleSubmit">
                    <b-form-group label="Name" label-for="name-input">
                        <b-form-input id="name-input" v-model="party.name"></b-form-input>
                    </b-form-group>
                    <b-form-group label="GSTIN" label-for="gstin-input">
                        <b-form-input id="gstin-input" v-model="party.gstin"></b-form-input>
                    </b-form-group>
                    <b-form-group label="State" label-for="state-input">
                        <b-form-input id="state-input" v-model="party.state"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Code" label-for="code-input">
                        <b-form-input id="code-input" v-model="party.code"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Address" label-for="address-input">
                        <b-form-input id="address-input" v-model="party.address"></b-form-input>
                    </b-form-group>
                </form>
            </b-modal>
          </div>
        </div>
      </div>

    </div>
    <!-- /.container-fluid -->

  </div>
  <!-- End of Main Content -->
</template>

<script src="./party_master.js"></script>
<style src="./party_master.css" lang="css" scoped></style>