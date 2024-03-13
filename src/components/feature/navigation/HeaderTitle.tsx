import React from "react";
import { Text, View } from "react-native";

export default function HeaderTitle({
  title,
  Icon,
}: {
  title: string;
  Icon: React.ReactNode;
}) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
      }}
    >
      {Icon}
      <Text
        style={{
          fontSize: 20,
          marginTop: 0,
          fontWeight: "600",
          color: "#2089dc",
        }}
      >
        {title}
      </Text>
    </View>
  );
}
