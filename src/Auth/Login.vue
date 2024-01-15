<template>
  <div
    style="
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 20;
    "
  >
    <v-img
      width="100%"
      height="100%"
      cover
      src="../assets/18705226_v1016-a-10.jpg"
    >
      <v-container>
        <div class="pa-2">
          <v-row>
            <v-col cols="auto" lg="6" sm="12">
              <v-card
                width="100%"
                height="auto"
                flat
                class="bg-transparent pa-3 mt-7"
              >
                <div class="d-flex">
                  <v-card-title
                    class="text-h2 mt-6 font-weight-bold text-primary"
                  >
                    សូម
                  </v-card-title>
                  <div>
                    <v-card-title
                      class="text-h4 d-lg-block d-none font-weight-medium"
                    >
                      ស្វាគមន៏មក
                    </v-card-title>
                    <v-card-title
                      class="text-h5 d-block d-lg-none font-weight-medium"
                    >
                      ស្វាគមន៏មក
                    </v-card-title>
                    <v-card-title
                      class="text-h4 d-lg-block d-none font-weight-medium"
                    >
                      កាន់​បន្ទប់ជួសជុល
                    </v-card-title>
                    <v-card-title
                      class="text-h5 d-block d-lg-none font-weight-medium"
                    >
                      កាន់​បន្ទប់ជួសជុល
                    </v-card-title>
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-container>
              <v-col
                cols="12"
                lg="6"
                sm="12"
                class="d-flex align-center justify-center"
              >
                <v-card
                  width="100%"
                  elevation="2"
                  class="bg-transparent pa-3 mt-7"
                >
                  <v-form @submit.prevent="login">
                    <v-text-field
                      clearable
                      variant="outlined"
                      v-model="loginForm.email"
                      color="primary"
                      label="Email"
                      class=""
                      :rules="[
                        () => !!loginForm.email || 'Email is required',
                        () => isEmailValid() || 'មិនមែនជា Email ទេ',
                      ]"
                    ></v-text-field>
                    <v-text-field
                      clearable
                      variant="outlined"
                      v-model="loginForm.password"
                      :rules="[
                        () => !!loginForm.password || 'Password is required',
                      ]"
                      color="primary"
                      label="Password"
                      class=""
                    ></v-text-field>
                    <v-btn size="large" type="submit" block color="primary">
                      Login
                    </v-btn>
                  </v-form>
                </v-card>
              </v-col>
            </v-container>
          </v-row>
        </div>
      </v-container>
    </v-img>
  </div>
</template>
<!-- Login.vue -->
<script>
import { ref } from "vue";
import { useAppStore } from "@/store/app";
import { useRouter } from "vue-router";

export default {
  setup() {
    const loginForm = ref({
      email: "",
      password: "",
    });

    const appStore = useAppStore();  // Create an instance of your store

    const router = useRouter();

    const login = () => {
  // Check if the entered email and password match any user
  const user = appStore.users.find(
    (u) =>
      u.email === loginForm.value.email &&
      u.password === loginForm.value.password
  );

  if (user) {
    // Perform the login logic (you might want to set a token, update state, etc.)
    console.log("Login successful", user);

    // Set the currentUser in the store
    appStore.setCurrentUser(user);

    // Redirect to the dashboard
    router.push("/dashboard");
  } else {
    // Display an error message or redirect to an error page
    console.error("Invalid email or password");
  }
};


    const isEmailValid = () => {
      // Check if the email contains '@gmail.com'
      return /@gmail\.com$/.test(loginForm.value.email);
    };

    const isPasswordCorrect = () => {
      // Replace this with your actual logic to check if the password is correct
      return loginForm.value.password === 'correct_password';
    };

    return {
      loginForm,
      login,
      isEmailValid,
      isPasswordCorrect,
    };
  },
};

</script>
