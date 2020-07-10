<template>
    <b-container fluid>
        <!-- {{items}} -->
        <!-- User Interface controls -->
        <b-row>
            <b-col lg="3" md="3" class="my-1">
                <b-button size="sm" class="mr-3" @click="open_add_update_modal()">Add</b-button>
                <!-- v-b-modal.add-edit-modal -->
            </b-col>
            <b-col lg="6" offset-md="3" class="my-1">
                <b-form-group label="Filter" label-cols-sm="3" label-align-sm="right" label-size="sm"
                    label-for="filterInput" class="mb-0">
                    <b-input-group size="sm">
                        <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Type to Search">
                        </b-form-input>
                        <b-input-group-append>
                            <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-form-group>
            </b-col>
        </b-row>

        <!-- Main table element -->
        <b-table show-empty small stacked="md" :items="items" :fields="fields" :current-page="currentPage"
            :per-page="perPage" :filter="filter" :filterIncludedFields="filterOn" :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc" :sort-direction="sortDirection" @filtered="onFiltered">
            <!-- <template v-slot:cell(name)="row">
                  {{ row.value.first }} {{ row.value.last }}
                </template> -->
            <template v-slot:cell(name)="row">
                {{ row.item.name }}
            </template>

            <template v-slot:cell(actions)="row">
                <b-button size="sm" class="mr-1" @click="edit(row.item, row.id, $event.target)">Edit</b-button>
                <!-- v-b-modal.add-edit-modal -->
                <!-- <b-button size="sm" @click="info(row.item, row.id, $event.target)" class="mr-1">
                    Info modal
                </b-button>
                <b-button size="sm" @click="row.toggleDetails">
                    {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
                </b-button> -->
            </template>

            <template v-slot:row-details="row">
                <b-card>
                    <!-- <ul>
                        <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
                    </ul> -->
                    <table border="1" width="100%">
                        <tbody>
                            <tr>
                                <th v-for="(value, key) in row.item" :key="key">{{key}}</th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td v-for="(value, key) in row.item" :key="key">{{ (key!='sub_item')?value:'' }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr>
                    <table v-if="row.item.sub_item && row.item.sub_item.length>0" border="1" width="100%">
                        <tbody>
                            <tr>
                                <th v-for="(value, key) in row.item.sub_item[0]" :key="key">{{key}}</th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr v-for="cur_item in row.item.sub_item" :key="cur_item.id">
                                <td v-for="(value, key) in row.item.sub_item[0]" :key="key">{{cur_item[key]}}</td>
                            </tr>
                        </tbody>
                    </table>
                </b-card>
            </template>
        </b-table>
        <b-row>
            <b-col sm="6" md="2" class="my-1">
                <b-form-group label="" label-cols-sm="6" label-cols-md="4" label-cols-lg="3" label-align-sm="right"
                    label-size="sm" label-for="perPageSelect" class="mb-0">
                    <b-form-select v-model="perPage" id="perPageSelect" size="sm" :options="pageOptions">
                    </b-form-select>
                </b-form-group>
            </b-col>
            <b-col sm="6" md="4" offset-md="2" class="my-1">
                <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="fill" size="sm"
                    class="my-0"></b-pagination>
            </b-col>
        </b-row>
        <!-- Info modal -->
        <b-modal :id="infoModal.id" :title="infoModal.title" @hide="resetInfoModal">
            <pre>{{ infoModal.content }}</pre>
        </b-modal>
    </b-container>
</template>

<script src="./data_table.js"></script>