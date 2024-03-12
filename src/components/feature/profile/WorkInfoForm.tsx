import Label from "@/components/global/Label";
import RNEInput from "@/components/global/RNEInput";
import Stack from "@/components/global/Stack";
import { UserProfileFormValues } from "@/components/types";
import { getEmptyVField } from "@/hooks/useUserProfileForm";
import { isWeb } from "@/utils";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Button } from "@rneui/themed";
import { FieldArray, useFormikContext } from "formik";

export default function WorkInfoForm() {
  const formik = useFormikContext<UserProfileFormValues>();

  const { handleChange, handleBlur, handleSubmit, setFieldValue } = formik;

  const values = formik.values.workInfo;

  return (
    <Stack style={{ gap: isWeb() ? 15 : 0, width: "100%" }}>
      <Stack>
        <Label>Designation</Label>
        <RNEInput
          value={values.designation.value}
          onChangeText={handleChange("workInfo.designation.value")}
          onBlur={handleBlur("workInfo.designation.value")}
        />
      </Stack>
      <Stack>
        <Label>Company</Label>
        <RNEInput
          value={values.company.value}
          onChangeText={handleChange("workInfo.company.value")}
          onBlur={handleBlur("workInfo.company.value")}
        />
      </Stack>
      <Stack>
        <Label>Status</Label>
        <Stack>
          <FieldArray name="workInfo.status">
            {(arrayHelpers) => {
              return (
                <>
                  {values.status.map((status, index) => {
                    const name = `workInfo.status[${index}].value`;
                    return (
                      <Stack
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                        key={`workInfo.status_${index}`}
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
                  {values.status.length < 4 && (
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
