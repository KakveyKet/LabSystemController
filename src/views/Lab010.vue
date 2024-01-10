<template>
  <v-app>
    <v-container>
      <v-row no-gutters color="red">
        <v-col class="align-center">
          <div  class="d-flex align-center">
            <h1 class="ml-6">សាល 010</h1>
            
          </div>
          <v-menu
          open-on-hover
          
        >
          <template v-slot:activator="{ props }">
            <v-btn
              color="grey-darken-1"
              v-bind="props"
              class="ml-6 mt-5 text-subtitle-1 font-weight-medium"
              flat
              size="small"
              width="100px"
              height="35px"
            >
              ច្រោះ
              <v-icon >
                mdi-menu-down
              </v-icon>
            </v-btn>
          </template>
    
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click="fetchSelectedItem(item)"
            >
              <v-list-item-title >{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        </v-col>
        <v-col>
          <v-dialog
            v-model="dialog"
            transition="dialog-bottom-transition"
            width="500px"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                class="text-h6 float-right"
                size="large"
                rounded="lg"
                color="primary"
                v-bind="props"
              >
                បង្កើតថ្មី
              </v-btn>
            </template>
            <v-card>
              <v-toolbar color="primary" title="បញ្ចូលបន្ថែម"></v-toolbar>
              <v-card-text class="">
                <v-text-field
                  v-model="newComputer.model"
                  clearable
                  :rules="[
                    () => !!newComputer.model || 'សូមបញ្ចូលឈ្មោះ Computer',
                  ]"
                  label="Model កុំព្យូទ៍រ"
                ></v-text-field>
                <v-select
                  :items="item"
                  :rules="[() => !!newComputer.monitor || 'សូមជ្រើសរើស']"
                  v-model="newComputer.monitor"
                  clearable
                  label="Monitor"
                ></v-select>
                <v-select
                  :items="item"
                  v-model="newComputer.mouse"
                  :rules="[() => !!newComputer.mouse || 'សូមជ្រើសរើស']"
                  label="Mouse"
                ></v-select>
                <v-select
                  :items="item"
                  v-model="newComputer.mousePad"
                  :rules="[() => !!newComputer.mousePad || 'សូមជ្រើសរើស']"
                  label="Mouse Pad"
                ></v-select>
                <v-select
                  :items="item"
                  v-model="newComputer.keyboard"
                  :rules="[() => !!newComputer.keyboard || 'សូមជ្រើសរើស']"
                  label="Keyboard"
                ></v-select>
                <v-select
                  :items="item"
                  v-model="newComputer.systemunit"
                  :rules="[() => !!newComputer.systemunit || 'សូមជ្រើសរើស']"
                  label="System Unit"
                ></v-select>
                <v-select
                  :items="item"
                  v-model="newComputer.network"
                  :rules="[() => !!newComputer.network || 'សូមជ្រើសរើស']"
                  label="Internet"
                ></v-select>
                <v-select
                  :items="item"
                  v-model="newComputer.vgaandPowerCable"
                  :rules="[
                    () => !!newComputer.vgaandPowerCable || 'សូមជ្រើសរើស',
                  ]"
                  label="VGA and Power Cable"
                ></v-select>
                <v-select
                  :items="item"
                  v-model="newComputer.DriverC"
                  :rules="[() => !!newComputer.DriverC || 'សូមជ្រើសរើស']"
                  label="Drive C"
                ></v-select>
                <v-select
                  :items="item"
                  v-model="newComputer.clean"
                  :rules="[() => !!newComputer.clean || 'សូមជ្រើសរើស']"
                  label="Clean"
                ></v-select>

                <!-- Add other fields as needed -->
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn @click="addComputer" color="primary">បញ្ចូល</v-btn>
                <v-btn @click="dialog = false">បិទ</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col
          v-for="(computer, index) in getDisplayedComputers"
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
            :class="{
              'bg-primary': computer.score === 90,
              'bg-red': computer.score !== 90,
            }"
            width="70px"
            height="80px"
            rounded="lg"
          >
            <v-card
              class="text-center align-center"
              color="white"
              width="100%"
              height="60%"
              rounded="0"
              flat
            >
              <h3 class="mt-5">{{ computer.score }}</h3>
            </v-card>
          </v-card>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <v-pagination
            v-model="page"
            :length="totalPages"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
          ></v-pagination>
        </v-col>
        <!-- <h3>Total Score: {{ useAppStore.totalScore }}</h3> -->
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { ref, computed, watchEffect } from "vue";
import { useAppStore } from "@/store/app"; // Adjust the path to your store file

