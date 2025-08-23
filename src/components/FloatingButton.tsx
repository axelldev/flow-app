import Ionicons from "@expo/vector-icons/Ionicons"
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import { GestureResponderEvent, Pressable, View } from "react-native"

export type FloatingButtonProps = {
  backgroundColor: string
  foregroundColor: string
  icon: keyof typeof Ionicons.glyphMap
  onPress: (e: GestureResponderEvent) => void
}

const SIZE = 56
const PADDING = 8
const BORDER_RADIUS = SIZE + (PADDING * 2) / 3

export function FloatingButton({
  foregroundColor,
  backgroundColor,
  icon,
  onPress,
}: FloatingButtonProps) {
  const bottomTabBarHeight = useBottomTabBarHeight()

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
          <Ionicons name={icon} size={34} color={foregroundColor} />
        </View>
      )}
    </Pressable>
  )
}
