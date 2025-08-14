import { FlowListItem } from "@/components/FlowListItem"
import { NewFlowButton } from "@/components/NewFlowButton"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { useFlows } from "@/hooks/useFlows"
import { FlashList } from "@shopify/flash-list"

export default function FlowsScreen() {
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
      <FlashList
        data={flows}
        renderItem={({ item }) => <FlowListItem flow={item} />}
        keyExtractor={(item) => item?.id.toString()}
        estimatedItemSize={100}
      />
      <NewFlowButton onPress={console.log} />
    </ThemedView>
  )
}
