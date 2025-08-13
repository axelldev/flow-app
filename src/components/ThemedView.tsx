import { useThemeColor } from "@/hooks/useThemeColor"
import { View, type ViewProps } from "react-native"
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context"

export type ThemedViewProps = ViewProps & {
  lightColor?: string
  darkColor?: string
  safeArea?: boolean
} & SafeAreaViewProps

export function ThemedView({
  lightColor,
  darkColor,
  style,
  safeArea,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  )

  if (safeArea) {
    return (
      <SafeAreaView
        style={[{ backgroundColor, flex: 1 }, style]}
        {...otherProps}
      />
    )
  }

  return <View style={[{ backgroundColor }, style]} {...otherProps} />
}
