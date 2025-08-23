import { db, schema } from "@/db"
import { FlowItem } from "@/db/schema"
import { eq } from "drizzle-orm"

export const createFlowItem = async (item: FlowItem) => {
  return await db.insert(schema.flowItems).values(item).returning()
}

export const updateFlowItem = async (item: FlowItem) => {
  if (item.id === undefined) {
    throw new Error("Item ID is required for update")
  }

  return await db
    .update(schema.flowItems)
    .set(item)
    .where(eq(schema.flowItems.id, item.id))
    .returning()
}

export const deleteFlowItem = async (id: number) => {
  return await db
    .delete(schema.flowItems)
    .where(eq(schema.flowItems.id, id))
    .returning()
}
