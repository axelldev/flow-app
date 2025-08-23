import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { useLocalSearchParams } from "expo-router"
import { StyleSheet } from "react-native"

export default function FlowDetailScreen() {
  const { id } = useLocalSearchParams<{
    id: string
  }>()

  return (
    <ThemedView style={styles.container}>
      <ThemedText>Flow {id}</ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
