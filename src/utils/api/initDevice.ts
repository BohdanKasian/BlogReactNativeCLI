import { initialThemes } from "../initialStorage/initialThemes";
import { AddUpdateDevice } from "./device";
import { ApolloError, LazyQueryExecFunction } from "@apollo/client";
import { GetDevicesQuery } from "../../graphql/generated/devices.generated";
import { Exact, InputMaybe, Settings, String_Comparison_Exp, Themes_Bool_Exp } from "../../graphql/generated/types";
import { GetThemesQuery } from "../../graphql/generated/themes.generated";
import { AddUpdateSettings } from "./settings";
import { Alert } from "react-native";

type InitDeviceType = (
  pushToken: string,
  getDevice: LazyQueryExecFunction<
    GetDevicesQuery,
    Exact<{ deviceId?: InputMaybe<String_Comparison_Exp> | undefined }>
  >,
  getThemes: LazyQueryExecFunction<GetThemesQuery, Exact<{ where: Themes_Bool_Exp }>>,
  updateDevices: any,
  insertDevice: any,
  insertThemes: any,
  updateSettings: any,
  userUid: string,
  insertSettings: any,
  settingsArr?: Settings[]
) => void;
export const initDevice: InitDeviceType = (
  pushToken,
  getDevice,
  getThemes,
  updateDevices,
  insertDevice,
  insertThemes,
  updateSettings,
  userUid,
  insertSettings,
  settingsArr
) => {
  getDevice({
    variables: {
      deviceId: {
        _eq: pushToken,
      },
    },
  }).then((data) => {
    AddUpdateSettings(userUid, insertSettings, updateSettings, settingsArr);
    AddUpdateDevice(pushToken, updateDevices, insertDevice, userUid, data.data?.Devices.length);
    getThemes({
      variables: {
        where: {
          userId: {
            _eq: userUid,
          },
        },
      },
    }).then((res) => {
      if (!res.data?.Themes.length) {
        insertThemes({
          variables: {
            objects: initialThemes.map((theme) => ({ ...theme, userId: userUid })),
          },
        }).catch((err: ApolloError) => {
          Alert.alert(err.message);
        });
      }
    });
  });
};
