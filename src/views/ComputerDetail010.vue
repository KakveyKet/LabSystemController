<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-toolbar flat color="primary" class="pa-2" dark>
              <v-badge color="green" :content="newAccessory">
                <v-toolbar-title class="ml-5 pa-2">
                  ពិន្នុរបស់ Computer 01
                </v-toolbar-title>
              </v-badge>
            </v-toolbar>
            <v-card-text>
              <v-textarea variant="filled" label="កំណត់ត្រ Computer"></v-textarea>

              <v-divider class="my-2"></v-divider>
              <div class="pa-2 text-h6">គ្រឿង​​​​ accessory របស់ Computer</div>
              <v-chip-group multiple selected-class="bg-primary">
                <v-chip
                  v-for="tag in accessories"
                  :key="tag.name"
                  @click="toggleAccessory(tag)"
                >
                </v-chip>
                <p>ID: {{ id }}</p>
              </v-chip-group>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-dialog transition="dialog-top-transition" width="auto">
                <template v-slot:activator="{ props }">
                  <v-btn
                    size="large"
                    elevation="1"
                    color="primary"
                    v-bind="props"
                    @click="submit"
                    :disabled="!anyAccessorySelected"
                  >
                    បញ្ជូនទិន្ន័យ
                  </v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card class="pa-3">
                    <v-card-text class="text-primary">
                      ពិន្នុរបស់ Computer គឺ
                    </v-card-text>
                    <v-card width="50%" class="mx-auto">
                      <v-card-text class="text-h3 text-success text-center">
                       {{$route.params.id}}
                       hh
                      </v-card-text>
                    </v-card>
                    <v-card-actions class="justify-end">
                      <v-btn
                        elevation="1"
                        class="bg-red mt-7"
                        variant="text"
                        @click="isActive.value = false"
                      >
                        បិទ
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import { useAppStore } from "../store/app";
import { computed } from "vue";
props: ['id']
</script>
