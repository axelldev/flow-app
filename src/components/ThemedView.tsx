import { useThemeColor } from "@/hooks/useThemeColor"
import { View, type ViewProps } from "react-native"

export type ThemedViewProps = ViewProps & {
  lightColor?: string
  darkColor?: string
}

export function ThemedView({
  lightColor,
  darkColor,
  style,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  )

  return <View style={[{ backgroundColor }, style]} {...otherProps} />
}
