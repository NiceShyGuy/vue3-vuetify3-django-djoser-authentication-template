<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="username"
          class="form-control"
          id="username"
          v-model="username"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
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
