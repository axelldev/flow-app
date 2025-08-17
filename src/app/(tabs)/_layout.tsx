import { HapticTab } from "@/components/HapticTab"
import BlurTabBarBackground from "@/components/TabBarBackground"
import { useTheme } from "@/hooks/useTheme"
import Ionicons from "@expo/vector-icons/Ionicons"
import { Tabs } from "expo-router"
import { Platform } from "react-native"

export default function TabsLayout() {
  const theme = useTheme()
  const tabBarBackground = theme.background
  const background = theme.background
  const textColor = theme.text
  const primaryColor = theme.primary

  return (
    <Tabs
      screenOptions={{
        animation: "fade",
        headerShown: true,
        headerShadowVisible: false,
        headerTitleAlign: "center",
        tabBarActiveTintColor: primaryColor,
        tabBarStyle: Platform.select({
          ios: {
            borderTopColor: "transparent",
            position: "absolute",
          },
          default: {
            backgroundColor: tabBarBackground,
            borderTopColor: "transparent",
          },
        }),
        tabBarButton: (props) => <HapticTab {...props} />,
        tabBarBackground: BlurTabBarBackground,
        tabBarActiveBackgroundColor: "transparent",
        headerTitleStyle: { color: textColor },
        headerStyle: {
          backgroundColor: background,
          shadowColor: "transparent",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Flows",
          headerTitle: "Flows",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: 36,
            color: textColor,
          },
          tabBarIcon: (props) => <Ionicons name="home" {...props} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerTitle: "Settings",
          tabBarLabel: "Settings",
          tabBarIcon: (props) => <Ionicons name="settings-sharp" {...props} />,
        }}
      />
    </Tabs>
  )
}
