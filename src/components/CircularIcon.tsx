import { colorWithOpacity } from "@/utils/colors"
import Ionicons from "@expo/vector-icons/Ionicons"
import { View } from "react-native"

export type CircularIconProps = {
  color: string
  icon: keyof typeof Ionicons.glyphMap
}

const ICON = 28
const PADDING = 8
const SIZE = ICON + PADDING * 2
const ROUNDED_SIZE = SIZE / 2

export function CircularIcon({ color, icon }: CircularIconProps) {
  return (
    <View
      style={{
        marginEnd: 16,
        backgroundColor: colorWithOpacity(color, 0.1),
        width: SIZE,
        height: SIZE,
        borderRadius: ROUNDED_SIZE,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Ionicons size={ICON} name={icon} color={color} />
    </View>
  )
}
