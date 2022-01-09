<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="logo" class="my-3" contain height="200" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          <div>Welcome to the Dashboard</div>
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo from "../assets/logo.svg";

export default {
  name: "Dashboard",
  data: () => ({
    logo,
  }),
};
</script>
