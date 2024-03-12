import { PropsWithChildren } from "react";
import { ViewStyle, View } from "react-native";

export default function Stack(props: PropsWithChildren<{ style?: ViewStyle }>) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "stretch",
        ...props.style,
      }}
    >
      {props.children}
    </View>
  );
};
