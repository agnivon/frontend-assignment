import CTextInput from "@/components/global/CTextInput";
import Label from "@/components/global/Label";
import RNEDropdown from "@/components/global/RNEDropdown";
import RNEInput from "@/components/global/RNEInput";
import Stack from "@/components/global/Stack";
import { UserProfileFormValues } from "@/components/types";
import {
  GENDER_OPTION_LIST,
  LOCATION_OPTION_LIST,
  RELATIONSHIP_STATUS_OPTION_LIST,
} from "@/constants";
import { isWeb } from "@/utils";
import { useFormikContext } from "formik";
import React from "react";
import HideEye from "./HideEye";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function PersonalInfoForm() {
  // const [values, setValues] = React.useState<PersonalInfoFormValues>({
  //   fullName: getEmptyVField(),
  //   age: getEmptyVField(),
  //   gender: getEmptyVField(),
  //   location: getEmptyVField(),
  //   relationshipStatus: getEmptyVField(),
  //   shortBio: getEmptyVField(),
  // });

  // const toggleHidden = (name: keyof PersonalInfoFormValues) => {
  //   setValues((v) => {
  //     return produce(v, (draft) => {
  //       draft[name].hidden = !draft[name].hidden;
  //     });
  //   });
  // };

  // const handleValueChange = (
  //   name: keyof PersonalInfoFormValues,
  //   value: PersonalInfoFormValues[keyof PersonalInfoFormValues]["value"]
  // ) => {
  //   setValues((v) => {
  //     return produce(v, (draft) => {
  //       draft[name].value = value;
  //     });
  //   });
  // };

  const formik = useFormikContext<UserProfileFormValues>();

  const { handleChange, handleBlur, handleSubmit, setFieldValue } = formik;

  const values = formik.values.personalInfo;

  return (
    <Stack style={{ gap: isWeb() ? 15 : 0, width: "100%" }}>
      <Stack>
        <Stack
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Label>Full Name</Label>
          <HideEye
            hidden={values.fullName.hidden}
            onPress={() =>
              setFieldValue(
                "personalInfo.fullName.hidden",
                !values.fullName.hidden
              )
            }
          />
        </Stack>
        <RNEInput
          value={values.fullName.value}
          onChangeText={handleChange("personalInfo.fullName.value")}
          onBlur={handleBlur("personalInfo.fullName.value")}
          placeholder="Alexandra Johnson"
        />
      </Stack>

      <Stack>
        <Stack
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Label>Age</Label>
          <HideEye
            hidden={values.age.hidden}
            onPress={() =>
              setFieldValue("personalInfo.age.hidden", !values.age.hidden)
            }
          />
        </Stack>
        <RNEInput
          value={values.age.value}
          onChangeText={handleChange("personalInfo.age.value")}
          onBlur={handleBlur("personalInfo.age.value")}
          inputMode="numeric"
          keyboardType="number-pad"
          placeholder="20"
        />
      </Stack>

      <Stack>
        <Stack
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Label>Gender</Label>
          <HideEye
            hidden={values.gender.hidden}
            onPress={() =>
              setFieldValue("personalInfo.gender.hidden", !values.gender.hidden)
            }
          />
        </Stack>
        <RNEDropdown
          data={GENDER_OPTION_LIST}
          value={values.gender.value}
          labelField="label"
          valueField="value"
          onChangeText={handleChange("personalInfo.gender.value")}
          onChange={(item) =>
            setFieldValue("personalInfo.gender.value", item.value)
          }
          placeholder="Select gender"
          renderLeftIcon={() => (
            <MaterialCommunityIcons
              name="gender-male-female"
              size={24}
              color="black"
              style={{ marginRight: 5 }}
            />
          )}
        />
      </Stack>

      <Stack>
        <Stack
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Label>Location</Label>
          <HideEye
            hidden={values.location.hidden}
            onPress={() =>
              setFieldValue(
                "personalInfo.location.hidden",
                !values.location.hidden
              )
            }
          />
        </Stack>
        <RNEDropdown
          data={LOCATION_OPTION_LIST}
          value={values.location.value}
          labelField="label"
          valueField="value"
          onChangeText={handleChange("personalInfo.location.value")}
          onChange={(item) =>
            setFieldValue("personalInfo.location.value", item.value)
          }
          placeholder="Select location"
          renderLeftIcon={() => (
            <MaterialIcons
              name="location-pin"
              size={24}
              color="black"
              style={{ marginRight: 5 }}
            />
          )}
        />
      </Stack>

      <Stack>
        <Stack
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Label>Relationship Status</Label>
          <HideEye
            hidden={values.relationshipStatus.hidden}
            onPress={() =>
              setFieldValue(
                "personalInfo.relationshipStatus.hidden",
                !values.relationshipStatus.hidden
              )
            }
          />
        </Stack>
        <RNEDropdown
          data={RELATIONSHIP_STATUS_OPTION_LIST}
          value={values.relationshipStatus.value}
          labelField="label"
          valueField="value"
          onChangeText={handleChange("personalInfo.relationshipStatus.value")}
          onChange={(item) =>
            setFieldValue("personalInfo.relationshipStatus.value", item.value)
          }
          placeholder="Select status"
          renderLeftIcon={() => (
            <MaterialCommunityIcons
              name="human-male-female"
              size={24}
              color="black"
              style={{ marginRight: 5 }}
            />
          )}
        />
      </Stack>

      <Stack>
        <Stack
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Label>Short Bio</Label>
          <HideEye
            hidden={values.shortBio.hidden}
            onPress={() =>
              setFieldValue(
                "personalInfo.shortBio.hidden",
                !values.shortBio.hidden
              )
            }
          />
        </Stack>
        <CTextInput
          value={values.shortBio.value}
          onChangeText={handleChange("personalInfo.shortBio.value")}
          onBlur={handleBlur("personalInfo.shortBio.value")}
          editable
          multiline
          numberOfLines={4}
          maxLength={500}
          style={{ alignSelf: "stretch" }}
          placeholder="I'm an aspiring writer with a deep passion for storytelling."
        />
      </Stack>
    </Stack>
  );
}
