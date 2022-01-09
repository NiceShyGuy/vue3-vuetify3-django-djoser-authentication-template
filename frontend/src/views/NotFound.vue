<template>
  <v-container fluid class="notfound" align="center" :style="background">
    <NotFoundAnimation />
    <br />
    <h1 class="message"></h1>
    <br />
    <v-btn flat v-if="isAuthenticated">
      <router-link to="/dashboard">Go to Dashboard</router-link>
    </v-btn>
    <v-btn flat v-if="!isAuthenticated">
      <router-link to="/login">Go to Login</router-link>
    </v-btn>
  </v-container>
</template>

<style scoped>
#routerContainer {
  background-color: #000;
}
</style>

<script>
import { mapGetters } from "vuex";
import NotFoundAnimation from "../components/NotFoundAnimation.vue";
export default {
  name: "NotFound",
  components: {
    NotFoundAnimation,
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated",
    }),
  },
  data() {
    return {
      background: {
        backgroundImage: `url(${require("../assets/stars.png")})`,
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
        "min-height": "100vh",
      },
    };
  },
  methods: {
    typingAnimation() {
      const el = document.querySelector(".message");
      const message = "You have been ejected from the Spaceship.";
      const speed = 70;
      var part = "";
      var offset = 0;
      var stepper = setInterval(function () {
        part = message.substr(0, offset);
        offset++;
        el.textContent = part;
        if (offset > message.length) {
          // exit the loop
          clearInterval(stepper);
        }
      }, speed);
    },
  },
  mounted() {
    this.typingAnimation();
  },
};
</script>
