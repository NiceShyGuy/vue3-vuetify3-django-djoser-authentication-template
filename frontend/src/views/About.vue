<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="logo" class="my-3" contain height="200" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          <div>About VVDDA</div>
        </h1>

        <p class="subheading font-weight-regular">
          This is a base application template for future development projects,
          <br />please contribute online through
          <a
            href="https://github.com/3V1LXD/vue3-vuetify3-django-djoser-authentication-template"
            target="_blank"
            >Github</a
          >
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">Features</h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in features"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo from "../assets/logo.svg";

export default {
  name: "About",
  data: () => ({
    logo,
    features: [
      {
        text: "Theme switching",
        href: "#",
      },
      {
        text: "Registration",
        href: "#",
      },
      {
        text: "Authentication",
        href: "#",
      },
      {
        text: "Email verification",
        href: "#",
      },
      {
        text: "The best 404 Not Found page of All Time",
        href: "/notfound",
      },
    ],
  }),
};
</script>
