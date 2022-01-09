<template>
  <v-alert
    border="start"
    color="success"
    class="ma-2"
    align="left"
    v-if="Object.keys(success).length > 0"
  >
    <dl>
      <dt v-for="(value, name) in success" :key="name">
        <dl v-if="name == 'message'">
          {{ value }}
        </dl>
      </dt>
    </dl>
  </v-alert>
</template>

<script>
export default {
  name: "AlertSuccess",
  props: {
    success: {},
  },
};
</script>
