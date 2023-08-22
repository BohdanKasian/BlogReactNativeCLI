export enum EImportance {
  low = "low",
  medium = "medium",
  important = "high",
}

export type ImportanceType = {
  type: EImportance;
  text: string;
  textColor: string;
  bgColor: string;
};

export const initialImportance = [
  {
    type: EImportance.low,
    text: "low",
    textColor: "#01CB87",
    bgColor: "#01CB8712",
  },
  {
    type: EImportance.medium,
    text: "medium",
    textColor: "#FFA95C",
    bgColor: "#FFA95C12",
  },
  {
    type: EImportance.important,
    text: "important",
    textColor: "#E93E3A",
    bgColor: "#E93E3A12",
  },
];
