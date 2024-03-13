import { MEDIUMS, REMINDER_FREQUENCY, REMINDER_TASKS } from "@/constants";
import { z } from "zod";

export const RemindersScreenSchema = z
  .object({
    task: z.enum(REMINDER_TASKS),
    frequency: z.enum(REMINDER_FREQUENCY),
    time: z.coerce.date(),
    mediums: z.array(z.enum(MEDIUMS)),
  })
  .required({
    task: true,
    frequency: true,
    time: true,
    mediums: true,
  });
