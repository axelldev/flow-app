import { useThemeColor } from "@/hooks/useThemeColor";
import { Stack } from "expo-router";

export default function RootLayout() {
  const headerBackgroundColor = useThemeColor({}, "background");
  const headerTintColor = useThemeColor({}, "text");

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: headerBackgroundColor,
        },
        headerTintColor: headerTintColor,
      }}
    />
  );
}
