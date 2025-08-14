import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet"
import { useCallback, useRef } from "react"

export default function SettingsScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null)

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index)
  }, [])
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges}>
        <BottomSheetView>
          <ThemedText>Settings Bottom Sheet</ThemedText>
        </BottomSheetView>
      </BottomSheet>
      <ThemedText>Settings Screen</ThemedText>
    </ThemedView>
  )
}
