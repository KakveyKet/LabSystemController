<template>
  <v-slide-y-transition>
    <Navbar />
  </v-slide-y-transition>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
components: {
  Navbar;
}
</script>
