import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Flow } from "@/db/schema"
import { useThemeColor } from "@/hooks/useThemeColor"
import Ionicons from "@expo/vector-icons/Ionicons"
import { Pressable, StyleSheet, View } from "react-native"

export function FlowListItem({ flow }: { flow: Flow }) {
  const backgroundColor = useThemeColor({}, "containerBackground")
  const iconColor = useThemeColor({}, "icon")

  return (
    <Pressable>
      {({ pressed }) => (
        <ThemedView
          style={[
            styles.container,
            { flexDirection: "row", alignItems: "center", backgroundColor },
            { opacity: pressed ? 0.5 : 1 },
          ]}
        >
          <View>
            <ThemedText style={styles.title}>{flow.title}</ThemedText>
            <ThemedText>{flow.description}</ThemedText>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
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
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
})
