<template>
  <v-app>
    <v-container>
      <v-row no-gutters color="red">
        <v-col class="align-center">
          <div class="d-flex align-center">
            <h1 class="ml-6">សាល 011</h1>
          </div>
         <v-menu>
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
                Sort By
                <v-icon> mdi-menu-down </v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                @click="item.sortFunction"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
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
                  :items="labitem"
                  v-model="newComputer.lab"
                  :rules="[() => !!newComputer.lab || 'សូមជ្រើសរើស']"
                  label="Lab"
                ></v-select>
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
        <v-row no-gutters>
          <v-col
            v-for="computer in getDisplayedComputers"
            :key="computer.id"
            cols="auto"
            sm="2"
            md="4"
            lg="1"
            class="ml-6 mt-6"
          >
            {{ console.log("Rendering Computer:", computer) }}
            <v-card
              :to="'/lab11/' + computer.id"
              class="mx-auto"
              :class="{
                'bg-green': computer.score === 90,
                'bg-primary': computer.score === 80,
                'bg-blue': computer.score === 70,
                'bg-yellow': computer.score === 60,
                'bg-brown': computer.score === 50,
                'bg-red':
                  computer.score === 40 ||
                  computer.score === 30 ||
                  computer.score === 20 ||
                  computer.score === 10 ||
                  computer.score === 0,
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
            <h3 class="mt-5 text-center">{{ computer.model }}</h3>

          </v-col>
        </v-row>
      </v-row>
      {{ console.log("Rendering Computer:", computer) }}
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
    </v-container>
  </v-app>
</template>

<script>
import { ref, computed } from "vue";
import { useAppStore } from "@/store/app";

export default {
  setup() {
    const page = ref(1);
    const dialog = ref(false);
    const item = ref(["មាន", "មិនមាន"]);
    const labitem = ref(["10", "11", "13", "14"]);
    const newComputer = ref({
      model: "",
      lab: null,
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

    const totalComputers = computed(() => useAppStore().computers.length);
    const totalPages = computed(() => Math.ceil(totalComputers.value / 30));

    const getDisplayedComputers = computed(() => {
      const startIndex = (page.value - 1) * 30;
      const endIndex = startIndex + 30;
      const computers = useAppStore().computers;

      // Filter only the computers with lab equal to 10
      const filteredComputers = computers.filter(
        (computer) => computer.lab === 11
      );

      // Sort by score or model based on the selected sort function
      const sortFunction = sortFunctions[selectedSort.value];
      const sortedComputers = sortFunction(filteredComputers);

      console.log("Sorted Computers:", sortedComputers);

      return sortedComputers.slice(startIndex, endIndex);
    });

    // Function to sort computers by score
    const sortComputersByScore = (computers) => {
      return [...computers].sort((a, b) => b.score - a.score);
    };

    // Function to sort computers by model
    const sortComputersByModel = (computers) => {
      return [...computers].sort((a, b) => a.model.localeCompare(b.model));
    };

    // State for selected sort
    const selectedSort = ref("sortComputersByScore");

    const addComputer = () => {
      if (
        newComputer.value.model &&
        newComputer.value.lab &&
        newComputer.value.monitor &&
        newComputer.value.mouse &&
        newComputer.value.mousePad &&
        newComputer.value.DriverC &&
        newComputer.value.keyboard &&
        newComputer.value.systemunit &&
        newComputer.value.vgaandPowerCable &&
        newComputer.value.clean !== null
      ) {
        newComputer.value.lab = 11;
        useAppStore().addComputer({ ...newComputer.value });
        for (const key in newComputer.value) {
          newComputer.value[key] = null;
        }
        dialog.value = false;
      } else {
        console.error("Invalid computer data");
      }
    };

    // Sorting functions object
    const sortFunctions = {
      sortComputersByScore,
      sortComputersByModel,
    };

    return {
      page,
      dialog,
      item,
      labitem,
      newComputer,
      totalComputers,
      totalPages,
      getDisplayedComputers,
      addComputer,
      items: [
        { title: 'ច្រោះតាម​ពិន្ថុ', sortFunction: 'sortComputersByScore' },
        { title: 'ច្រោះតាម Model', sortFunction: 'sortComputersByModel' },
      ],
      selectedSort,
    };
  },
};
</script>


<style>
/* Your additional styles go here */
</style>
