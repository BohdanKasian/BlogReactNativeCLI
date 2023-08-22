/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ReminderType } from "../../../types/reminder";
import { EnumSortTypes } from "../../../types/sort";
import { EImportance } from "../initialStorage/initialImportance";

export const sortReminders = (reminders: ReminderType[], sort: EnumSortTypes) => {
  const isSortDate = sort === EnumSortTypes.dateOld || sort === EnumSortTypes.dateNew;
  const isSortImportance = sort === EnumSortTypes.importanceLow || sort === EnumSortTypes.importanceHigh;
  if (isSortDate) {
    return reminders.sort((a, b) =>
      sort === EnumSortTypes.dateNew
        ? (new Date(a.date) as any) - (new Date(b.date) as any)
        : (new Date(b.date) as any) - (new Date(a.date) as any)
    );
  } else if (isSortImportance) {
    return reminders.sort((a, b) =>
      sort === EnumSortTypes.importanceLow
        ? // @ts-ignore
          (a.importance.type as EImportance) - (b.importance.type as EImportance)
        : // @ts-ignore
          (b.importance.type as EImportance) - (a.importance.type as EImportance)
    );
  }
  return reminders;
};
