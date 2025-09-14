<template>
  <div class="min-h-screen flex flex-col bg-base-200 text-base-content">
    <header v-if="showHeader">
      <AppHeader v-if="!userStore.isAuthenticated" />
      <AppHeaderPro v-else-if="userStore.role === 'pro'" />
      <AppHeaderPart v-else-if="userStore.role === 'part'" />
    </header>

    <main>
      <router-view></router-view>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
  import { useRoute } from "vue-router";
  import { useUserStore } from "./stores/users";

  import AppFooter from "./components/AppFooter.vue";
  import AppHeader from "./components/AppHeader.vue";
  import AppHeaderPro from "./components/AppHeaderPro.vue";
  import AppHeaderPart from "./components/AppHeaderPart.vue";

  const route = useRoute();
  const userStore = useUserStore();

  const hideOnRoutes = ['home', 'signUp'];
  const showHeader = !hideOnRoutes.includes(route.name);
</script>

<style scoped></style>
