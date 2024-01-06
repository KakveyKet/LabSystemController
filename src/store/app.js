// store.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useAppStore = defineStore('computer', {
  state: () => ({
    accessories: [
      { name: "Mouse", selected: false, points: 0 },
      { name: "VGA and Power Cable", selected: false, points: 0 },
      { name: "Mouse Pad", selected: false, points: 0 },
      { name: "Keyboard", selected: false, points: 0 },
      { name: "System Unit", selected: false, points: 0 },
      { name: "Monitor", selected: false, points: 0 },
      { name: "Drive C", selected: false, points: 0 },
      { name: "Internet", selected: false, points: 0 },
      { name: "Environment", selected: false, points: 0 },
    ],
    newAccessory: ref(0),
  }),
  getters: {
    totalPoints: (state) => state.accessories.reduce((sum, tag) => sum + tag.points, 0),
  },
  actions: {
    toggleAccessory(tag) {
      tag.selected = !tag.selected;
      tag.points = tag.selected ? 10 : 0;
      this.newAccessory = this.totalPoints;
    },
    submit() {
      
      this.accessories.forEach((tag) => (tag.selected = false));
    },
  }
});
