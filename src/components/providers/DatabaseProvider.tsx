import { db, expoDb } from "@/db"
import migrations from "@/drizzle/migrations"
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator"
import { useDrizzleStudio } from "expo-drizzle-studio-plugin"
import { createContext, use, type PropsWithChildren } from "react"

const DatabaseContext = createContext(db)

export const useDatabase = () => {
  const db = use(DatabaseContext)
  if (!db) {
    throw new Error("useDb must be used within a DbProvider")
  }
  return db
}

export function DatabaseProvider({ children }: PropsWithChildren) {
  const { error } = useMigrations(db, migrations)
  if (error) throw new Error(`Migration error: ${error.message}`)
  useDrizzleStudio(expoDb)

  return (
    <DatabaseContext.Provider value={db}>{children}</DatabaseContext.Provider>
  )
}
