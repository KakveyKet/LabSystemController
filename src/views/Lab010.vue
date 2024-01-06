<template>
  <v-app>
    <h1 class="ml-6">សាល 010</h1>

    <v-row no-gutters>
      <v-col
        v-for="(cart, index) in getDisplayedCards"
        :key="index"
        cols="auto"
        sm="2"
        md="4"
        lg="1"
        class="ml-6 mt-6"
      >
        <v-card
          :to="`/lab010/${index + 1}`"
          class="mx-auto"
          color="red"
          width="70px"
          height="80px"
          rounded="lg"
        >
          <v-card
            class="text-center"
            color="white"
            width="100%"
            height="60%"
            rounded="0"
            flat
          >
            {{ cart }}
          </v-card>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-pagination
          v-model="page"
          :length="totalPages"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      itemsPerPage: 30,
      cards: Array.from({ length: 150 }, (_, index) => `Card ${index + 1}`),
    };
  },
  computed: {
    totalCards() {
      return this.cards.length;
    },
    totalPages() {
      return Math.ceil(this.totalCards / this.itemsPerPage);
    },
    getDisplayedCards() {
      const startIndex = (this.page - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.cards.slice(startIndex, endIndex);
    },
  },
};
</script>

<style>
/* Your additional styles go here */
</style>
