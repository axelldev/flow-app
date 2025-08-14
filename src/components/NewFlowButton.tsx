import { useTheme } from "@/hooks/useTheme"
import Ionicons from "@expo/vector-icons/Ionicons"
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import { GestureResponderEvent, Pressable, View } from "react-native"

export function NewFlowButton({
  onPress,
}: {
  onPress: (e: GestureResponderEvent) => void
}) {
  const bottomTabBarHeight = useBottomTabBarHeight()
  const backgroundColor = useTheme().primary

  return (
    <Pressable
      onPress={onPress}
      style={{
        position: "absolute",
        right: 16,
        bottom: 16 + bottomTabBarHeight,
        zIndex: 100,
        elevation: 10,
      }}
    >
      {({ pressed }) => (
        <View
          style={{
            width: 56,
            height: 56,
            padding: 8,
            opacity: pressed ? 0.5 : 1,
            borderRadius: "100%",
            backgroundColor: backgroundColor,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="add" size={34} color={"#393939"} />
        </View>
      )}
    </Pressable>
  )
}
