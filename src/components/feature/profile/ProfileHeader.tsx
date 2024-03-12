import Stack from "@/components/global/Stack";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from "@rneui/themed";
import { ActivityIndicator, StyleSheet, Text } from "react-native";


export default function ProfileHeader() {
  return (
    <Stack
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-start",
        marginVertical: 30,
        gap: 20,
        alignContent: "center"
      }}
    >
      <Image
        source={{ uri: "https://source.unsplash.com/random?sig=1" }}
        containerStyle={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Stack style={{ gap: 2, alignItems: "flex-start" }}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Siddhi's Space</Text>
        <Stack style={{ flexDirection: "row", gap: 2 }}>
          <MaterialCommunityIcons name="star-shooting" size={26} color="orange" />
          <Text style={{ fontSize: 20 }}>100</Text>
        </Stack>
      </Stack>
    </Stack>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 60,
    borderRadius: 9999,
    overflow: "hidden",
  },
});
