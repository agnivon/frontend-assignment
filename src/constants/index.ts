import { DropdownItem } from "@/components/types";

function generateOptions(labels: readonly string[]) {
  return labels.map((label) => ({
    label,
    value: label,
  }));
}

export const REMINDER_TASKS = [
  "Insights",
  "Meetings",
  "Research",
  "Development",
  "Testing",
] as const;

export const REMINDER_TASKS_OPTION_LIST: DropdownItem[] =
  generateOptions(REMINDER_TASKS);

export const REMINDER_FREQUENCY = [
  "Daily",
  "Weekly",
  "Monthly",
  "Yearly",
] as const;

export const REMINDER_FREQUENCY_OPTION_LIST: DropdownItem[] =
  generateOptions(REMINDER_FREQUENCY);

export const GENDERS = ["Male", "Female"] as const;

export const GENDER_OPTION_LIST: DropdownItem[] = generateOptions(GENDERS);

export const LOCATIONS = [
  "Paris",
  "Istanbul",
  "Seattle",
  "San Francisco",
  "London",
] as const;

export const LOCATION_OPTION_LIST: DropdownItem[] = generateOptions(LOCATIONS);

export const RELATIONSHIP_STATUS = ["Single", "Engaged", "Married"] as const;

export const RELATIONSHIP_STATUS_OPTION_LIST: DropdownItem[] =
  generateOptions(RELATIONSHIP_STATUS);

export const MEDIUMS = ["Whatsapp", "TextMessage", "PhoneCall"] as const;
