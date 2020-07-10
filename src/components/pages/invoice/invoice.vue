<template>
    <!-- Main Content -->
  <div id="content">

    <!-- Begin Page Content -->
    <div class="container-fluid">

      <!-- DataTales Example -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Invoices</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <!-- <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Invoice No.</th>
                  <th>Invoice Date</th>
                  <th>Invoice Total Amount</th>
                  <th>Invoice Taxable</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-bind:key="inv.id" v-for="inv of myJson.invoice">
                  <td>{{inv.id}}</td>
                  <td>{{inv.invoice_no}}</td>
                  <td>{{inv.invoice_date}}</td>
                  <td>{{inv.invoice_total_amount}}</td>
                  <td>{{inv.invoice_taxable}}</td>
                  <td>
                    <button type="button" class="btn btn-warning"><i class="fa fa-paint-brush" aria-hidden="true"></i> EDIT</button> &nbsp; 
                    <button type="button" class="btn btn-danger"><i class="fa fa-trash"></i> DELETE</button>
                  </td>
                </tr>
              </tbody>
            </table> -->

            <dataTable v-bind:items="items" v-bind:fields="fields" v-bind:filter_fields="filter_fields"></dataTable>
            <!-- v-on:emit-item-delete="itemDelete" v-on:emit-item-post="itemPost" -->

          </div>
        </div>
      </div>

    </div>
    <!-- /.container-fluid -->

  </div>
  <!-- End of Main Content -->
</template>

<script src="./invoice.js"></script>

<style src="./invoice.css" scoped></style>