import { ApolloError } from "@apollo/client";
import { Alert } from "react-native";

export const AddUpdateDevice = (
  pushToken: string,
  updateDevices: any,
  insertDevice: any,
  userUid: any,
  devices?: number
) => {
  if (devices) {
    updateDevices({
      variables: {
        where: {
          deviceId: { _eq: pushToken },
        },
        _set: {
          deviceId: pushToken,
          userId: userUid,
          pushToken: pushToken,
        },
      },
    }).catch((err: ApolloError) => {
      Alert.alert(err.message);
    });
  } else {
    insertDevice({
      variables: {
        object: {
          deviceId: pushToken,
          userId: userUid,
          pushToken,
        },
      },
    }).catch((err: ApolloError) => {
      Alert.alert(err.message);
    });
  }
};
