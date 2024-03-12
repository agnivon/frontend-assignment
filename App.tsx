import ReactNavigationRouter from "@/components/routing/ReactNavigationRouter";
import { theme } from "@/theme";
import { ThemeProvider } from "@rneui/themed";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReactNavigationRouter />
    </ThemeProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
