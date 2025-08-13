import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { useFlows } from "@/hooks/useFlows"
import { useThemeColor } from "@/hooks/useThemeColor"
import { FlatList } from "react-native"

export default function FlowsScreen() {
  const backgroundColor = useThemeColor({}, "containerBackground")
  const { flows } = useFlows()

  return (
    <ThemedView safeArea style={{ flex: 1 }}>
      <ThemedText
        type="navTitle"
        style={{
          paddingHorizontal: 8,
          paddingVertical: 16,
        }}
      >
        Flows
      </ThemedText>
      <FlatList
        data={flows}
        renderItem={({ item }) => (
          <ThemedView
            style={{
              padding: 12,
              backgroundColor,
              margin: 8,
              borderRadius: 16,
            }}
          >
            <ThemedText
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {item?.title}
            </ThemedText>
            <ThemedText>{item?.description}</ThemedText>
          </ThemedView>
        )}
        keyExtractor={(item) => item?.id.toString()}
      />
    </ThemedView>
  )
}
