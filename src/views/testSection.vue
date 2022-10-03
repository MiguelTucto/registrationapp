<template>
  <pv-toast />
  <div class="h-screen flex align-items-center justify-content-center">
      <pv-card style="margin-bottom: 2em">
        <template #content>
          <div class="text-center mb-5">
            <div class="text-900 text-3xl font-medium mb-3">Put Information</div>
          </div>
          <form @submit.prevent="handleSubmit(!v$.$invalid)">
            <div class="p-fluid grid grid-nogutter ">
              <div class="field col-6 pr-5">
                <div class="p-inputgroup">
                  <span class="p-inputgroup-addon ">
                    <i class="pi pi-user"></i>
                  </span>
                  <pv-input-text id="name" v-model="name" placeholder="Name" :class="{ 'p-invalid': v$.name.$invalid && submitted }" type="text"/>
                </div>
                <label for="lastName" class="block text-900 font-medium mb-2">Last Name</label>
                <pv-input-text id="lastName" v-model="lastName" :class="{ 'p-invalid': v$.lastName.$invalid && submitted }" type="text" class="w-full mb-3"/>
                <label for="address" class="block text-900 font-medium mb-2">Address</label>
                <pv-input-text id="address" v-model="address" :class="{ 'p-invalid': v$.address.$invalid && submitted }"  type="text" class="w-full mb-3"/>
                <label for="phone" class="block text-900 font-medium mb-2">Phone</label>
                <pv-input-text id="phone" v-model="phone" type="phone" :class="{ 'p-invalid': v$.phone.$invalid && submitted }" class="w-full mb-3"/>
              </div>
              <div class="col-6 ">
                <label for="date" class="block text-900 font-medium mb-2">Date</label>
                <pv-calendar id="date" v-model="date" inputId="dateformat" :class="{ 'p-invalid': v$.date.$invalid && submitted }" dateFormat="dd-mm-yy"  type="text" class="w-full mb-3"/>
                <label for="event" class="block text-900 font-medium mb-2">Kind of Event</label>
                <pv-input-text id="event" v-model="kindOfEvent" type="text" :class="{ 'p-invalid': v$.kindOfEvent.$invalid && submitted }" class="w-full mb-3"/>
                <label for="email" class="block text-900 font-medium mb-2">Email</label>
                <pv-input-text id="event" v-model="email" type="text" :class="{ 'p-invalid': v$.email.$invalid && submitted }" class="w-full mb-3"/>
                <label for="age" class="block text-900 font-medium mb-2">Age</label>
                <pv-input-text id="age" v-model="age" type="age" :class="{ 'p-invalid': v$.age.$invalid && submitted }" class="w-full mb-3"/>
              </div>
              <div class="col-12 pb-5">
                <label for="password"  class="block text-900 font-medium mb-2">Password</label>
                <pv-password id="password"   v-model="password" :class="{ 'p-invalid': v$.password.$invalid && submitted }" type="text" class="">
                  <template #header>
                    <h4>Pick a password</h4>
                  </template>
                  <template #footer="sp">
                    {{sp.level}}
                    <Divider />
                    <p class="mt-2">Suggestions</p>
                    <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                      <li>At least one lowercase</li>
                      <li>At least one uppercase</li>
                      <li>At least one numeric</li>
                      <li>Minimum 8 characters</li>
                    </ul>
                  </template>
                </pv-password>
              </div>
            </div>
              <pv-button type="submit" class="p-button mr-5 size-100" label="Submit" />

          </form>
        </template>
      </pv-card>

  </div>
</template>

<script>
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { RegistrationsApiService } from "@/views/services/registrations-api.service";

export default {
  name: "testSection",
  setup: () => ({ v$: useVuelidate() }),
  data(){
    return {
      name: "",
      lastName: "",
      address: "",
      phone: null,
      age: null,
      date: "",
      kindOfEvent: "",
      email: "",
      password: "",
      submitted: false,
      clients: [],
      client: {},
      clientService: null,
    };
  },
  validations() {
    return {
      name: { required },
      lastName: { required },
      address: { required },
      phone: { required },
      age: { required },
      date: { required },
      kindOfEvent: { required },
      email: { required },
      password: { required }
    };
  },
  methods: {
    saveClient(client){
      return {
        name : client.name,
        lastName : client.lastName,
        address : client.address,
        phone: client.phone,
        age: client.age,
        date: client.date,
        kindOfEvent: client.kindOfEvent,
        email: client.email,
        password: client.password
      };
    },
    handleSubmit(isFormValid) {
      this.submitted = true;
      if (isFormValid) {
        this.clientService = new RegistrationsApiService();
        this.client = this.saveClient(this.client);
        this.clientService.create(this.client).then(() => {
          this.$toast.add({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
          this.$router.push({ name: "home"})
        })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.$toast.add({severity:'error', summary: 'Error Message', detail:'Message Content', life: 3000});
      }
    }
  }
};
</script>

<style scoped>

</style>