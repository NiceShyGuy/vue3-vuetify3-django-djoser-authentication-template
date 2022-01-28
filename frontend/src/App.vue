<template>
  <v-app :theme="theme" :key="isAuthenticated">
    <v-theme-provider :theme="theme">
      <v-card>
        <v-app-bar id="appbar" density="compact">
          <v-spacer></v-spacer>
          <v-btn flat><router-link to="/">Home</router-link></v-btn>
          <v-btn flat><router-link to="/about">About</router-link></v-btn>
          <v-btn flat v-if="isAuthenticated">
            <router-link to="/dashboard">Dashboard</router-link>
          </v-btn>
          <v-btn flat v-if="!isAuthenticated">
            <router-link to="/login">Login</router-link>
          </v-btn>
          <v-btn flat v-if="!isAuthenticated">
            <router-link to="/register">Register</router-link>
          </v-btn>
          <v-btn flat v-if="isAuthenticated">
            <router-link @click.native="logout" to="/">Logout</router-link>
          </v-btn>
          <v-btn>
            <v-switch
              @click="toggleTheme"
              label="Dark Mode"
              v-model="theme"
              true-value="dark"
              false-value="light"
              style="height: 56px"
            ></v-switch>
          </v-btn>
        </v-app-bar>
      </v-card>

      <v-container fluid class="mt-12" id="routerContainer">
        <router-view />
      </v-container>
    </v-theme-provider>
  </v-app>
</template>

<script>
import { ref } from "vue";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "App",

  setup() {
    const theme = ref("light");
    return {
      theme,
      toggleTheme: () => {
        theme.value = theme.value === "light" ? "dark" : "light";
        localStorage.setItem("theme", theme.value);
      },
    };
  },
  methods: {
    logout() {
      axios.post("/api/v1/token/logout").then((response) => {
        localStorage.removeItem("token");
        this.$store.commit("removeToken");
        this.$router.push("/");
      });
    },
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated",
    }),
  },
  beforeCreate() {
    this.$store.commit("initializeStore");
    const token = this.$store.state.token;
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Token ${token}`;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }
    // load theme from local storage
    if (localStorage.getItem("theme")) {
      this.theme = localStorage.getItem("theme");
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap");

#app {
  font-family: "Roboto Slab", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#appbar a,
button a {
  color: rgb(var(--v-theme-on-background));
}

a {
  color: rgb(var(--v-theme-on-secondary));
  cursor: pointer;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
