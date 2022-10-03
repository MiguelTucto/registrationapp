<template>
  <pv-toast />
  <div class="grid grid-nogutter surface-section text-800">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
      <section>
        <span class="block text-6xl font-bold mb-1">Create the screens your</span>
        <div class="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
        <p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <pv-button label="Learn More" type="button" class="mr-3 p-button-raised"></pv-button>
        <pv-button label="Live Demo" type="button" @click="showSuccess" class="p-button-outlined"></pv-button>
      </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
      <img src="https://tecnovortex.com/wp-content/uploads/2019/04/wallpaper-engine.jpg" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
    </div>
  </div>
</template>

<script>
export default {
  name: "loginSection",
  methods: {
    showSuccess() {
      this.$toast.add({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
    }
  }
};
</script>

<style scoped>

</style>