import { FlowListItem } from "@/components/FlowListItem"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { useFlows } from "@/hooks/useFlows"
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import { FlashList } from "@shopify/flash-list"
import { Pressable, View } from "react-native"

export default function FlowsScreen() {
  const { flows } = useFlows()

  const bottomTabBarHeight = useBottomTabBarHeight()

  return (
    <ThemedView safeArea style={{ flex: 1 }}>
      <Pressable
        onPress={() => {
          console.log("pressing")
        }}
        style={{
          position: "absolute",
          bottom: bottomTabBarHeight + 24,
          right: 16,
          zIndex: 100,
          elevation: 10,
        }}
      >
        {({ pressed }) => (
          <View
            style={{
              width: 56,
              height: 56,
              padding: 8,
              opacity: pressed ? 0.5 : 1,
              borderRadius: "100%",
              backgroundColor: "green",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ThemedText>+</ThemedText>
          </View>
        )}
      </Pressable>
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
    </ThemedView>
  )
}
