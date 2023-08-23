import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { Provider as RNPaperProvider } from "react-native-paper";
import { Portal } from "react-native-paper";
import { RootNavigator } from "./RootNavigator";
import { mainStyles } from "../styles/main";
import { store } from "../redux/store";
import colors from "../constants/Colors";
/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: colors.light.text,
    background: colors.light.background,
  },
};

export default function Navigation() {
  return (
    <Portal.Host>
      <SafeAreaView style={mainStyles.flex1}>
        <NavigationContainer theme={MyTheme}>
          <Provider store={store}>
            <RNPaperProvider>
              <RootNavigator />
            </RNPaperProvider>
          </Provider>
        </NavigationContainer>
      </SafeAreaView>
    </Portal.Host>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
