import ReactNavigationRouter from "@/components/routing/ReactNavigationRouter";
import { theme } from "@/theme";
import { isWeb } from "@/utils";
import { ThemeProvider } from "@rneui/themed";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {isWeb() ? (
        <View style={styles.container}>
          <View style={{ flex: 1, width: 400 }}>
            <ReactNavigationRouter />
          </View>
        </View>
      ) : (
        <ReactNavigationRouter />
      )}
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
