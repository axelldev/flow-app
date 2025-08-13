import { DatabaseProvider } from "@/components/providers/DatabaseProvider"
import { Slot } from "expo-router"
import { Suspense } from "react"
import { ActivityIndicator } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

export const DATABASE_NAME = "flow"

export default function RootLayout() {
  return (
    <Suspense fallback={<ActivityIndicator size="large" />}>
      <DatabaseProvider>
        <SafeAreaProvider>
          <Slot />
        </SafeAreaProvider>
      </DatabaseProvider>
    </Suspense>
  )
}
