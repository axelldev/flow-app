import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, Text, TextProps } from "react-native";

export type ThemdTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "link";
};

export function ThemedText({
  lightColor,
  darkColor,
  type,
  style,
  ...otherProps
}: ThemdTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[{ color }, type ? styles[type] : {}, style]}
      {...otherProps}
    />
  );
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
});
