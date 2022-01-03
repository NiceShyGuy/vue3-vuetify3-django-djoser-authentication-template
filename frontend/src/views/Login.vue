<template>
  <v-row class="login">
    <v-col>
      <h1>Login</h1>
      <v-form ref="loginForm" @submit.prevent="login">
        <div class="form-group">
          <v-text-field
            type="username"
            class="form-control"
            id="username"
            v-model="username"
            label="Username"
          />
        </div>
        <div class="form-group">
          <v-text-field
            type="password"
            class="form-control"
            id="password"
            v-model="password"
            label="Password"
          />
        </div>
        <v-btn type="submit" class="btn btn-primary">Login</v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios.defaults.headers.common["Authorization"] = "";
      axios
        .post("/api/v1/token/login", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          const token = response.data.auth_token;
          this.$store.commit("setToken", token);
          axios.defaults.headers.common["Authorization"] = "Token " + token;
          localStorage.setItem("token", token);
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
