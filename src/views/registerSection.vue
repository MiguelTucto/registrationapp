<template>
<div>
  <pv-data-table :value="clients" :paginator="true" :rows="10" datakey="id" :rowHover="true" v-model:selection="selectedClients" :filters="filters"  :loading="loading" paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,25,50]" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" :globalFilterFields="['name','lastName','address','event']" responsiveLayout="scroll">
    <template #header>
      <div class="flex justify-content-center align-items-center">
        <h5 class="m-0">Clients</h5>
        <span class="p-input-icon-left">
          <i class="pi pi-search"/>
          <pv-input-text v-model="filters['global'].value" placeholder="Keyword"/>
        </span>
      </div>
    </template>
    <template #empty>
      No clients found.
    </template>
    <pv-column selectionMode="multiple" headerStyle="width: 3rem"></pv-column>
    <pv-column field="name" header="Name" sortable style="min-width: 14rem">
      <template #body="{data}">
        {{data.name}}
      </template>
    </pv-column>
    <pv-column field="lastName" header="Last Name" sortable  style="min-width: 14rem">
      <template #body="{data}">
        {{data.lastName}}
      </template>
    </pv-column>
    <pv-column field="address" header="Address" sortable style="min-width: 14rem">
      <template #body="{data}">
        {{data.address}}
      </template>
    </pv-column>
    <pv-column field="phone" header="Phone" sortable datatype="numeric" style="min-width: 8rem">
      <template #body="{data}">
        {{data.phone}}
      </template>
    </pv-column>
    <pv-column field="age" header="Age" sortable datatype="numeric" style="min-width: 8rem">
      <template #body="{data}">
        {{data.age}}
      </template>
    </pv-column>
    <pv-column field="date" header="Date" sortable datatype="date" style="min-width: 8rem">
      <template #body="{data}">
        {{data.date}}
      </template>
    </pv-column>
    <pv-column field="event" header="Event" sortable style="min-width: 8rem">
      <template #body="{data}">
        {{data.event}}
      </template>
    </pv-column>
  </pv-data-table>

</div>
</template>

<script>
import { RegistrationsApiService } from "@/views/services/registrations-api.service";
import {FilterMatchMode, FilterOperator} from 'primevue/api';
export default {
  name: "registerSection",
  data() {
    return {
      clients: [],
      registrationService: null,
      selectedClients: null,
      filters: {},
      loading: false
    }
  },
  created() {
    this.registrationService = new RegistrationsApiService();
    this.registrationService.getAll().then((response) => {
      this.clients = response.data;
      console.log("created");
    })
    this.initFilters();
  },
  mounted() {

  },
  methods: {
    formatDate(value) {
      return value.toLocaleDateString('en-US',{
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
    },
    formatCurrency(value) {
      return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    },
    initFilters() {
      this.filters = {
        global: {value: null, matchMode: FilterMatchMode.CONTAINS}
      }
    }
  }
};
</script>

<style scoped>
.card{

}
</style>