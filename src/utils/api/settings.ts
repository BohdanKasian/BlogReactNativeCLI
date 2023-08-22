import { Alert } from "react-native";
import { ApolloError } from "@apollo/client";
import RNLocalize from "react-native-localize";
import { Settings } from "../../graphql/generated/types";

export const AddUpdateSettings = (
  userUid: string,
  insertSettings: any,
  updateSettings: any,
  settingsArr?: Settings[]
) => {
  if (settingsArr?.length) {
    updateSettings({
      variables: {
        _set: {
          timeZone: RNLocalize.getTimeZone(),
        },
        where: {
          userId: {
            _eq: userUid,
          },
        },
      },
    }).catch((err: ApolloError) => {
      Alert.alert(err.message);
    });
  } else {
    insertSettings({
      variables: {
        object: {
          notDisturbFromHours: 23,
          notDisturbFromMinutes: 0,
          notDisturbToHours: 8,
          notDisturbToMinutes: 0,
          timeZone: RNLocalize.getTimeZone(),
          userId: userUid,
        },
      },
    }).catch((err: ApolloError) => {
      Alert.alert(err.message);
    });
  }
};
