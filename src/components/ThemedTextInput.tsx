import React, { forwardRef } from "react";
import { StyleSheet, TextInput, type TextInputProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextInputProps = TextInputProps & {
  // Text color overrides
  lightColor?: string;
  darkColor?: string;

  // Background color overrides
  lightBackgroundColor?: string;
  darkBackgroundColor?: string;

  // Placeholder color overrides
  lightPlaceholderColor?: string;
  darkPlaceholderColor?: string;

  // Border color overrides
  lightBorderColor?: string;
  darkBorderColor?: string;
};

export const ThemedTextInput = forwardRef<TextInput, ThemedTextInputProps>(
  (
    {
      lightColor,
      darkColor,
      lightBackgroundColor,
      darkBackgroundColor,
      lightPlaceholderColor,
      darkPlaceholderColor,
      lightBorderColor,
      darkBorderColor,
      style,
      ...props
    },
    ref
  ) => {
    const textColor = useThemeColor(
      { light: lightColor, dark: darkColor },
      "text"
    );
    const backgroundColor = useThemeColor(
      { light: lightBackgroundColor, dark: darkBackgroundColor },
      "background"
    );
    const placeholderTextColor = useThemeColor(
      { light: lightPlaceholderColor, dark: darkPlaceholderColor },
      "icon"
    );
    const borderColor = useThemeColor(
      { light: lightBorderColor, dark: darkBorderColor },
      "icon"
    );
    const selectionColor = useThemeColor({}, "tint");

    return (
      <TextInput
        ref={ref}
        placeholderTextColor={placeholderTextColor}
        selectionColor={selectionColor}
        style={[
          styles.input,
          { color: textColor, backgroundColor, borderColor },
          style,
        ]}
        {...props}
      />
    );
  }
);

ThemedTextInput.displayName = "ThemedTextInput";

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    fontSize: 16,
  },
});
