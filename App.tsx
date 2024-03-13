import ReactNavigationRouter from "@/components/routing/ReactNavigationRouter";
import { theme } from "@/theme";
import { isWeb } from "@/utils";
import { ThemeProvider } from "@rneui/themed";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { ToastProvider } from "react-native-toast-notifications";

export default function App() {
  const { width } = useWindowDimensions();
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider placement="top">
        {isWeb() ? (
          <View style={styles.container}>
            <View style={{ flex: 1, width: width >= 450 ? 400 : "100%" }}>
              <ReactNavigationRouter />
            </View>
          </View>
        ) : (
          <ReactNavigationRouter />
        )}
      </ToastProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
