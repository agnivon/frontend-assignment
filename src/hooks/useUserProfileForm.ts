import {
  EducationInfoFormValues,
  HobbiesFormValues,
  PersonalInfoFormValues,
  UserProfileField,
  UserProfileVField,
  WorkInfoFormValues,
} from "@/components/types";
import { produce } from "immer";
import React from "react";

export function getEmptyVField(value = ""): UserProfileVField {
  return {
    value,
    hidden: false,
  };
}

export default function useUserProfileForm<
  T extends Record<string, UserProfileVField>
>(initialValues: T) {
  const [values, setValues] = React.useState<T>(initialValues);

  const toggleHidden = (name: string) => {
    setValues((v) => {
      return produce(v, (draft) => {
        draft[name].hidden = !draft[name].hidden;
      });
    });
  };

  const handleValueChange = (name: string, value: T[keyof T]["value"]) => {
    setValues((v) => {
      return produce(v, (draft) => {
        draft[name].value = value;
      });
    });
  };

  return { values, setValues, toggleHidden, handleValueChange };
}
