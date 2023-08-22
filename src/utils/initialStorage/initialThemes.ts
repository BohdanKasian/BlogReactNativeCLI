import { ThemesData } from "../../../types/themes";

export const initialThemes: Omit<ThemesData, "id">[] = [
  {
    name: "Stress",
    bgColor: "#BA1A1A12",
    textColor: "#BA1A1A",
  },
  {
    name: "Relaxation",
    bgColor: "#1A9DBA12",
    textColor: "#1A9DBA",
  },
  {
    name: "Self compassion",
    bgColor: "#1A51BA12",
    textColor: "#1A51BA",
  },
  {
    name: "Health",
    bgColor: "#15A54E12",
    textColor: "#15A54E",
  },
  {
    name: "Awareness",
    bgColor: "#BA671A12",
    textColor: "#BA671A",
  },
  {
    name: "Productivity",
    bgColor: "#311ABA12",
    textColor: "#311ABA",
  },
  {
    name: "Life",
    bgColor: "#42A41412",
    textColor: "#42A414",
  },
  {
    name: "Influence",
    bgColor: "#0F659612",
    textColor: "#0F6596",
  },
  {
    name: "Anxiety",
    bgColor: "#BA411A12",
    textColor: "#BA411A",
  },
  {
    name: "Sadness",
    bgColor: "#B7BA1A12",
    textColor: "#8F9213",
  },
];
