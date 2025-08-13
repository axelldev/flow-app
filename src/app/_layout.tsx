import migrations from "@/drizzle/migrations"
import { drizzle } from "drizzle-orm/expo-sqlite"
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator"
import { useDrizzleStudio } from "expo-drizzle-studio-plugin"
import { Slot } from "expo-router"
import { openDatabaseSync, SQLiteProvider } from "expo-sqlite"
import { Suspense } from "react"
import { ActivityIndicator } from "react-native"

export const DATABASE_NAME = "flow"

export default function RootLayout() {
  const expoDb = openDatabaseSync(DATABASE_NAME)
  const db = drizzle(expoDb)
  useDrizzleStudio(expoDb)
  const { success, error } = useMigrations(db, migrations)

  if (error) {
    console.error("Migration error:", error)
  } else if (success) {
    console.log("Migrations completed successfully")
  }

  return (
    <Suspense fallback={<ActivityIndicator size="large" />}>
      <SQLiteProvider
        databaseName={DATABASE_NAME}
        options={{ enableChangeListener: true }}
      >
        <Slot />
      </SQLiteProvider>
    </Suspense>
  )
}
