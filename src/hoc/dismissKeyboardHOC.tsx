import React from "react";
import { TouchableWithoutFeedback, Keyboard, View } from "react-native";
import { mainStyles } from "../styles/main";

const DismissKeyboardHOC = (Comp: any) => {
  return ({ children }: any) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={mainStyles.flex1}>
      <Comp style={mainStyles.flex1}>{children}</Comp>
    </TouchableWithoutFeedback>
  );
};
export const DismissKeyboardView = DismissKeyboardHOC(View);
