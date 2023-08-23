import * as React from "react";
import { useState } from "react";
import { HelperText, TextInput, TextInputProps } from "react-native-paper";
import Colors from "../../../constants/Colors";
import { inputStyles } from "./InputStyles";
import { $radius_sm } from "../../../constants/BorderRadius";
import { mainStyles } from "../../../styles/main";
import { offsetsStyles } from "../../../styles/Offsets";
import colors from "../../../constants/Colors";

export type InputCustomProps = Omit<TextInputProps, "theme"> & {
  bgColor?: string;
  multilineHeight?: number;
  multilineLabel?: string;
  withCount?: boolean;
  errorMessage?: string;
  optionalDescription?: string;
};

export const InputCustom: React.FC<InputCustomProps> = React.forwardRef(
  (
    {
      mode = "outlined",
      label,
      value,
      placeholder,
      multilineLabel,
      error,
      style,
      errorMessage,
      maxLength,
      bgColor,
      multilineHeight,
      ...props
    },
    ref
  ) => {
    const [multilineLabelState, setMultilineLabelState] = useState("");
    const multilineInputProps: any = props.multiline
      ? {
          // position label still center,
          style: { height: multilineHeight || 200, justifyContent: "flex-start", textAlignVertical: "top" },
          // use placeholder instead label
          placeholder: multilineLabelState ? "" : placeholder || multilineLabel,
          // after focus set label
          onFocus: () =>
            setTimeout(() => {
              setMultilineLabelState(multilineLabel!);
            }, 80), // its best animation Timeout = 80
          onEndEditing: () => setMultilineLabelState(""),
        }
      : {};

    const inputBackgroundColor = bgColor ? { background: bgColor } : { background: colors.light.background };

    return (
      <>
        <TextInput
          ref={ref}
          mode={mode}
          label={props.multiline && !label ? multilineLabelState : label}
          value={value}
          placeholder={props.multiline && !placeholder ? multilineInputProps.placeholder : placeholder}
          error={error}
          theme={{
            roundness: $radius_sm,
            colors: {
              ...inputBackgroundColor,
            },
          }}
          outlineColor={Colors.light.gray3}
          activeOutlineColor={Colors.light.brandMain}
          style={[inputStyles.style, multilineInputProps.style, style]}
          maxLength={maxLength}
          textColor={Colors.light.text}
          {...multilineInputProps}
          {...props}
        />
        {error && errorMessage && (
          <HelperText type="error" visible={error} style={[mainStyles.alignSelfStart, offsetsStyles.offsetBottomLg]}>
            {errorMessage}
          </HelperText>
        )}
      </>
    );
  }
);
