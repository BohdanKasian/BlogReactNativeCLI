import AsyncStorage from "@react-native-async-storage/async-storage";

export enum SessionKeys {
  FIRST_LOGIN = "FIRST_LOGIN",
  FIRST_LOGIN_ONBOARDING = "FIRST_LOGIN_ONBOARDING",
  RESTORE_CODE = "RESTORE_CODE",
}

export const setFirstLoginOnboarding = async (value: string) => {
  try {
    await AsyncStorage.setItem(SessionKeys.FIRST_LOGIN_ONBOARDING, value);
    return true;
  } catch (error) {
    return false;
  }
};

export const getFirstLoginOnboarding = async () => {
  try {
    return await AsyncStorage.getItem(SessionKeys.FIRST_LOGIN_ONBOARDING);
  } catch (error) {
    return false;
  }
};

export const setFirstLoginWelcome = async () => {
  try {
    await AsyncStorage.setItem(SessionKeys.FIRST_LOGIN, "FIRST_LOGIN");
    return true;
  } catch (error) {
    return false;
  }
};

export const getFirstLoginWelcome = async () => {
  try {
    const isFirstLogin = await AsyncStorage.getItem(SessionKeys.FIRST_LOGIN);
    return !isFirstLogin;
  } catch (error) {
    return false;
  }
};
