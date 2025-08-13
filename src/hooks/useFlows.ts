import { useDatabase } from "@/components/providers/DatabaseProvider"
import { schema } from "@/db"
import { Flow } from "@/db/schema"
import { useLiveQuery } from "drizzle-orm/expo-sqlite"
import { useCallback } from "react"

export function useFlows() {
  const db = useDatabase()
  const { data: flows, error } = useLiveQuery(
    db.select().from(schema.flows).orderBy(schema.flows.createdAt),
  )

  const createFlow = useCallback(
    async (values: Flow) => {
      return db.insert(schema.flows).values(values).returning()
    },
    [db],
  )

  return {
    flows,
    error,
    createFlow,
  }
}
