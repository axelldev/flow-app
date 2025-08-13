import * as schema from "@/db/schema"
import { drizzle } from "drizzle-orm/expo-sqlite"
import { openDatabaseSync } from "expo-sqlite"

export const DATABASE_NAME = "flows"

export const expoDb = openDatabaseSync(DATABASE_NAME, {
  enableChangeListener: true,
})

export const db = drizzle(expoDb, { schema })

export { schema }

export type DB = typeof db
