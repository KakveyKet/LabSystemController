<template>
  <v-container fluid>
    <v-row>
      <v-col cols="auto">
        <h1 class="ml-1">អ្នកកាន់កុំព្យទ័រ</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="4" sm="12">
        <v-card elevation="0" class="mt-7 bg-grey-lighten-4 pa-2 d-flex ga-3">
          <v-img
            class="rounded"
            width="50%"
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.685942804.1702829483&semt=ais"
          >
          </v-img>
          <v-card class="bg-grey-lighten-4" elevation="0">
            <v-chip rounded="lg" size="small" class="bg-green ml-3">
              Admin
            </v-chip>
            <v-card-title> Kakvey Ket </v-card-title>
            <v-card-text class="text-subtitle-1">
              <span class="text-grey">គ្រប់គ្រងនៅ​</span>
              <span class="ml-2">សាល​ 013</span>
            </v-card-text>
          </v-card>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" lg="4" sm="12">
        <v-card class="pa-1 mt-5 d-flex align-center">
          <v-avatar rounded="lg" class="ml-2" size="64">
            <v-img
              cover
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.685942804.1702829483&semt=ais"
            >
            </v-img>
          </v-avatar>
          <div>
            <v-card-title>
              Kakvey
              <span>
                <v-chip rounded="lg" size="small" class="bg-green ml-3">
                  Admin
                </v-chip>
              </span>
            </v-card-title>
            <v-card-text>
              <span class="text-grey">គ្រប់គ្រងនៅ​</span>
              <span>សាល​ 013</span>
            </v-card-text>
          </div>
          <v-row>
            <v-col cols="auto" lg="12" class="d-flex justify-end ga-2">
              <v-btn
                @click="drawer = !drawer"
                rounded="lg"
                color="primary"
                icon
              >
                <v-icon> mdi-account-edit </v-icon>
              </v-btn>
              <v-btn rounded="lg" class="mr-2" color="red" icon>
                <v-icon> mdi-account-minus </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" lg="12" sm="4">
        <v-navigation-drawer  v-model="drawer" location="right" temporary>
          <v-list class="pa-3">
            <h1>Update កំណត់សិទ្ធ</h1>
          </v-list>
          <v-form class="pa-2">
            <v-text-field label="ឈ្មោះ"> </v-text-field>
          </v-form>
        </v-navigation-drawer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const drawer = ref(false);
    return {
      drawer,
    };
  },
};
</script>

