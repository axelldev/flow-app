import { BottomSheet } from "@/components/BottomSheet"
import { CircularIcon } from "@/components/CircularIcon"
import { FloatingButton } from "@/components/FloatingButton"
import { FlowItemForm } from "@/components/FlowItemForm"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { IconName } from "@/constants/Icons"
import { db, schema } from "@/db"
import { useTheme } from "@/hooks/useTheme"
import { eq } from "drizzle-orm"
import { useLiveQuery } from "drizzle-orm/expo-sqlite"
import { useLocalSearchParams } from "expo-router"
import { useState } from "react"
import { StyleSheet, View } from "react-native"
import { KeyboardAvoidingView } from "react-native-keyboard-controller"

export default function FlowDetailScreen() {
  const [isFormVisible, setFormVisible] = useState(false)
  const theme = useTheme()
  const { id } = useLocalSearchParams<{
    id: string
  }>()

  const flowId = Number(id)
  const { data: flow } = useLiveQuery(
    db.query.flows.findFirst({
      where: eq(schema.flows.id, flowId),
    }),
  )

  if (!flow) {
    return (
      <ThemedView>
        <ThemedText type="title">Flow not found</ThemedText>
      </ThemedView>
    )
  }

  const openForm = () => {
    setFormVisible(true)
  }

  const closeForm = () => setFormVisible(false)

  return (
    <ThemedView safeArea style={styles.container}>
      <View style={styles.headerContainer}>
        <CircularIcon
          icon={(flow.icon as IconName) ?? "code-slash"}
          color={flow.color ?? theme.icon}
        />
        <View style={styles.textContainer}>
          <ThemedText
            type="title"
            style={styles.flowTitle}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {flow.title}
          </ThemedText>
          {(flow.description?.length || 0) > 1 && (
            <ThemedText type="default" numberOfLines={3} ellipsizeMode="tail">
              {flow.description}
            </ThemedText>
          )}
        </View>
      </View>
      <FloatingButton
        icon="add"
        backgroundColor={flow.color ?? theme.text}
        foregroundColor={theme.background}
        onPress={openForm}
      />
      <BottomSheet visible={isFormVisible}>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={70}
          style={{ flex: 1 }}
        >
          <FlowItemForm onClose={closeForm} />
        </KeyboardAvoidingView>
      </BottomSheet>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  flowTitle: {},
  textContainer: {
    flex: 1,
  },
})
