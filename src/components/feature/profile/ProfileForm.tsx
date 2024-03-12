import Stack from "@/components/global/Stack";
import { UserProfileFormValues, UserProfileSection } from "@/components/types";
import { getEmptyVField } from "@/hooks/useUserProfileForm";
import { ListItem } from "@rneui/base";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";
import { Formik, useFormikContext } from "formik";
import { produce } from "immer";
import React from "react";
import EducationInfoForm from "./EducationInfoForm";
import PersonalInfoForm from "./PersonalInfoForm";
import WorkInfoForm from "./WorkInfoForm";
import HobbiesForm from "./HobbiesForm";
import HideEye from "./HideEye";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const initialValues: UserProfileFormValues = {
  [UserProfileSection.PERSONAL_INFO]: {
    fullName: getEmptyVField(),
    age: getEmptyVField(),
    gender: getEmptyVField(),
    location: getEmptyVField(),
    relationshipStatus: getEmptyVField(),
    shortBio: getEmptyVField(),
  },
  [UserProfileSection.EDUCATION_INFO]: {
    course: getEmptyVField(),
    college: getEmptyVField(),
    status: [getEmptyVField()],
  },
  [UserProfileSection.WORK_INFO]: {
    designation: getEmptyVField(),
    company: getEmptyVField(),
    status: [getEmptyVField()],
  },
  [UserProfileSection.HOBBIES]: {
    hobbies: getEmptyVField(),
    influencers: getEmptyVField(),
    favorites: [getEmptyVField()],
  },
  sectionVisibility: {
    [UserProfileSection.PERSONAL_INFO]: false,
    [UserProfileSection.EDUCATION_INFO]: false,
    [UserProfileSection.WORK_INFO]: false,
    [UserProfileSection.HOBBIES]: false,
  },
};

const initialSectionDisplay = {
  [UserProfileSection.PERSONAL_INFO]: false,
  [UserProfileSection.EDUCATION_INFO]: false,
  [UserProfileSection.WORK_INFO]: false,
  [UserProfileSection.HOBBIES]: false,
};

const AccordionHeader = ({
  title,
  section,
}: {
  title: string;
  section: UserProfileSection;
}) => {
  const formik = useFormikContext<UserProfileFormValues>();
  const hidden = formik?.values.sectionVisibility[section];
  return (
    <>
      <ListItemContent>
        <Stack
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Stack style={{ gap: 1 }}>
            <ListItem.Title style={{ fontWeight: "900", fontSize: 16 }}>
              {title}
            </ListItem.Title>
            <View>
              <Text style={{ fontSize: 10 }}>
                Earn{" "}
                <MaterialCommunityIcons
                  name="star-shooting"
                  size={10}
                  color="orange"
                />
                {""}
                100 stars on completion
              </Text>
            </View>
          </Stack>

          <Stack
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {section !== UserProfileSection.PERSONAL_INFO && (
              <HideEye
                hidden={hidden}
                onPress={() =>
                  formik.setFieldValue(`sectionVisibility.${section}`, !hidden)
                }
                size={24}
              />
            )}
            <View
              style={{
                width: 30,
                height: 12,
                borderWidth: 1,
                padding: 1.5,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{ width: "80%", height: 7, backgroundColor: "black" }}
              ></View>
            </View>
          </Stack>
        </Stack>
      </ListItemContent>
    </>
  );
};

export default function ProfileForm() {
  const [sectionDisplay, setSectionDisplay] = React.useState<
    Record<UserProfileSection, boolean>
  >({
    ...initialSectionDisplay,
    [UserProfileSection.PERSONAL_INFO]: true,
  });

  const toggleSectionDisplay = (section: UserProfileSection) => {
    setSectionDisplay((v) =>
      produce(v, (draft) => {
        if (draft[section]) {
          draft[section] = false;
        } else {
          [
            UserProfileSection.PERSONAL_INFO,
            UserProfileSection.EDUCATION_INFO,
            UserProfileSection.WORK_INFO,
            UserProfileSection.HOBBIES,
          ].forEach((key) => {
            draft[key] = false;
          });
          draft[section] = true;
        }
      })
    );
  };

  function getAccordionProps(title: string, section: UserProfileSection) {
    return {
      content: <AccordionHeader title={title} section={section} />,
      isExpanded: sectionDisplay[section],
      onPress: () => toggleSectionDisplay(section),
      containerStyle: { paddingHorizontal: 10, borderRadius: 10 },
    };
  }

  //console.log(sectionDisplay);

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      {({}) => {
        return (
          <Stack style={{ marginBottom: 10 }}>
            <ListItem.Accordion
              {...getAccordionProps(
                "Personal Info",
                UserProfileSection.PERSONAL_INFO
              )}
            >
              <ListItem containerStyle={{ backgroundColor: "transparent" }}>
                <ListItem.Content>
                  <PersonalInfoForm />
                </ListItem.Content>
              </ListItem>
            </ListItem.Accordion>

            <ListItem.Accordion
              {...getAccordionProps(
                "Education Info",
                UserProfileSection.EDUCATION_INFO
              )}
            >
              <ListItem containerStyle={{ backgroundColor: "transparent" }}>
                <ListItem.Content>
                  <EducationInfoForm />
                </ListItem.Content>
              </ListItem>
            </ListItem.Accordion>

            <ListItem.Accordion
              {...getAccordionProps("Work Info", UserProfileSection.WORK_INFO)}
            >
              <ListItem containerStyle={{ backgroundColor: "transparent" }}>
                <ListItem.Content>
                  <WorkInfoForm />
                </ListItem.Content>
              </ListItem>
            </ListItem.Accordion>

            <ListItem.Accordion
              {...getAccordionProps(
                "Hobbies and Interests",
                UserProfileSection.HOBBIES
              )}
            >
              <ListItem containerStyle={{ backgroundColor: "transparent" }}>
                <ListItem.Content>
                  <HobbiesForm />
                </ListItem.Content>
              </ListItem>
            </ListItem.Accordion>
          </Stack>
        );
      }}
    </Formik>
  );
}
