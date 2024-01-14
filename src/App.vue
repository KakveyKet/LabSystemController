<template>
  <v-slide-y-transition>
    <Navbar />
    <Login />
  </v-slide-y-transition>
</template>

<script setup>
import Login from "./Auth/Login.vue";
import Navbar from "./components/Navbar.vue";
components: {
  Navbar, Login;
}
</script>
