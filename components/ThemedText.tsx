import { useThemeColor } from "@/hooks/useThemeColor";
import { Text, TextProps } from "react-native";

export type ThemdTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "link";
};

export function ThemedText({
  lightColor,
  darkColor,
  style,
  ...otherProps
}: ThemdTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <Text style={[{ color }, style]} {...otherProps} />;
}
