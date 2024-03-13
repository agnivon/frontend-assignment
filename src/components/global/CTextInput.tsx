import { TextInput, TextInputProps } from "react-native";

export default function CTextInput(props: TextInputProps) {
  const { style, ...rest } = props;
  return (
    <TextInput
      style={[
        { borderWidth: 1, margin: 0, borderRadius: 5, padding: 5 },
        { width: "100%" },
        style,
      ]}
      placeholderTextColor={"gray"}
      {...rest}
    />
  );
}
