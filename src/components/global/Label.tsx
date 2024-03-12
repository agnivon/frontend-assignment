import { PropsWithChildren } from "react";
import { Text } from "react-native";

export default function Label(props: PropsWithChildren<{}>) {
  return (
    <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.children}</Text>
  );
}
