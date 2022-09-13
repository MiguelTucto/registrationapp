<template>
  <div class="h-5rem"></div>
  <div class="surface-card p-4 shadow-2 border-round top texto  " >
    <div class="text-center mb-5">
      <div class="text-900 text-3xl font-medium mb-3">Put Information</div>
    </div>
    <div class="align-items-center justify-content-center">
      <label for="name" class="block text-900 font-medium mb-2">Name</label>
      <pv-input-text id="name" v-model.trim="client.name" type="text" class="w-full mb-3"/>
      <label for="lastName" class="block text-900 font-medium mb-2">Last Name</label>
      <pv-input-text id="lastName" v-model.trim="client.lastName" type="text" class="w-full mb-3"/>
      <label for="address" class="block text-900 font-medium mb-2">Address</label>
      <pv-input-text id="address" v-model.trim="client.address" type="text" class="w-full mb-3"/>
      <label for="phone" class="block text-900 font-medium mb-2">Phone</label>
      <pv-input-text id="phone" v-model.trim="client.phone" type="phone" class="w-full mb-3"/>
      <label for="age" class="block text-900 font-medium mb-2">Age</label>
      <pv-input-text id="age" v-model.trim="client.age" type="age" class="w-full mb-3"/>
      <label for="date" class="block text-900 font-medium mb-2">Date</label>
      <pv-input-text id="date" v-model.trim="client.date" type="text" class="w-full mb-3"/>
      <label for="event" class="block text-900 font-medium mb-2">Kind of Event</label>
      <pv-input-text id="event" v-model.trim="client.event" type="text" class="w-full mb-3"/>
    </div>
    <pv-button label="Complete" icon="pi pi-check" class="w-full" @click="saveClient"></pv-button>
  </div>
</template>

<script>
import { RegistrationsApiService } from "@/views/services/registrations-api.service";

export default {
  name: "clientSection",
  data(){
    return {
      clients: [],
      client: {},
      clientService: null,
      submitted: false
    };
  },
  created() {
    this.clientService = new RegistrationsApiService();
  },
  methods: {
    getStorableClient(displayableClient){
      return {
        id: displayableClient.id,
        name: displayableClient.name,
        lastName: displayableClient.lastName,
        address: displayableClient.address,
        phone: displayableClient.phone,
        age: displayableClient.age,
        date: displayableClient.date,
        event: displayableClient.event
      };
    },
    saveClient() {
      this.submitted = true;
      if(this.client.name.trim()) {
        if (this.client.id) {
          this.client = this.getStorableClient(this.client);
          this.clientService
            .update(this.client.id, this.client)
        } else {
          this.client.id = 0;
          console.log(this.client);
          this.client = this.getStorableClient(this.client);
          this.clientService.create(this.client).then((response) => {
            this.client = this.getStorableClient(response.data);
            this.clients.push(this.client);
            console.log(response);
          });
          this.client = {};
        }
      }
    }
  }
};
</script>

<style scoped>
.texto{
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI';
}
</style>