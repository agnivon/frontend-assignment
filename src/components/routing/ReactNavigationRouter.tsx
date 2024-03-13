import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HeaderTitle from "../feature/navigation/HeaderTitle";
import RemindersScreen from "../screen/RemindersScreen";
import { BottomTabNavigatorParamList } from "../types";
import { FontAwesome } from "@expo/vector-icons";
import UserProfileScreen from "../screen/UserProfileScreen";

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export default function ReactNavigationRouter() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 14 },
        }}
        initialRouteName="UserProfile"
      >
        <Tab.Screen
          name="Reminders"
          component={RemindersScreen}
          options={{
            headerTitle: ({ tintColor }) => (
              <HeaderTitle
                title="Reminders"
                Icon={<FontAwesome name="bell" size={24} color={"#2089dc"} />}
              />
            ),
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesome
                name={focused ? "bell" : "bell-o"}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="UserProfile"
          component={UserProfileScreen}
          options={{
            title: "User Profile",
            headerTitle: () => (
              <HeaderTitle
                title="Profile"
                Icon={
                  <FontAwesome name="user-circle" size={24} color={"#2089dc"} />
                }
              />
            ),
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesome
                name={focused ? "user-circle" : "user-circle-o"}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
