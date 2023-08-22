export enum ERepeatReminder {
  daily = "daily",
  weekly = "weekly",
  monthly = "monthly",
}

export type RepeatReminderType = {
  type: ERepeatReminder;
  text: string;
};

export const initialRepeatReminder = [
  {
    type: ERepeatReminder.daily,
    text: "daily",
  },
  {
    type: ERepeatReminder.weekly,
    text: "weekly",
  },
  {
    type: ERepeatReminder.monthly,
    text: "monthly",
  },
];
