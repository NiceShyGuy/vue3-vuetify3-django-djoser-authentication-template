<template>
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
          <div v-if="Array.isArray(values)">
            <li v-for="value in values" :key="value">
              {{ value }}
            </li>
          </div>
          <div v-else>
            <li>
              {{ values }}
            </li>
          </div>
        </dl>
      </dt>
    </dl>
  </v-alert>
</template>

<script>
export default {
  name: "AlertError",
  props: {
    errors: {},
  },
};
</script>
