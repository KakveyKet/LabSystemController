<template>
  <v-layout class="pa-5">
    <v-navigation-drawer
      style="z-index: 2"
      floating
      color="primary"
      v-model="drawer"
    >
      <v-row class="mt-5 text-center">
        <v-col>
          <v-avatar size="80">
            <v-img
              cover
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.685942804.1702829483&semt=ais"
            >
            </v-img>
          </v-avatar>
          <h2 class="text-white mt-3">
            {{ currentUser ? currentUser.username : "Guest" }}
          </h2>
        </v-col>
      </v-row>
      <v-row no-gutters class="mt-8">
        <v-col cols="12" lg="12">
          <v-list v-model:opened="open">
            <v-list-item to="/dashboard" title="ព័តមានទូទៅ"></v-list-item>
            <v-list-group value="សាលកុំព្យូទ័រ">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="សាលកុំព្យូទ័រ"></v-list-item>
              </template>
              <v-list-item to="/lab010" title="សាល 010"></v-list-item>
              <v-list-item to="/lab011" title="សាល 011"></v-list-item>
              <v-list-item to="/lab013" title="សាល 013"></v-list-item
              ><v-list-item
                color="info"
                to="/lab014"
                title="សាល 014"
              ></v-list-item>
              <v-list-item
                to="/repairing"
                title="កុំព្យូទ័រ ជួសជុល"
              ></v-list-item>
            </v-list-group>
            <v-list-item to="/admin" title="អ្នកកាន់កុំព្យទ័រ"></v-list-item>
            <v-list-item title="របាយការណ៏"></v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn size="large" color="red" block> ចាកចេញ </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-row>
      <v-col class="d-lg-none d-block" cols="12  text-right">
        <v-btn class="sticky-btn" @click.stop="drawer = !drawer" icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn></v-col
      >
      <v-main style="width: 100%">
        <v-slide-x-transition>
          <router-view />
        </v-slide-x-transition>
      </v-main>
    </v-row>
  </v-layout>
</template>
<script>
import Login from "@/Auth/Login.vue";
import { useAppStore } from "@/store/app";
import { computed } from "vue";
export default {
  data: () => ({
    drawer: true,
    group: null,
    open: ["Users"],
    admins: [
      ["Management", "mdi-account-multiple-outline"],
      ["Settings", "mdi-cog-outline"],
    ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  computed: {
  currentUser() {
    const user = useAppStore().currentUser;
    console.log("Current User in Component:", user);
    return user;
  },
},

  components: { Login },
};
</script>
<style>
.sticky-btn {
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 10;
  /* 
  Adjust the top value as needed */
  /*  ther styles as needed */
}
</style>
