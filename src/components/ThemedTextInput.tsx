import React, { forwardRef } from "react"
import { StyleSheet, TextInput, type TextInputProps } from "react-native"

import { useTheme } from "@/hooks/useTheme"

export type ThemedTextInputProps = TextInputProps & {
  size?: "sm" | "md" | "lg"
}

export const ThemedTextInput = forwardRef<TextInput, ThemedTextInputProps>(
  ({ style, size = "md", ...props }, ref) => {
    const theme = useTheme()
    const textColor = theme.text

    const backgroundColor = theme.input.background
    const placeholderTextColor = theme.input.placeholder
    const borderColor = theme.input.border
    const selectionColor = theme.tint
    const fontSizes = {
      sm: 18,
      md: 20,
      lg: 28,
    }

    return (
      <TextInput
        ref={ref}
        placeholderTextColor={placeholderTextColor}
        selectionColor={selectionColor}
        style={[
          styles.input,
          {
            color: textColor,
            backgroundColor,
            borderColor,
            fontSize: fontSizes[size || "md"],
          },
          style,
        ]}
        {...props}
      />
    )
  },
)

ThemedTextInput.displayName = "ThemedTextInput"

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    fontSize: 16,
  },
})
