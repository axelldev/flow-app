import { useTheme } from "@/hooks/useTheme"
import Ionicons from "@expo/vector-icons/Ionicons"
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import { GestureResponderEvent, Pressable, View } from "react-native"

export type FloatingButtonProps = {
  onPress: (e: GestureResponderEvent) => void
}

const SIZE = 56
const PADDING = 8
const BORDER_RADIUS = SIZE + (PADDING * 2) / 3

export function FloatingButton({ onPress }: FloatingButtonProps) {
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
            width: SIZE,
            height: SIZE,
            padding: PADDING,
            opacity: pressed ? 0.5 : 1,
            borderRadius: BORDER_RADIUS,
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
