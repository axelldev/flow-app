import { useDatabase } from "@/components/providers/DatabaseProvider"
import { schema } from "@/db"
import { Flow } from "@/db/schema"
import { eq } from "drizzle-orm"
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

  const deleteFlow = useCallback(
    async (id: number) => {
      return db.delete(schema.flows).where(eq(schema.flows.id, id))
    },
    [db],
  )

  const updateFlow = useCallback(
    async (flow: Flow) => {
      if (!flow.id) return
      return db
        .update(schema.flows)
        .set(flow)
        .where(eq(schema.flows.id, flow.id))
    },
    [db],
  )

  return {
    flows,
    error,
    createFlow,
    updateFlow,
    deleteFlow,
  }
}
