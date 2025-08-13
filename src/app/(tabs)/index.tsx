import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { useThemeColor } from "@/hooks/useThemeColor"
import { FlatList } from "react-native"

export default function FlowsScreen() {
  const dummyItems = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`)
  const backgroundColor = useThemeColor({}, "containerBackground")

  return (
    <ThemedView style={{ flex: 1 }}>
      <FlatList
        data={dummyItems}
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
              {item}
            </ThemedText>
            <ThemedText>
              This is a description for {item}. It can be longer to test text
              wrapping and layout.
            </ThemedText>
          </ThemedView>
        )}
        keyExtractor={(item) => item}
      />
    </ThemedView>
  )
}
