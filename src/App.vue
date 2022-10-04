<template>
  <pv-toolbar>
    <template #end>
      <router-link
        v-for="item in items"
        :to="item.to"
        custom
        v-slot="{ navigate, href }"
        :key="item.label"
      >
        <pv-button class="p-button-text" :href="href" @click="navigate">{{
          item.label
        }}</pv-button>
      </router-link>
    </template>
  </pv-toolbar>
  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { label: "Home", to: "/home" },
        { label: "Client", to: "/client" },
        { label: "Login", to: "/login" },
        { label: "Test", to: "/test" },
        { label: "TimeLine", to: "/timeline" }
      ],
    };
  },
};
</script>
