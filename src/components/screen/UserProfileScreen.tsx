import { SafeAreaView } from "react-native";
import ProfileHeader from "../feature/profile/ProfileHeader";
import ScrollStack from "../global/ScrollStack";
import { UserProfileScreenProps } from "../types";
import ProfileForm from "../feature/profile/ProfileForm";

export default function UserProfileScreen(_props: UserProfileScreenProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollStack style={{ paddingHorizontal: 20, alignItems: "stretch" }}>
        <ProfileHeader />
        <ProfileForm />
      </ScrollStack>
    </SafeAreaView>
  );
}
