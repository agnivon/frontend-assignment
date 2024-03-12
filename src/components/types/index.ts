import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type BottomTabNavigatorParamList = {
  Reminders: undefined;
  UserProfile: undefined;
};

export type RemindersScreenProps = NativeStackScreenProps<
  BottomTabNavigatorParamList,
  "Reminders"
>;

export type UserProfileScreenProps = NativeStackScreenProps<
  BottomTabNavigatorParamList,
  "UserProfile"
>;

export type DropdownItem = { label: string; value: string };

export enum UserProfileSection {
  PERSONAL_INFO = "personalInfo",
  WORK_INFO = "workInfo",
  HOBBIES = "hobbies",
  EDUCATION_INFO = "educationInfo",
}

export type UserProfileField<T = string> = T;
export type UserProfileVField<T = string> = {
  value: T;
  hidden: boolean;
};

export type PersonalInfoFormValues = {
  fullName: UserProfileVField;
  age: UserProfileVField;
  gender: UserProfileVField;
  location: UserProfileVField;
  relationshipStatus: UserProfileVField;
  shortBio: UserProfileVField;
};

export type EducationInfoFormValues = {
  course: UserProfileVField;
  college: UserProfileVField;
  status: UserProfileVField[];
};

export type WorkInfoFormValues = {
  designation: UserProfileVField;
  company: UserProfileVField;
  status: UserProfileVField[];
};

export type HobbiesFormValues = {
  hobbies: UserProfileVField;
  influencers: UserProfileVField;
  favorites: UserProfileVField[];
};

export type UserProfileFormValues = {
  [UserProfileSection.PERSONAL_INFO]: PersonalInfoFormValues;
  [UserProfileSection.EDUCATION_INFO]: EducationInfoFormValues;
  [UserProfileSection.WORK_INFO]: WorkInfoFormValues;
  [UserProfileSection.HOBBIES]: HobbiesFormValues;
  sectionVisibility: {
    [UserProfileSection.PERSONAL_INFO]: boolean;
    [UserProfileSection.EDUCATION_INFO]: boolean;
    [UserProfileSection.WORK_INFO]: boolean;
    [UserProfileSection.HOBBIES]: boolean;
  };
};
