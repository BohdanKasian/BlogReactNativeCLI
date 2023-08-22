import React from "react";
import { Alert, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SmallLogoIcon } from "../../assets/images/logo";
import { mainStyles } from "../../styles/main";
import { TextCustom } from "../shared/text/TextCustom";
import { offsetsStyles } from "../../styles/Offsets";
import { IconSquare } from "../shared/iconSquare/IconSquare";
import { BellSmallicon, MuteIcon, SwapIcon } from "../../assets/images/icons";
import { onSwitchOpenSortReminder } from "../../redux/reducers/sort";
import { useGetSettingsQuery, useUpdateSettingsMutation } from "../../graphql/generated/settings.generated";
import { AppRootState } from "../../redux/store";
import { Loading } from "../loading/Loading";

export const Header = () => {
  const dispatch = useDispatch();
  const [updateSettings, { loading: updateSettingsLoading }] = useUpdateSettingsMutation();
  const { user, networkConnection } = useSelector((state: AppRootState) => ({
    user: state.user.user,
    networkConnection: state.utils.networkConnection,
  }));
  const { data } = useGetSettingsQuery({
    variables: {
      where: {
        userId: {
          _eq: user?.userId,
        },
      },
    },
  });
  const settingsData = data?.Settings?.[0];

  const onPressSort = () => {
    dispatch(onSwitchOpenSortReminder());
  };

  const onPressMute = () => {
    updateSettings({
      variables: {
        _set: {
          silent: !settingsData?.silent,
        },
        where: {
          userId: {
            _eq: user?.userId,
          },
        },
      },
    })
      .then((data) => {
        console.log(data, "upd");
      })
      .catch((err) => {
        Alert.alert(err);
      });
  };

  return (
    <View style={[mainStyles.row, mainStyles.layoutPrivate, mainStyles.alignCenter, mainStyles.justifyBetween]}>
      <View style={[mainStyles.row, mainStyles.alignCenter]}>
        <SmallLogoIcon style={offsetsStyles.offsetRightMd} />
        <TextCustom title="Mental Reminders" weight="medium" size="h4" />
      </View>
      <View style={mainStyles.row}>
        <IconSquare
          onPress={onPressSort}
          disabled={!networkConnection}
          size={48}
          Icon={SwapIcon}
          borderWidth={0}
          style={offsetsStyles.offsetRightSm}
        />
        <IconSquare
          onPress={onPressMute}
          disabled={!networkConnection}
          size={48}
          Icon={!settingsData?.silent ? BellSmallicon : MuteIcon}
          borderWidth={0}
        />
      </View>
      {updateSettingsLoading && <Loading />}
    </View>
  );
};
