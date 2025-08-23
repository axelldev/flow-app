import { CircularIcon } from "@/components/CircularIcon"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { IconName } from "@/constants/Icons"
import { db, schema } from "@/db"
import { useTheme } from "@/hooks/useTheme"
import { eq } from "drizzle-orm"
import { useLiveQuery } from "drizzle-orm/expo-sqlite"
import { useLocalSearchParams } from "expo-router"
import { StyleSheet, View } from "react-native"

export default function FlowDetailScreen() {
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

  return (
    <ThemedView safeArea style={styles.container}>
      <View style={styles.headerContainer}>
        <CircularIcon
          icon={(flow.icon as IconName) ?? "code-slash"}
          color={flow.color ?? theme.icon}
        />
        <View>
          <ThemedText type="title">{flow.title}</ThemedText>
          {Boolean(flow.description?.length) && (
            <ThemedText type="default">{flow.description}</ThemedText>
          )}
        </View>
      </View>
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
})
