import Label from "@/components/global/Label";
import RNEInput from "@/components/global/RNEInput";
import Stack from "@/components/global/Stack";
import { UserProfileFormValues } from "@/components/types";
import { getEmptyVField } from "@/hooks/useUserProfileForm";
import { isWeb } from "@/utils";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Button } from "@rneui/themed";
import { FieldArray, useFormikContext } from "formik";

export default function HobbiesForm() {
  const formik = useFormikContext<UserProfileFormValues>();

  const { handleChange, handleBlur, handleSubmit, setFieldValue } = formik;

  const values = formik.values.hobbies;

  return (
    <Stack style={{ gap: isWeb() ? 15 : 0, width: "100%" }}>
      <Stack>
        <Label>Hobbies</Label>
        <RNEInput
          value={values.hobbies.value}
          onChangeText={handleChange("hobbies.hobbies.value")}
          onBlur={handleBlur("hobbies.hobbies.value")}
        />
      </Stack>
      <Stack>
        <Label>Influencers</Label>
        <RNEInput
          value={values.influencers.value}
          onChangeText={handleChange("hobbies.influencers.value")}
          onBlur={handleBlur("hobbies.influencers.value")}
        />
      </Stack>
      <Stack>
        <Label>Favorites</Label>
        <Stack>
          <FieldArray name="hobbies.favorites">
            {(arrayHelpers) => {
              return (
                <>
                  {values.favorites.map((status, index) => {
                    const name = `hobbies.favorites[${index}].value`;
                    return (
                      <Stack
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                        key={`hobbies.favorites_${index}`}
                      >
                        <RNEInput
                          value={status.value}
                          onChangeText={handleChange(name)}
                          onBlur={handleBlur(name)}
                          containerStyle={{
                            width: index === 0 ? "100%" : "90%",
                          }}
                        />
                        {index > 0 && (
                          <FontAwesome
                            name="trash-o"
                            size={24}
                            color="red"
                            onPress={() => arrayHelpers.remove(index)}
                            style={{ marginBottom: !isWeb() ? 18 : 0 }}
                          />
                        )}
                      </Stack>
                    );
                  })}
                  {values.favorites.length < 4 && (
                    <Button
                      onPress={() => arrayHelpers.push(getEmptyVField())}
                      radius={"md"}
                    >
                      <AntDesign
                        name="pluscircleo"
                        size={20}
                        color="white"
                        style={{
                          marginRight: 5,
                        }}
                      />
                      Add
                    </Button>
                  )}
                </>
              );
            }}
          </FieldArray>
        </Stack>
      </Stack>
    </Stack>
  );
}
