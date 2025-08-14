import { useTheme } from "@/hooks/useTheme"
import { StyleSheet, Text, TextProps } from "react-native"

export type ThemdTextProps = TextProps & {
  type?: "default" | "title" | "link" | "navTitle"
}

export function ThemedText({ type, style, ...otherProps }: ThemdTextProps) {
  const color = useTheme().text

  return (
    <Text
      style={[{ color }, type ? styles[type] : {}, style]}
      {...otherProps}
    />
  )
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  link: {
    fontSize: 16,
    color: "blue",
  },
  navTitle: {
    fontSize: 32,
    fontWeight: "bold",
  },
})
