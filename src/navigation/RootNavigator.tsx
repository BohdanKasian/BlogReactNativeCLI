import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, ScreensList } from "./types";
import { GoBack } from "../components/goBack/GoBack";
import ScreenWithTabs from "./groupScreens/ScreenWithTabs";
import { PostOverviewScreen } from "../screens/public/PostOverview";

const Stack = createNativeStackNavigator<RootStackParamList>();
const { Navigator } = Stack;

export const RootNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: "none",
      }}
    >
      <Stack.Screen name={ScreensList.Root} component={ScreenWithTabs} />
      <Stack.Screen
        name={ScreensList.PostOverview}
        component={PostOverviewScreen}
        options={{
          headerShown: true,
          header: () => <GoBack />,
        }}
      />
    </Navigator>
  );
};