export default {
  setup() {
    // Reactive variables using ref
    const page = ref(1);
    const itemsPerPage = ref(30);
    const dialog = ref(false);
    const item = ref(["មាន", "មិនមាន"]);
    const newComputer = ref({
      model: "",
      monitor: null,
      systemunit: null,
      mouse: null,
      mousePad: null,
      network: null,
      vgaandPowerCable: null,
      DriverC: null,
      clean: null,
      keyboard: null,
    });

    // Computed properties
    const totalComputers = computed(() => useAppStore().computers.length);
    const totalPages = computed(() => Math.ceil(totalComputers.value / itemsPerPage.value));
    const getDisplayedComputers = computed(() => {
      const startIndex = (page.value - 1) * itemsPerPage.value;
      const endIndex = startIndex + itemsPerPage.value;
      const computers = useAppStore().computers; // Get the entire array
      return computers.slice(startIndex, endIndex);
    });

    // Watch for changes in reactive data and trigger sorting functions
    watchEffect(() => {
      const store = useAppStore();

      // Check if the selected item has a valid sort function
      if (store.currentSortFunction && typeof store[store.currentSortFunction] === "function") {
        // Call the sorting function from the store
        store[store.currentSortFunction]();
      }
    });

    // Methods
    const fetchSelectedItem = (item) => {
      const store = useAppStore();

      // Check if the selected item has a valid sort function
      if (item.sortFunction && typeof store[item.sortFunction] === "function") {
        // Call the sorting function from the store
        store.currentSortFunction = item.sortFunction;
      } else {
        console.error("Invalid sort function or not implemented.");
      }
    };

    const sortComputersByName = () => {
      useAppStore().sortComputersByName();
    };

    const sortComputersByScore = () => {
      useAppStore().sortComputersByScore();
    };

    const addComputer = () => {
      // Validate the new computer data if needed
      if (newComputer.value.model && newComputer.value.monitor !== null) {
        // Add the new computer to the store
        useAppStore().addComputer({ ...newComputer.value });

        // Reset the newComputer data
        newComputer.value.model = "";
        newComputer.value.monitor = null;
        newComputer.value.systemunit = null;
        newComputer.value.mouse = null;
        newComputer.value.mousePad = null;
        newComputer.value.DriverC = null;
        newComputer.value.network = null;
        newComputer.value.vgaandPowerCable = null;
        newComputer.value.clean = null;
        newComputer.value.keyboard = null;
        // Close the dialog
        dialog.value = false;
      } else {
        // Handle validation error, show a message, etc.
        console.error("Invalid computer data");
      }
    };

    const getBackgroundColor = (value) => {
      // Change this condition based on your requirements
      return value === "មាន" ? "green" : "red";
    };

    // Return variables and methods for the component
    return {
      page,
      itemsPerPage,
      dialog,
      item,
      newComputer,
      totalComputers,
      totalPages,
      getDisplayedComputers,
      fetchSelectedItem,
      sortComputersByName,
      sortComputersByScore,
      addComputer,
      getBackgroundColor,
      items: [
        { title: 'ច្រោះតាម​ពិន្ថុ', sortFunction: 'sortComputersByScore' },
        { title: 'ច្រោះតាម Model', sortFunction: 'sortComputersByName' },
      ],
    };
  },
};
</script>



<style>
/* Your additional styles go here */
</style>
