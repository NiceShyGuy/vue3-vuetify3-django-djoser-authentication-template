// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/lib/styles/main.sass";
import colors from "vuetify/lib/util/colors";

// Vuetify
import { createVuetify, ThemeDefinition } from "vuetify";

import * as components from "vuetify/lib/components";
import * as directives from "vuetify/lib/directives";

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: colors.blue.darken2,
          secondary: colors.grey.lighten3,
          background: colors.grey.lighten5,
          "on-background": colors.grey.darken4,
          error: colors.red.accent3,
          info: colors.blue.darken2,
          success: colors.green.accent3,
          surface: colors.grey.lighten3,
          warning: colors.orange.accent3,
        },
        dark: false,
        variables: {},
      },
      dark: {
        colors: {
          primary: colors.grey.lighten2,
          secondary: colors.grey.darken3,
          background: colors.grey.darken4,
          "on-background": colors.grey.lighten2,
          error: colors.red.accent3,
          info: colors.blue.lighten2,
          success: colors.green.accent3,
          surface: colors.blue.darken3,
          warning: colors.orange.accent3,
        },
        dark: true,
        variables: {},
      },
    },
  },
});
