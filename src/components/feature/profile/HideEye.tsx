import { FontAwesome } from "@expo/vector-icons";
import { GestureResponderEvent } from "react-native";

export default function HideEye({
  hidden,
  onPress,
  size = 24,
}: {
  hidden: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  size?: number;
}) {
  return (
    <FontAwesome
      name={hidden ? "eye-slash" : "eye"}
      size={size}
      color="black"
      onPress={onPress}
    />
  );
}
