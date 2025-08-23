import Ionicons from "@expo/vector-icons/Ionicons"
import { Pressable, StyleSheet } from "react-native"

type SwipeActionProps = {
  icon: keyof typeof Ionicons.glyphMap
  backgroundColor: string
  foregroundColor: string
  onPress: () => void
}

export function SwipeAction({
  onPress,
  icon,
  backgroundColor,
  foregroundColor,
}: SwipeActionProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          opacity: pressed ? 0.5 : 1,
          backgroundColor,
        },
      ]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={28} color={foregroundColor} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 28,
  },
})
