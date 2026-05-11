<template>
  <div class="flex min-h-screen bg-[#0f0f14] text-white">
    <div class="sticky top-0 h-screen">
      <Sidebar />
    </div>

    <div class="w-full flex-1">
      <Header @open-auth="isAuthModalOpen = true" />
      <RouterView />
    </div>



    <div
      v-if="isAuthModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-[#101018]/90"
    >
      <Registration  @close="isAuthModalOpen = false" />
    </div>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import Registration from "./views/Registration.vue";
import { ref } from "vue";

const isAuthModalOpen = ref(false);

</script>
