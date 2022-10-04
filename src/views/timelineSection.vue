<template>
  <div class="h-screen flex align-items-center justify-content-center">
    <pv-timeline :value="clients" align="alternate"  class="customized-timeline">
      <template #marker="slotProps">
        <span class="custom-marker shadow-2" >
          <i class="pi pi-check"></i>
        </span>
      </template>
      <template #content="slotProps">
        <pv-card v-if="slotProps.item.event === 'PROCESSING'" style="color: aqua">
          <template #title>
            {{ slotProps.item.address }}
          </template>
          <template #subtitle>
            {{ slotProps.item.date }}
          </template>
          <template #content>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            <pv-button label="Read more" class="p-button-text" ></pv-button>
          </template>
        </pv-card>
        <pv-card v-else style="color: crimson">
          <template #title>
            {{ slotProps.item.address }}
          </template>
          <template #subtitle>
            {{ slotProps.item.date }}
          </template>
          <template #content>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            <pv-button label="Read more" class="p-button-text" ></pv-button>
          </template>
        </pv-card>
      </template>
    </pv-timeline>
  </div>
</template>

<script>
import ClientsApiService from "@/views/services/clients-api.service";
import Timeline from 'primevue/timeline';

export default {
  name: "timelineSection",
  data() {
    return {
      clients: [],
      errors: [],
      clientsService: ClientsApiService
    }
  },
  created() {
    ClientsApiService.getAll()
      .then((response) => {
        this.clients = response.data.content;
        console.log(this.clients);
      })
      .catch(error => {
        this.errors.push(error);
        console.log(this.errors);
      });
  }
};
</script>

<style scoped>

</style>