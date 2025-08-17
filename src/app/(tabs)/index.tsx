import { BottomSheet } from "@/components/BottomSheet"
import { FlowListItem } from "@/components/FlowListItem"
import { NewFlowButton } from "@/components/NewFlowButton"
import { NewFlowForm } from "@/components/NewFlowForm"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Flow } from "@/db/schema"
import { useColorScheme } from "@/hooks/useColorScheme"
import { useFlows } from "@/hooks/useFlows"
import { useTheme } from "@/hooks/useTheme"
import Ionicons from "@expo/vector-icons/Ionicons"
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import { FlashList } from "@shopify/flash-list"
import { useState } from "react"
import { ActionSheetIOS, Alert, Platform, Pressable, View } from "react-native"
import { KeyboardAvoidingView } from "react-native-keyboard-controller"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function FlowsScreen() {
  const theme = useTheme()
  const insets = useSafeAreaInsets()
  const tabBarHeight = useBottomTabBarHeight()
  const { flows, createFlow, deleteFlow } = useFlows()
  const [isFormVisible, setFormVisible] = useState(false)
  const colorScheme = useColorScheme() ?? "light"
  const closeModal = () => setFormVisible(false)
  const openModal = () => setFormVisible(true)

  const onSubmit = async (data: Flow) => {
    try {
      createFlow(data)
      closeModal()
    } catch (error) {
      console.error("Failed to create flow:", error)
      alert("An error occurred while creating the flow.")
    }
  }

  const confirmDelete = async (id: number) => {
    if (Platform.OS === "ios") {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ["Cancel", "Delete Flow"],
          destructiveButtonIndex: 1,
          cancelButtonIndex: 0,
          title: "Flow options",
          message: "This will permanently delete the flow and its items.",
          userInterfaceStyle: colorScheme === "dark" ? "dark" : "light",
        },
        async (buttonIndex) => {
          if (buttonIndex === 1) {
            try {
              await deleteFlow(id)
            } catch (e) {
              console.error(e)
              Alert.alert("Delete failed", "Could not delete this flow.")
            }
          }
        },
      )
    } else {
      Alert.alert(
        "Delete flow?",
        "This will permanently delete the flow and its items.",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Delete",
            style: "destructive",
            onPress: async () => {
              try {
                await deleteFlow(id)
              } catch (e) {
                console.error(e)
                Alert.alert("Delete failed", "Could not delete this flow.")
              }
            },
          },
        ],
      )
    }
  }

  return (
    <ThemedView safeArea edges={["bottom"]} style={{ flex: 1 }}>
      <FlashList
        data={flows}
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
        renderItem={({ item }) => (
          <FlowListItem
            flow={item}
            onLongPress={() => item?.id && confirmDelete(item.id)}
          />
        )}
        keyExtractor={(item) => item?.id.toString()}
        estimatedItemSize={100}
      />
      <NewFlowButton onPress={openModal} />
      <BottomSheet visible={isFormVisible} onDismiss={closeModal}>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={60}
          style={{ flex: 1 }}
        >
          <View
            style={{ flex: 1, padding: 16, paddingBottom: 16 + insets.bottom }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 16,
                justifyContent: "space-between",
              }}
            >
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
            <NewFlowForm onSubmit={onSubmit} />
          </View>
        </KeyboardAvoidingView>
      </BottomSheet>
    </ThemedView>
  )
}
