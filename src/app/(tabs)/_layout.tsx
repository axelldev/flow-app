import { useThemeColor } from "@/hooks/useThemeColor";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  const tabBarBackground = useThemeColor({}, "background");
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: tabBarBackground,
          borderTopColor: "transparent",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Flows",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerTitle: "Settings",
        }}
      />
    </Tabs>
  );
}
