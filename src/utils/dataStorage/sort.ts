import AsyncStorage from "@react-native-async-storage/async-storage";
import { EnumSortTypes } from "../../../types/sort";

const USER_SORT_KEY = "_SORT";

export const setSortStorage = async (email: string, sort: EnumSortTypes) => {
  try {
    return await AsyncStorage.setItem(email + USER_SORT_KEY, sort);
  } catch (e) {
    // saving error
    console.log(e, "error: setSortStorage");
  }
};

type getSortType = (email: string) => Promise<EnumSortTypes | null | undefined>;

export const getSortStorage: getSortType = async (email: string) => {
  try {
    return (await AsyncStorage.getItem(email + USER_SORT_KEY)) as EnumSortTypes;
  } catch (e) {
    // error reading value
    console.log(e, "error: getSortStorage");
  }
};

export const removeSortStorage = (email: string) => {
  AsyncStorage.removeItem(email + USER_SORT_KEY);
};
