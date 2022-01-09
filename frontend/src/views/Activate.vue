<template>
  <v-row class="activate">
    <v-col>
      <h1>Activate</h1>
      <AlertError :errors="errors" />
      <AlertSuccess :success="success" />
      <div
        v-if="
          Object.keys(errors).length > 0 ||
          uid === undefined ||
          uid.length === 0
        "
      >
        <v-form ref="loginForm" @submit.prevent="resend_activation">
          <div class="form-group" align="left">
            <v-text-field
              type="text"
              class="form-control"
              id="email"
              v-model="email"
              label="Email"
            />
            <v-btn type="submit" class="btn btn-primary">
              Resend Activation
            </v-btn>
          </div>
        </v-form>
      </div>
      <v-btn flat v-if="isAuthenticated">
        <router-link to="/dashboard">Go to Dashboard</router-link>
      </v-btn>
      <v-btn flat v-if="!isAuthenticated">
        <router-link to="/login">Go to Login</router-link>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import AlertError from "../components/AlertError.vue";
import AlertSuccess from "../components/AlertSuccess.vue";

export default {
  name: "Activate",
  components: {
    AlertError,
    AlertSuccess,
  },
  data() {
    return {
      uid: this.$route.params.uid,
      token: this.$route.params.token,
      email: "",
      errors: {},
      success: {},
    };
  },
  methods: {
    activate() {
      axios.defaults.headers.common["Authorization"] = "";
      axios
        .post("/api/v1/users/activation/", {
          uid: this.uid,
          token: this.token,
        })
        .then((response) => {
          this.errors = {};
          const status = response.status;
          this.success = {
            status: status,
            message: status === 204 ? "Activation Successful" : status,
          };
          console.log(response);
        })
        .catch((error) => {
          this.errors = error.response.data;
          console.log(this.errors);
        });
    },
    resend_activation() {
      axios.defaults.headers.common["Authorization"] = "";
      axios
        .post("/api/v1/users/resend_activation/", {
          email: this.email,
        })
        .then((response) => {
          this.errors = {};
          const status = response.status;
          this.success = {
            status: status,
            message: status === 204 ? "Activation Email Sent" : status,
          };
          console.log(response.data);
        })
        .catch((error) => {
          const status = error.response.status;
          this.errors = {
            status: status,
            message: status === 400 ? error.response.statusText : status,
          };
          console.log(this.errors);
        });
    },
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated",
    }),
  },
  mounted() {
    if (this.uid !== undefined && this.token !== undefined) {
      if (this.uid.length > 0 && this.token.length > 0) {
        this.activate();
      }
    }
  },
};
</script>
