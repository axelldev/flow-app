import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { AvailableIcon } from "@/constants/Icons"
import { Flow } from "@/db/schema"
import { useTheme } from "@/hooks/useTheme"
import { colorWithOpacity } from "@/utils/colors"
import Ionicons from "@expo/vector-icons/Ionicons"
import { Pressable, StyleSheet, View } from "react-native"

type Props = {
  flow: Flow
  onPress?: () => void
  onLongPress?: () => void
}

const ICON = 28
const PADDING = 8
const SIZE = ICON + PADDING * 2
const ROUNDED_SIZE = SIZE / 2

export function FlowListItem({ flow, onPress, onLongPress }: Props) {
  const theme = useTheme()
  const backgroundColor = theme.containerBackground
  const iconColor = theme.icon

  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} delayLongPress={350}>
      {({ pressed }) => (
        <ThemedView
          style={[
            styles.container,
            {
              backgroundColor,
              opacity: pressed ? 0.5 : 1,
            },
          ]}
        >
          <View
            style={{
              marginEnd: 16,
              backgroundColor: colorWithOpacity(flow.color ?? iconColor, 0.1),
              width: SIZE,
              height: SIZE,
              borderRadius: ROUNDED_SIZE,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons
              size={ICON}
              name={(flow.icon as AvailableIcon) ?? "code-slash"}
              color={flow.color ?? iconColor}
            />
          </View>
          <View style={{ flex: 1, minWidth: 0, gap: 8 }}>
            <ThemedText
              style={[styles.title, { fontSize: 24 }]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {flow.title}
            </ThemedText>
            {(flow.description?.length || 0) > 1 && (
              <ThemedText numberOfLines={2} ellipsizeMode="tail">
                {flow.description}
              </ThemedText>
            )}
          </View>
          <View>
            <Ionicons
              name="chevron-forward-circle-outline"
              size={28}
              color={iconColor}
            />
          </View>
        </ThemedView>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    margin: 8,
    borderRadius: 16,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
})
