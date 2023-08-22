import AsyncStorage from "@react-native-async-storage/async-storage";
import { SessionKeys } from "../session";

export const setRestoreCode = async (restoreCode: string) => {
  try {
    await AsyncStorage.setItem(SessionKeys.RESTORE_CODE, restoreCode);
    return true;
  } catch (error) {
    console.error("setRestoreCode ERROR");
    return false;
  }
};

export const getRestoreCode = async () => {
  try {
    return await AsyncStorage.getItem(SessionKeys.RESTORE_CODE);
  } catch (error) {
    return false;
  }
};

export const removeRestoreCode = async () => {
  try {
    await AsyncStorage.removeItem(SessionKeys.RESTORE_CODE);
    return true;
  } catch (error) {
    return false;
  }
};
