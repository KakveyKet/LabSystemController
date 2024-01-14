// store.js
import { defineStore } from 'pinia';

export const useAppStore = defineStore('computer', {
  state: () => ({
    computers: [
      {
        "id": 1,
        "lab": 10,
        "model": "Dell-Model1",
        "monitor": "មាន",
        "systemunit": "មាន",
        "mouse": "មាន",
        "mousePad": "មាន",
        "network": "មាន",
        "vgaandPowerCable": "មាន",
        "DriverC": "មាន",
        "clean": "មាន",
        "keyboard": "មាន",
        "score": 90
      },
      {
        "id": 2,
        "lab": 10,
        "model": "Dell-Model2",
        "monitor": "មាន",
        "systemunit": "មាន",
        "mouse": "មាន",
        "mousePad": "មាន",
        "network": "មាន",
        "vgaandPowerCable": "មាន",
        "DriverC": "មាន",
        "clean": "មាន",
        "keyboard": "មាន",
        "score": 90
      },
      {
        "id": 3,
        "lab": 10,
        "model": "Dell-Model3",
        "monitor": "មាន",
        "systemunit": "មាន",
        "mouse": "មាន",
        "mousePad": "មាន",
        "network": "មាន",
        "vgaandPowerCable": "មាន",
        "DriverC": "មាន",
        "clean": "មាន",
        "keyboard": "មាន",
        "score": 90
      },
      {
        "id": 4,
        "lab": 11,
        "model": "Dell-Model4",
        "monitor": "មាន",
        "systemunit": "មាន",
        "mouse": "មាន",
        "mousePad": "មាន",
        "network": "មាន",
        "vgaandPowerCable": "មាន",
        "DriverC": "មាន",
        "clean": "មាន",
        "keyboard": "មាន",
        "score": 60
      },
      {
        "id": 5,
        "lab": 11,
        "model": "Dell-Model5",
        "monitor": "មាន",
        "systemunit": "មាន",
        "mouse": "មាន",
        "mousePad": "មាន",
        "network": "មាន",
        "vgaandPowerCable": "មាន",
        "DriverC": "មាន",
        "clean": "មាន",
        "keyboard": "មាន",
        "score": 50
      },
      {
        "id": 6,
        "lab": 11,
        "model": "Dell-Model6",
        "monitor": "មាន",
        "systemunit": "មាន",
        "mouse": "មាន",
        "mousePad": "មាន",
        "network": "មាន",
        "vgaandPowerCable": "មាន",
        "DriverC": "មាន",
        "clean": "មាន",
        "keyboard": "មាន",
        "score": 40
      },
      {
        "id": 7,
        "lab": 11,
        "model": "Dell-Model7",
        "monitor": "មាន",
        "systemunit": "មាន",
        "mouse": "មាន",
        "mousePad": "មាន",
        "network": "មាន",
        "vgaandPowerCable": "មាន",
        "DriverC": "មាន",
        "clean": "មាន",
        "keyboard": "មាន",
        "score": 90
      },
      {
        "id": 8,
        "lab": 11,
        "model": "Dell-Model8",
        "monitor": "មាន",
        "systemunit": "មាន",
        "mouse": "មាន",
        "mousePad": "មាន",
        "network": "មាន",
        "vgaandPowerCable": "មាន",
        "DriverC": "មាន",
        "clean": "មាន",
        "keyboard": "មាន",
        "score": 90
      }
    ],
    users: [
      { "id": 1, "username": "kakvey", "password": "12345678", "email": "kakvey@gmail.com", "role": "admin", "standfor": "lab 010" },
      { "id": 2, "username": "tra", "password": "12345678", "email": "tra@gmail.com", "role": "staff", "standfor": "lab 011" }
    ],
  }),
  getters: {
    totalComputers: (state) => state.computers.length,
    totalComputersWithScoreBelow90: (state) => state.computers.filter(computer => computer.score < 90).length,
    isLoggedIn: (state) => !!state.currentUser,
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
    addComputer(newComputer) {
      const id = this.computers.length + 1;

      // Calculate the score based on the new computer data
      let score = 90;
      for (const key in newComputer) {
        if (newComputer[key] === "មិនមាន") {
          score -= 10;
        }
      }

      // Add the new computer to the store
      this.$patch((state) => {
        state.computers.push({
          id,
          lab: newComputer.lab,
          model: newComputer.model,
          monitor: newComputer.monitor,
          mouse: newComputer.mouse,
          mousePad: newComputer.mousePad,
          keyboard: newComputer.keyboard,
          systemunit: newComputer.systemunit,
          network: newComputer.network,
          vgaandPowerCable: newComputer.vgaandPowerCable,
          DriverC: newComputer.DriverC,
          clean: newComputer.clean,
          score,
        });
      });

      // Log the added computer
      console.log('Added Computer:', {
        id,
        lab: newComputer.lab,
        model: newComputer.model,
        monitor: newComputer.monitor,
        mouse: newComputer.mouse,
        mousePad: newComputer.mousePad,
        keyboard: newComputer.keyboard,
        systemunit: newComputer.systemunit,
        network: newComputer.network,
        vgaandPowerCable: newComputer.vgaandPowerCable,
        DriverC: newComputer.DriverC,
        clean: newComputer.clean,
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
    },
    AddNewUser(newUser) {
      // Calculate the new user's ID automatically
      const id = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
    
      // Add the new user to the users array
      this.$patch((state) => {
        state.users.push({
          id,
          ...newUser
        });
      });
    
      console.log('User added successfully:', { id, ...newUser });
    },
    
    editUser(updatedUser) {
      const index = this.users.findIndex(user => user.id === updatedUser.id);

      if (index !== -1) {
        this.$patch((state) => {
          // Directly update the user at the specific index
          state.users[index] = {
            ...state.users[index],
            ...updatedUser,
          };
        });

        console.log('User edited successfully');
      } else {
        console.error('User not found for editing');
      }
    },
    deleteUser(userId) {
      const index = this.users.findIndex(user => user.id === userId);

      if (index !== -1) {
        this.$patch((state) => {
          state.users.splice(index, 1);
        });

        console.log('User deleted successfully');
      } else {
        console.error('User not found for deletion');
      }
    },
  }
});
