import { sql } from "drizzle-orm"
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const flows = sqliteTable("flows", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description"),
  icon: text("icon"),
  color: text("color"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).default(
    sql`(unixepoch('now')*1000)`,
  ),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).default(
    sql`(unixepoch('now')*1000)`,
  ),
})

export const flowItems = sqliteTable("flow_items", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  flowId: integer("flow_id")
    .notNull()
    .references(() => flows.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  priority: integer("priority").notNull().default(0),
  isActive: integer("is_active", { mode: "boolean" }).notNull().default(false),
  isDone: integer("is_done", { mode: "boolean" }).notNull().default(false),
  // Timer State
  activeTimeMs: integer("active_time_ms").notNull().default(0),
  startedAt: integer("started_at", { mode: "timestamp_ms" }),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).default(
    sql`(unixepoch('now')*1000)`,
  ),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).default(
    sql`(unixepoch('now')*1000)`,
  ),
})

export type Flow = typeof flows.$inferInsert
export type FlowItem = typeof flowItems.$inferInsert
