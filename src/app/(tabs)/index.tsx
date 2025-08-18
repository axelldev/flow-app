import { BottomSheet } from "@/components/BottomSheet"
import { FlowEmptyList } from "@/components/FlowEmptyList"
import { FlowForm } from "@/components/FlowForm"
import { FlowListItem } from "@/components/FlowListItem"
import { NewFlowButton } from "@/components/NewFlowButton"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Flow } from "@/db/schema"
import { useFlows } from "@/hooks/useFlows"
import { useTheme } from "@/hooks/useTheme"
import Ionicons from "@expo/vector-icons/Ionicons"
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import { useHeaderHeight } from "@react-navigation/elements"
import { FlashList } from "@shopify/flash-list"
import { ComponentRef, useRef, useState } from "react"
import { Alert, Pressable, StyleSheet, View } from "react-native"
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable"
import { KeyboardAvoidingView } from "react-native-keyboard-controller"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function FlowsScreen() {
  const theme = useTheme()
  const insets = useSafeAreaInsets()
  const tabBarHeight = useBottomTabBarHeight()
  const headerHeight = useHeaderHeight()
  const { flows, createFlow, deleteFlow, updateFlow } = useFlows()
  const [editingFlow, setEditingFlow] = useState<Flow | undefined>(undefined)
  const [isFormVisible, setFormVisible] = useState(false)
  const openedRef = useRef<ComponentRef<typeof Swipeable> | null>(null)
  const closeModal = () => {
    setFormVisible(false)
  }
  const openModal = () => {
    openedRef.current?.close()
    setFormVisible(true)
  }

  const handleDelete = (id: number) => {
    Alert.alert(
      "Delete flow",
      "Are you sure you want to delete this item?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: () => deleteFlow(id) },
      ],
      { cancelable: true },
    )
  }

  const handleEdit = (flow: Flow) => {
    setEditingFlow(flow)
    openModal()
  }

  const onSubmit = async (data: Flow) => {
    try {
      if (editingFlow) {
        await updateFlow({ ...editingFlow, ...data })
        setEditingFlow(undefined)
      } else {
        await createFlow(data)
      }
      closeModal()
    } catch (error) {
      console.error("Failed to save flow:", error)
      alert("An error occurred while saving the flow.")
    }
  }

  return (
    <ThemedView safeArea edges={["bottom", "top"]} style={{ flex: 1 }}>
      {flows.length === 0 && <FlowEmptyList onPressCreate={openModal} />}
      {flows.length > 0 && (
        <FlashList
          data={flows}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: tabBarHeight,
            paddingTop: headerHeight + 16,
          }}
          renderItem={({ item }) => {
            let tempRef: ComponentRef<typeof Swipeable> | null = null
            return (
              <Swipeable
                ref={(ref) => {
                  tempRef = ref
                }}
                onSwipeableWillOpen={() => {
                  if (openedRef.current && openedRef.current !== tempRef) {
                    openedRef.current.close()
                  }
                  openedRef.current = tempRef
                }}
                renderRightActions={() => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingRight: 8,
                      gap: 8,
                    }}
                  >
                    <Pressable
                      style={({ pressed }) => ({
                        width: 56,
                        height: 56,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#FF4141",
                        borderRadius: 28,
                        opacity: pressed ? 0.5 : 1,
                      })}
                      onPress={() => handleDelete(item.id)}
                    >
                      <Ionicons name="trash-outline" size={28} color="white" />
                    </Pressable>

                    <Pressable
                      style={({ pressed }) => ({
                        width: 56,
                        height: 56,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#FF9D41",
                        borderRadius: 28,
                        opacity: pressed ? 0.5 : 1,
                      })}
                      onPress={() => handleEdit(item)}
                    >
                      <Ionicons name="pencil-outline" size={28} color="white" />
                    </Pressable>
                  </View>
                )}
              >
                <FlowListItem flow={item} onLongPress={console.log} />
              </Swipeable>
            )
          }}
          keyExtractor={(item) => item?.id.toString()}
          estimatedItemSize={100}
        />
      )}
      <NewFlowButton onPress={openModal} />
      <BottomSheet
        visible={isFormVisible}
        onDismiss={() => {
          setEditingFlow(undefined)
          closeModal()
        }}
      >
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={60}
          style={{ flex: 1 }}
        >
          <View
            style={[
              styles.bottomSheetContainer,
              { paddingBottom: insets.bottom + 16 },
            ]}
          >
            <View style={styles.formContainer}>
              <ThemedText type="title">Create Flow</ThemedText>
              <Pressable onPress={closeModal}>
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
            <FlowForm editinglow={editingFlow} onSubmit={onSubmit} />
          </View>
        </KeyboardAvoidingView>
      </BottomSheet>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  bottomSheetContainer: {
    flex: 1,
    padding: 16,
  },
  formContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    justifyContent: "space-between",
  },
})
