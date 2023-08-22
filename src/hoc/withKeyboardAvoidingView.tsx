import React from "react";
import { mainStyles } from "../styles/main";
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View } from "react-native";

const withKeyboardAvoiding =
  (Component: any) =>
  ({ children }: any) =>
    (
      <KeyboardAvoidingView style={mainStyles.flex1} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={mainStyles.flex1}>
          <Component style={mainStyles.flex1}>{children}</Component>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );

export const WithKeyboardAvoidingView = withKeyboardAvoiding(View);
