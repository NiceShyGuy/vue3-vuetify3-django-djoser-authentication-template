<template>
  <v-row class="register" justify="space-between">
    <v-col>
      <v-form ref="registerForm" @submit.prevent="submitForm">
        <div class="form-group">
          <v-text-field
            type="text"
            class="form-control"
            id="username"
            v-model="username"
            label="Username"
          />
        </div>
        <div class="form-group">
          <v-text-field
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            label="Email"
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
        <div class="form-group">
          <v-text-field
            type="password"
            class="form-control"
            id="password_confirmation"
            v-model="password_confirmation"
            label="Password Confirmation"
          />
        </div>
        <v-btn type="submit" class="btn btn-primary">Register</v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    submitForm() {
      if (
        this.email === "" ||
        this.password === "" ||
        this.password_confirmation === "" ||
        this.username === ""
      ) {
        alert("Please fill all the fields");
        return;
      }
      const validate = this.validateEmail(this.email);
      if (!validate) {
        alert("Please enter a valid email");
        return;
      }
      if (this.password !== this.password_confirmation) {
        alert("Passwords do not match");
        return;
      }
      axios
        .post("/api/v1/users/", {
          username: this.username,
          password: this.password,
          email: this.email,
        })
        .then((response) => {
          this.$router.push("/login");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    validateEmail(email) {
      var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
};
</script>
