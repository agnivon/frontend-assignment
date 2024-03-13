import { createTheme } from "@rneui/themed";

export const theme = createTheme({
  components: {
    CheckBox: {
      iconType: "material-community",
      checkedIcon: "checkbox-marked",
      uncheckedIcon: "checkbox-blank-outline",
      checkedColor: "#2089dc",
    },
  },
});
