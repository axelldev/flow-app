import { PriorityPicker } from "@/components/PriorityPicker"
import { ThemedButton } from "@/components/ThemedButton"
import { ThemedText } from "@/components/ThemedText"
import { ThemedTextInput } from "@/components/ThemedTextInput"
import { useTheme } from "@/hooks/useTheme"
import Ionicons from "@expo/vector-icons/Ionicons"
import { Pressable, StyleSheet, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export type FlowItemFormProps = {
  onClose?: () => void
}

export function FlowItemForm({ onClose }: FlowItemFormProps) {
  const theme = useTheme()
  const insets = useSafeAreaInsets()
  const isValid = true
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ThemedText type="title" style={styles.formTitle}>
          Add New Task
        </ThemedText>

        <Pressable onPress={onClose}>
          {({ pressed }) => (
            <Ionicons
              name="close-circle-outline"
              style={{ opacity: pressed ? 0.5 : 1 }}
              color={theme.text}
              size={24}
            />
          )}
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inputContainer}>
          <ThemedTextInput placeholder="Task name" />
          <ThemedTextInput
            multiline
            numberOfLines={3}
            placeholder="Task description"
          />
          <PriorityPicker onChange={console.log} />
        </View>
      </ScrollView>

      <View style={{ paddingHorizontal: 16, paddingBottom: insets.bottom }}>
        <ThemedButton disabled={!isValid} onPress={() => {}}>
          <ThemedText
            style={{
              color: "#000",
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Save
          </ThemedText>
        </ThemedButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    gap: 8,
    paddingHorizontal: 16,
  },
  formTitle: {
    textAlign: "center",
    paddingVertical: 16,
  },
  submitButton: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
})
