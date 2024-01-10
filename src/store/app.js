// store.js
import { defineStore } from 'pinia';

export const useAppStore = defineStore('computer', {
  state: () => ({
    computers: [
      { id: 1, model: "Dell-Model1", monitor: "មាន", systemunit: "មាន", mouse: "មាន", mousePad: "មាន", network: "មាន", vgaandPowerCable: "មាន", DriverC: "មាន", clean: "មាន", keyboard: "មាន", score: 90 },
      { id: 2, model: "Dell-Model2", monitor: "មាន", systemunit: "មាន", mouse: "មាន", mousePad: "មាន", network: "មាន", vgaandPowerCable: "មាន", DriverC: "មាន", clean: "មាន", keyboard: "មាន", score: 90 },
      { id: 3, model: "Dell-Model3", monitor: "មាន", systemunit: "មាន", mouse: "មាន", mousePad: "មាន", network: "មាន", vgaandPowerCable: "មាន", DriverC: "មាន", clean: "មាន", keyboard: "មាន", score: 90 },
    ]
  }),
  getters: {
    totalComputers: (state) => state.computers.length,
    totalComputersWithScoreBelow90: (state) => state.computers.filter(computer => computer.score < 90).length,
  },
  actions: {
    
    sortComputersByName() {
      this.$patch((state) => {
        state.computers.sort((a, b) => a.model.localeCompare(b.model));
      });
    },

    sortComputersByScore() {
      this.$patch((state) => {
        state.computers.sort((a, b) => b.score - a.score);
      });
    },
    addComputer(computer) {
      const id = this.computers.length + 1;
      let score = 90; // Initial score
  
      // Deduct 10 points for each field with "មិនមាន"
      for (const key in computer) {
        if (computer[key] === "មិនមាន") {
          score -= 10;
        }
      }
  
      this.computers.push({
        id,
        model: computer.model,
        monitor: computer.monitor,
        mouse: computer.mouse,
        mousePad: computer.mousePad,
        keyboard: computer.keyboard,
        systemunit: computer.systemunit,
        network: computer.network,
        vgaandPowerCable: computer.vgaandPowerCable,
        DriverC: computer.DriverC,
        clean: computer.clean,
        score,
      });
    },

    editComputer(updatedComputer) {
      const index = this.computers.findIndex(computer => computer.id === updatedComputer.id);

      if (index !== -1) {
        // Calculate the score based on the updated computer data
        let score = 90;
        for (const key in updatedComputer) {
          if (updatedComputer[key] === "មិនមាន") {
            score -= 10;
          }
        }

        // Update the computer data and score
        this.$patch((state) => {
          state.computers[index] = {
            ...state.computers[index],
            ...updatedComputer,
            score,
          };
        });
      }
    }
  }
});
