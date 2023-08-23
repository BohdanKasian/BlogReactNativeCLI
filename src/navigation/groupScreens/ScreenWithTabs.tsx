/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../../constants/Colors";
import { RootStackParamList, ScreensList } from "../types";
import { Bellicon } from "../../assets/images/icons";
import { BottomTab } from "../../components/shared/buttomTab/BottomTab";
import { $radius_lg } from "../../constants/BorderRadius";
import { Animated, RegisteredStyle, ViewStyle } from "react-native";
import { MainScreen } from "../../screens/public/Main";

const Tab = createBottomTabNavigator<RootStackParamList>();
const { Navigator, Screen } = Tab;

type TAB_BAR_STYLES_TYPE =
  | {}
  | RegisteredStyle<ViewStyle>
  | Animated.Value
  | Animated.AnimatedInterpolation<any>
  | Animated.WithAnimatedObject<any>;

export const TAB_BAR_STYLES: TAB_BAR_STYLES_TYPE = {
  position: "absolute",
  bottom: 0,
  left: 0,
  height: 95,
  backgroundColor: Colors.light.gray1,
  borderWidth: 0,
  borderTopWidth: 0,
  paddingBottom: 0,
  marginHorizontal: 16,
  borderRadius: $radius_lg,
};

const ScreenWithTabs = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: TAB_BAR_STYLES,
        unmountOnBlur: true,
        lazy: false,
      }}
    >
      <Screen
        name={ScreensList.Main}
        component={MainScreen}
        options={{
          tabBarIcon: ({ focused }) => <BottomTab focused={focused} Icon={Bellicon} label="Posts" />,
        }}
      />
    </Navigator>
  );
};

export default ScreenWithTabs;
