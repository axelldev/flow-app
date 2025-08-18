import { ThemedText } from "@/components/ThemedText"
import { useTheme } from "@/hooks/useTheme"
import Ionicons from "@expo/vector-icons/Ionicons"
import { Pressable, View } from "react-native"

interface FlowEmptyListProps {
  onPressCreate?: () => void
}

export function FlowEmptyList({ onPressCreate }: FlowEmptyListProps) {
  const theme = useTheme()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
      }}
    >
      <ThemedText>You don&apos;t have any flows</ThemedText>
      <Pressable
        onPress={onPressCreate}
        style={({ pressed }) => ({
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <ThemedText
          style={{
            color: theme.primary,
            fontWeight: "bold",
          }}
        >
          Create a Flow
        </ThemedText>
        <Ionicons name="add-circle-outline" size={24} color={theme.primary} />
      </Pressable>
    </View>
  )
}
