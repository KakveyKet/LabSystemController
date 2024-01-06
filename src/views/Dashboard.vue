<template>
  <v-container>
    <v-row class="mt-7">
      <v-col
        cols="12"
        sm="12"
        md="4"
        lg="4"
        v-for="item in data"
        :key="item.title"
      >
        <v-card width="100%" height="auto" class="bg-grey-lighten-5 pa-2">
          <v-row>
            <v-col cols="8" lg="8" class="mt-2 mx-lg-0 mx-auto">
              <v-img cover
              width="100%"
              height="200px"
                class="rounded-lg"
                :src="item.img"
              ></v-img>
            </v-col>
            <v-col cols="4 d-lg-block d-md-none d-none">
              <p class="text-h6 mt-5">
                {{ item.title }}
              </p>
              <v-chip
                rounded="lg"
                class="mt-3 pa-5 text-subtitle-2"
                color="primary"
              >
                {{ item.number }} គ្រឿង </v-chip
              ><v-col class="12">
                <v-btn
                  class="ms-2 bg-green float-right mt-4 ml-4"
                  icon
                  color="primary"
                  size="large"
                >
                  <v-icon color="white" size="30">mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-col>
            <v-col cols="12 text-left d-lg-none d-block" sm="12">
              <v-card-title class="text-subtitl-1">
                {{ item.title }}
              </v-card-title>
              <v-col
                cols="
              12"
              ></v-col>
              <v-chip
                rounded="lg"
                class="pa-5 ml-3 text-subtitle-2"
                color="primary"
              >
                {{ item.number }} គ្រឿង
              </v-chip>
              <v-btn
                class="ms-2 float-right "
                icon
                color="primary"
                size="large"
              >
                <v-icon color="white" size="30">mdi-plus</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      data: [
        {
          title: "ចំនួនកុំព្យូទ័រសរុប",
          number: 112,
          img: "https://img.freepik.com/free-vector/desktop-computer-concept-illustration_114360-16232.jpg?t=st=1704251699~exp=1704252299~hmac=4fff85fab10d8e3900f25781c67e1b666275ad49cc315f7a8519d4b0b011eadc",
        },
        {
          title: "ចំនួនអ្នកកាន់កុំព្យូទ័រសរុប",
          number: 112,
          img: "https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?size=626&ext=jpg&uid=R72959284&ga=GA1.2.685942804.1702829483&semt=ais", // Adjust the image path based on your
        },
        {
          title: "ចំនួនសាលកុំព្យូទ័រសរុប",
          number: 112,
          img: "https://img.freepik.com/free-vector/scientific-laboratory-workplace-concept-with-equipment-research-scientists-looking-computer-screen_1284-19448.jpg?size=626&ext=jpg&uid=R72959284&ga=GA1.1.685942804.1702829483&semt=ais", // Adjust the image path based on your project structure
        },
        {
          title: "កុំព្យូទ័រកុំពុងជួសជុល",
          number: 112,
          img: "https://img.freepik.com/free-vector/computer-repair-support-service-isometric-illustration_1284-57663.jpg?w=996&t=st=1704252597~exp=1704253197~hmac=0c8c0f301c4f8ba92e6f1d8de236d8f88800dbb683e39ccda55d3dcd75f98f03", // Adjust the image path based on your project structure
        },
      ],
    };
  },
};
</script>
