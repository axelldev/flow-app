import type Ionicons from "@expo/vector-icons/Ionicons"
import type { ComponentProps } from "react"

export type IconName = ComponentProps<typeof Ionicons>["name"]

export type AvailableIcon = (typeof AVAILABLE_ICONS)[number]

export const AVAILABLE_ICONS = [
  "code-slash",
  "terminal",
  "bug",
  "construct",
  "git-branch",
  "git-commit",
  "git-compare",
  "git-merge",
  "git-network",
  "hammer",
  "laptop",
  "cloud-upload",
  "cloud-download",
  "server",
  "cube",
  "key",
  "lock-closed",
  "lock-open",
  "analytics",
  "settings",
] as const satisfies readonly IconName[]
