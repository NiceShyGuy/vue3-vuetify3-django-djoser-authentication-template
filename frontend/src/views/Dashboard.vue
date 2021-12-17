<template>
  <div class="dashboard">
    <v-img :src="logo" class="my-3" contain height="200" />
    <h1>Welcome to your dashboard</h1>
  </div>
</template>

<script>
import axios from "axios";
import logo from "../assets/logo.svg";

export default {
  name: "Dashboard",
  data: () => ({
    logo,
  }),
  components: {},
};
</script>
