import Label from "@/components/global/Label";
import RNEInput from "@/components/global/RNEInput";
import Stack from "@/components/global/Stack";
import { UserProfileFormValues } from "@/components/types";
import { getEmptyVField } from "@/hooks/useUserProfileForm";
import { isWeb } from "@/utils";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Button } from "@rneui/themed";
import { FieldArray, useFormikContext } from "formik";

export default function EducationInfoForm() {
  const formik = useFormikContext<UserProfileFormValues>();

  const { handleChange, handleBlur, handleSubmit, setFieldValue } = formik;

  const values = formik.values.educationInfo;

  return (
    <Stack style={{ gap: isWeb() ? 15 : 0, width: "100%" }}>
      <Stack>
        <Label>Course</Label>
        <RNEInput
          value={values.course.value}
          onChangeText={handleChange("educationInfo.course.value")}
          onBlur={handleBlur("educationInfo.course.value")}
          placeholder="Photography"
        />
      </Stack>
      <Stack>
        <Label>College</Label>
        <RNEInput
          value={values.college.value}
          onChangeText={handleChange("educationInfo.college.value")}
          onBlur={handleBlur("educationInfo.college.value")}
          placeholder="Rhode Island School of Design"
        />
      </Stack>
      <Stack>
        <Label>Status</Label>
        <Stack>
          <FieldArray name="educationInfo.status">
            {(arrayHelpers) => {
              return (
                <>
                  {values.status.map((status, index) => {
                    const name = `educationInfo.status[${index}].value`;
                    return (
                      <Stack
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                        key={`educationInfo.status_${index}`}
                      >
                        <RNEInput
                          value={status.value}
                          onChangeText={handleChange(name)}
                          onBlur={handleBlur(name)}
                          containerStyle={{
                            width: index === 0 ? "100%" : "90%",
                          }}
                          placeholder="Status..."
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
