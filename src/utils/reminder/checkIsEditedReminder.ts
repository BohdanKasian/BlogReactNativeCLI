import { ReminderType } from "../../../types/reminder";
import { Reminders } from "../../graphql/generated/types";
import { initialImportance } from "../initialStorage/initialImportance";
import { initialRepeatReminder } from "../initialStorage/initialRepeatReminder";

export const checkIsEditedReminder = (allReminders: Reminders[], reminder: ReminderType) => {
  const transformedReminders = allReminders.map((reminder) => ({
    date: reminder.updatedAt || reminder.createdAt,
    id: reminder.id,
    title: {
      value: reminder.title,
      error: false,
      errorMessage: "",
    },
    description: {
      value: reminder.message || "",
      error: false,
      errorMessage: "",
    },
    status: reminder.status,
    importance: initialImportance.find((importance) => importance.type === reminder.importance) || initialImportance[0],
    repeat: initialRepeatReminder.find((repeat) => repeat.type === reminder.notify) || initialRepeatReminder[0],
  }));
  const findReminder = transformedReminders.find((item) => reminder.id === item.id) as ReminderType;

  const reminderKeys = Object.keys(reminder || {}) as [keyof ReminderType];
  return !reminderKeys.every((key) => {
    const findItem = findReminder[key];
    const reminderItem = reminder[key];
    if (key === "title" || key === "description") {
      const f = findItem as ReminderType["title" | "description"];
      const r = reminderItem as ReminderType["title" | "description"];
      return f.value === r.value;
    } else if (key === "theme") {
      const f = findItem as ReminderType["theme"];
      const r = reminderItem as ReminderType["theme"];
      if (!!f && !!r) {
        return f.id === r.id;
      }
      return true;
    } else if (key === "repeat" || key === "importance") {
      const f = findItem as ReminderType["repeat" | "importance"];
      const r = reminderItem as ReminderType["repeat" | "importance"];
      return f.type === r.type;
    }
    return true;
  });
};
