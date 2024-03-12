import { PropsWithChildren } from "react";
import { ViewStyle, View, ScrollView } from "react-native";

export default function ScrollStack(
  props: PropsWithChildren<{ style?: ViewStyle }>
) {
  return (
    <ScrollView
      contentContainerStyle={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "center",
        //justifyContent: "space-between",
        ...props.style,
      }}
    >
      {props.children}
    </ScrollView>
  );
}
