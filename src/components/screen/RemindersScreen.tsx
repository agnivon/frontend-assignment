import {
  MEDIUMS,
  REMINDER_FREQUENCY_OPTION_LIST,
  REMINDER_TASKS_OPTION_LIST,
} from "@/constants";
import {
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Button, CheckBox } from "@rneui/themed";
import React from "react";
import { ActivityIndicator, Alert, ScrollView, Text, View } from "react-native";
import RNEDropdown from "../global/RNEDropdown";
import { DropdownItem, RemindersScreenProps } from "../types";

import { TimePickerModal } from "react-native-paper-dates";
import Label from "../global/Label";
import Stack from "../global/Stack";

import { en, registerTranslation } from "react-native-paper-dates";
import AsyncStorageInstance from "@/lib/storage/async-storage";
import { useToast } from "react-native-toast-notifications";
import { RemindersScreenSchema } from "@/schema/validation";
import { SafeAreaProvider } from "react-native-safe-area-context";
registerTranslation("en", en);

export default function RemindersScreen(_props: RemindersScreenProps) {
  const toast = useToast();

  const [task, setTask] = React.useState<DropdownItem["value"]>(
    REMINDER_TASKS_OPTION_LIST[0].value
  );
  const [frequency, setFrequency] = React.useState<DropdownItem["value"]>(
    REMINDER_FREQUENCY_OPTION_LIST[0].value
  );

  const [time, setTime] = React.useState<Date>(new Date());

  const [mediums, setMediums] = React.useState<string[]>([MEDIUMS[0]]);

  const [isTimePickerVisible, setTimePickerVisibility] =
    React.useState<boolean>(false);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = ({
    hours,
    minutes,
  }: {
    hours: number;
    minutes: number;
  }) => {
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    setTime(date);
    hideTimePicker();
  };

  const toggleCheckbox = (value: string) => {
    setMediums((mediums) => {
      if (mediums.includes(value)) return mediums.filter((m) => m !== value);
      else return [...mediums, value];
    });
  };

  const [loading, setLoading] = React.useState<boolean>(false);
  const [saving, setSaving] = React.useState<boolean>(false);

  async function loadData() {
    setLoading(false);
    const response = await AsyncStorageInstance.get(
      "reminders-screen",
      RemindersScreenSchema
    );
    if (response.success) {
      setTask(response.data.task);
      setFrequency(response.data.frequency);
      setTime(new Date(response.data.time));
      setMediums(response.data.mediums);
    }
    setLoading(true);
  }

  async function saveData() {
    setSaving(true);
    try {
      await AsyncStorageInstance.set(
        "reminders-screen",
        { task, frequency, time: time.toISOString(), mediums },
        RemindersScreenSchema
      );
      toast.show("Settings saved", { type: "normal" });
    } catch {
      toast.show("Something went wrong", { type: "danger" });
    }
    setSaving(false);
  }

  return (
    <SafeAreaProvider>
      <ScrollView style={{ flex: 1 }} onLayout={() => loadData()}>
        <TimePickerModal
          locale="en"
          visible={isTimePickerVisible}
          onDismiss={hideTimePicker}
          onConfirm={handleConfirm}
          hours={time.getHours()}
          minutes={time.getMinutes()}
        />
        {loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              padding: 25,
              gap: 25,
            }}
          >
            <Stack style={{ alignItems: "stretch" }}>
              <Label>Select Task</Label>
              <RNEDropdown
                data={REMINDER_TASKS_OPTION_LIST}
                value={task}
                placeholder="Select task"
                labelField="label"
                valueField="value"
                onChange={(item) => setTask(item.value)}
                style={{ marginBottom: 0 }}
                renderLeftIcon={() => (
                  <FontAwesome5
                    name="tasks"
                    size={18}
                    color="black"
                    style={{ marginRight: 5 }}
                  />
                )}
              />
            </Stack>
            <Stack style={{ alignItems: "stretch" }}>
              <Label>Set Frequency</Label>
              <RNEDropdown
                data={REMINDER_FREQUENCY_OPTION_LIST}
                value={frequency}
                placeholder="Select frequency"
                labelField="label"
                valueField="value"
                onChange={(item) => setFrequency(item.value)}
                style={{ marginBottom: 0 }}
                renderLeftIcon={() => (
                  <Ionicons
                    name="timer-outline"
                    size={24}
                    color="black"
                    style={{ marginRight: 5 }}
                  />
                )}
              />
            </Stack>
            <Stack
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Label>Select Time</Label>
              <Stack
                style={{ gap: 10, flexDirection: "row", alignItems: "center" }}
              >
                <Text style={{ fontSize: 20 }}>
                  {time.toLocaleTimeString(undefined, {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </Text>
                <Button
                  radius={99999}
                  type="clear"
                  onPress={() => {
                    showTimePicker();
                  }}
                  size="sm"
                  style={{ padding: 0, margin: 0 }}
                >
                  <AntDesign color="#2089dc" name="clockcircle" size={30} />
                </Button>
              </Stack>
            </Stack>
            <Stack style={{ alignItems: "flex-start" }}>
              <Label>Select Medium</Label>
              <Stack
                style={{
                  gap: 5,
                  flexDirection: "row",
                }}
              >
                <CheckBox
                  checked={mediums.includes(MEDIUMS[0])}
                  onPress={() => toggleCheckbox(MEDIUMS[0])}
                  containerStyle={{ backgroundColor: "none", padding: 0 }}
                />
                <FontAwesome
                  name="whatsapp"
                  size={35}
                  color={mediums.includes(MEDIUMS[0]) ? "green" : "black"}
                  onPress={() => toggleCheckbox(MEDIUMS[0])}
                />
                <CheckBox
                  checked={mediums.includes(MEDIUMS[1])}
                  onPress={() => toggleCheckbox(MEDIUMS[1])}
                  containerStyle={{ backgroundColor: "none", padding: 0 }}
                />
                <AntDesign
                  name="message1"
                  size={35}
                  color={mediums.includes(MEDIUMS[1]) ? "orange" : "black"}
                  onPress={() => toggleCheckbox(MEDIUMS[1])}
                />
                <CheckBox
                  checked={mediums.includes(MEDIUMS[2])}
                  onPress={() => toggleCheckbox(MEDIUMS[2])}
                  containerStyle={{ backgroundColor: "none", padding: 0 }}
                />
                <Feather
                  name="phone"
                  size={35}
                  color={mediums.includes(MEDIUMS[2]) ? "red" : "black"}
                  onPress={() => toggleCheckbox(MEDIUMS[2])}
                />
              </Stack>
            </Stack>
            <Stack style={{ alignItems: "flex-start" }}>
              <Label>Integrate Calendar</Label>
              <Stack
                style={{
                  gap: 15,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <AntDesign name="google" size={35} color="black" />
                <FontAwesome5 name="microsoft" size={35} color="black" />
              </Stack>
            </Stack>
            <Stack
              style={{
                gap: 20,
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Button
                size="md"
                radius={"md"}
                containerStyle={{ flex: 1 }}
                onPress={() => saveData()}
                loading={saving}
              >
                Save
              </Button>
              <Button
                size="md"
                radius={"md"}
                type="outline"
                containerStyle={{ flex: 1 }}
              >
                Cancel
              </Button>
            </Stack>
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <ActivityIndicator />
          </View>
        )}
      </ScrollView>
    </SafeAreaProvider>
  );
}
