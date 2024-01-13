<template>
    <v-app>
      <v-container>
        <v-row no-gutters>
          <v-col cols="auto">
            <div>
              <h1 class="ml-6">ជួសជុល</h1>
            </div>
          </v-col>
        </v-row>
        
        <v-row no-gutters>
          <v-col
            v-for="computer in filteredComputers"
            :key="computer.id"
            cols="auto"
            sm="2"
            md="4"
            lg="1"
            class="ml-6 mt-6"
          >
            <v-card
              class="mx-auto"
              :class="{
                'bg-green': computer.score === 90,
                'bg-primary': computer.score === 80,
                'bg-blue': computer.score === 70,
                'bg-yellow': computer.score === 60,
                'bg-brown': computer.score === 50,
                'bg-red': computer.score === 40 || 30 || 20 || 10 || 0,
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
        <v-row>
          <v-col>
            <v-pagination
              v-model="page"
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
            ></v-pagination>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue';
  import { useAppStore } from '@/store/app'; 
  export default {
    setup() {
      const page = ref(1);
      const { computers } = useAppStore();
  
    
  
      const filteredComputers = computed(() =>
        computers.filter((computer) => computer.score < 90)
      );
      
      return {
        page,
        filteredComputers,
      };
    },
  };
  </script>

  