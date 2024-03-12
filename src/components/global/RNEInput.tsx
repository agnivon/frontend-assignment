import { InputProps } from "@rneui/base";
import { Input } from "@rneui/themed";

export default function RNEInput(props: InputProps) {
  const { inputStyle, inputContainerStyle, containerStyle, ...rest } = props;
  return (
    <Input
      inputStyle={[{ borderWidth: 1, margin: 0, borderRadius: 5 }, inputStyle]}
      inputContainerStyle={[
        { borderBottomWidth: 0, width: "100%" },
        inputContainerStyle,
      ]}
      containerStyle={[
        {
          borderWidth: 0,
          paddingVertical: 0,
          paddingHorizontal: 0,
        },
        containerStyle,
      ]}
      errorProps={{ margin: 0 }}
      errorStyle={{ margin: 0 }}
      {...rest}
    />
  );
}
