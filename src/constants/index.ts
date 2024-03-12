import { DropdownItem } from "@/components/types";

function generateOptions(labels: string[]) {
  return labels.map((label) => ({
    label,
    value: label,
  }));
}

export const REMINDER_TASKS_OPTION_LIST: DropdownItem[] = generateOptions([
  "Insights",
  "Meetings",
  "Research",
  "Development",
  "Testing",
]);

export const REMINDER_FREQUENCY_OPTION_LIST: DropdownItem[] = generateOptions([
  "Daily",
  "Weekly",
  "Monthly",
  "Yearly",
]);

export const GENDER_OPTION_LIST: DropdownItem[] = generateOptions([
  "Male",
  "Female",
]);

export const LOCATION_OPTION_LIST: DropdownItem[] = generateOptions([
  "Paris",
  "Istanbul",
  "Seattle",
  "San Francisco",
  "London",
]);

export const RELATIONSHIP_STATUS_OPTION_LIST: DropdownItem[] = generateOptions([
  "Single",
  "Engaged",
  "Married",
]);

export const MEDIUMS: string[] = ["Whatsapp", "TextMessage", "PhoneCall"];
