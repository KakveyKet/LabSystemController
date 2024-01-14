<template>
  <v-container fluid>
    <v-row>
      <v-col cols="auto" class="d-flex ga-4">
        <h1 class="ml-1">អ្នកកាន់កុំព្យទ័រ</h1>
        <span>
          <v-btn color="primary" @click="drawer = !drawer" icon>
            <v-icon> mdi-plus </v-icon>
          </v-btn>
        </span>
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
        <v-card
          v-for="user in users"
          :key="user.id"
          class="pa-1 mt-5 d-flex align-center"
        >
          <v-avatar rounded="lg" class="ml-2" size="64">
            <v-img
              cover
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.685942804.1702829483&semt=ais"
            >
            </v-img>
          </v-avatar>
          <div>
            <v-card-title>
              {{ user.username }}
              <span>
                <v-chip rounded="lg" size="small" class="bg-green ml-3">
                  {{ user.role }}
                </v-chip>
              </span>
            </v-card-title>
            <v-card-text>
              <span class="text-grey">គ្រប់គ្រងនៅ​</span>
              <span class="ml-2">{{ user.standfor }}</span>
            </v-card-text>
          </div>
          <v-row>
            <v-col cols="auto" lg="12" class="d-flex justify-end ga-2">
              <v-btn
                @click="startEditUser(user)"
                rounded="lg"
                color="green"
                icon
              >
                <v-icon>mdi-account-edit</v-icon>
              </v-btn>
              <v-dialog width="500">
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    rounded="lg"
                    class="mr-2"
                    color="red"
                    icon
                  >
                    <v-icon>mdi-account-minus</v-icon>
                  </v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card :title="user.email">
                    <v-card-text>
                      តើអ្នកពិតជាចង់លុបអ្នកប្រើប្រាស់នេះមែនទេ?
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        text="មិនលុប"
                        @click="isActive.value = false"
                      ></v-btn>
                      <v-btn
                        text="លុប"
                        class="bg-red-darken-1"
                        @click="deleteUser(user.id)"
                      ></v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="12" sm="4">
        <v-navigation-drawer
          :width="330"
          v-model="drawer"
          location="right"
          temporary
        >
          <v-list class="pa-3">
            <h1>បញ្ចូលអ្នកកាន់សាល</h1>
          </v-list>
          <v-form class="pa-2" @submit.prevent="addUser">
            <v-text-field
              v-model="newUser.username"
              label="Username"
            ></v-text-field>
            <v-text-field v-model="newUser.email" label="Email"></v-text-field>
            <v-text-field
              v-model="newUser.password"
              label="Password"
            ></v-text-field>
            <v-select
              v-model="newUser.role"
              :items="rolesUser"
              label="Role"
            ></v-select>
            <v-text-field v-model="newUser.standfor" label="Lab"></v-text-field>
            <v-btn type="submit" size="large" block class="bg-primary">
              Add
            </v-btn>
            <v-btn
              @click="clearForm"
              size="large"
              block
              class="bg-red-darken-2 mt-3"
            >
              Clear
            </v-btn>
          </v-form>
        </v-navigation-drawer>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-navigation-drawer
          temporary
          location="right"
          v-model="editUserToggle"
        >
          <v-list class="pa-3">
            <h1>កែប្រែអ្នកកាន់សាល</h1>
          </v-list>
          <v-form class="pa-2" @submit.prevent="saveEditUser">
            <v-text-field
              v-model="newUser.username"
              label="New Username"
            ></v-text-field>
            <v-text-field
              v-model="newUser.email"
              label="New Email"
            ></v-text-field>
            <v-text-field
              v-model="newUser.password"
              label="New Password"
            ></v-text-field>
            <v-select
              v-model="newUser.role"
              :items="rolesUser"
              label="New Role"
            ></v-select>
            <v-text-field
              v-model="newUser.standfor"
              label="New Lab"
            ></v-text-field>
            <v-btn type="submit" size="large" block class="bg-primary"
              >Update</v-btn
            >
            <v-btn
              @click="clearForm"
              size="large"
              block
              class="bg-red-darken-2 mt-3"
              >Clear</v-btn
            >
          </v-form>
        </v-navigation-drawer>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { ref } from "vue";
import { useAppStore } from "@/store/app";
export default {
  setup() {
    const editUserToggle = ref(false);
    const rolesUser = ref(["Admin", "Staff"]);
    const { users, deleteUser, AddNewUser, editUser } = useAppStore();
    const drawer = ref(false);
    const currentUser = ref(null);
    const newUser = ref({
      username: "",
      email: "",
      password: "",
      role: "",
      standfor: "",
    });

    const addUser = () => {
      AddNewUser(newUser.value);
      clearForm();
    };
    const saveEditUser = () => {
      if (currentUser.value) {
        // Call the editUser action with the updated user data
        editUser({
          id: currentUser.value.id,
          username: newUser.value.username,
          email: newUser.value.email,
          password: newUser.value.password,
          role: newUser.value.role,
          standfor: newUser.value.standfor, // Corrected property name
        });

        // Do not clear the form data immediately after saving
        editUserToggle.value = false; // Close the edit form after saving
      }
    };

    const clearForm = () => {
      newUser.value = {
        username: "",
        email: "",
        password: "",
        role: "",
        standfor: "",
      };
    };

    const startEditUser = (user) => {
      // Set the form fields for editing
      editUserToggle.value = !editUserToggle.value;
      currentUser.value = user;

      // Pre-fill the form fields with the existing user data
      newUser.value = { ...user };
    };
    return {
      rolesUser,
      deleteUser,
      drawer,
      users,
      addUser,
      clearForm,
      AddNewUser,
      newUser,
      editUserToggle,
      startEditUser,
      saveEditUser,
    };
  },
};
</script>
