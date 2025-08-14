import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Flow } from "@/db/schema"
import { useTheme } from "@/hooks/useTheme"
import Ionicons from "@expo/vector-icons/Ionicons"
import { Pressable, StyleSheet, View } from "react-native"

export function FlowListItem({ flow }: { flow: Flow }) {
  const theme = useTheme()
  const backgroundColor = theme.containerBackground
  const iconColor = theme.icon

  return (
    <Pressable>
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
          <View style={{ flex: 1, minWidth: 0, gap: 8 }}>
            <ThemedText
              style={[styles.title, { fontSize: 24 }]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {flow.title}
            </ThemedText>
            <ThemedText numberOfLines={2} ellipsizeMode="tail">
              {flow.description}
            </ThemedText>
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
