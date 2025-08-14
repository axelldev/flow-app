import { useTheme } from "@/hooks/useTheme"
import { View, type ViewProps } from "react-native"
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context"

export type ThemedViewProps = ViewProps & {
  safeArea?: boolean
} & SafeAreaViewProps

export function ThemedView({
  style,
  safeArea,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useTheme().background

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
