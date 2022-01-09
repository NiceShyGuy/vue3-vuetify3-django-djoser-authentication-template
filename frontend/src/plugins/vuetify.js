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
          primary: colors.orange.darken2,
          secondary: colors.orange.lighten1,
          "on-secondary": colors.orange.darken3,
          background: colors.grey.lighten3,
          "on-background": colors.grey.darken4,
          error: colors.red.accent3,
          info: colors.orange.darken2,
          success: colors.green.accent3,
          surface: colors.orange.lighten2,
          warning: colors.red.accent3,
        },
        dark: false,
        variables: {},
      },
      dark: {
        colors: {
          primary: colors.orange.lighten2,
          secondary: colors.orange.darken1,
          "on-secondary": colors.orange.lighten1,
          background: colors.grey.darken4,
          "on-background": colors.grey.lighten2,
          error: colors.red.accent3,
          info: colors.orange.lighten2,
          success: colors.green.accent3,
          surface: colors.orange.darken2,
          warning: colors.red.accent3,
        },
        dark: true,
        variables: {},
      },
    },
  },
});
