<template>
  <v-row class="register" justify="space-between">
    <v-col>
      <h1>Register</h1>
      <v-alert
        border="start"
        color="error"
        class="ma-2"
        align="left"
        v-if="Object.keys(errors).length > 0"
      >
        <dl>
          <dt v-for="(values, name) in errors" :key="name">
            <dl>
              {{ name }} :
              <li v-for="value in values" :key="value">
                {{ value }}
              </li>
            </dl>
          </dt>
        </dl>
      </v-alert>
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
            id="re_password"
            v-model="re_password"
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
      re_password: "",
      errors: {},
    };
  },
  methods: {
    submitForm() {
      axios
        .post("/api/v1/users/", {
          username: this.username,
          password: this.password,
          re_password: this.re_password,
          email: this.email,
        })
        .then((response) => {
          this.$router.push("/login");
          console.log(response);
        })
        .catch((error) => {
          this.errors = error.response.data;
          console.log(this.errors);
        });
    },
  },
};
</script>
