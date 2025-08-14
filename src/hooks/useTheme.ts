import { Colors } from "@/constants/Colors"
import { useColorScheme } from "@/hooks/useColorScheme"

export function useTheme() {
  const colorScheme = useColorScheme() ?? "light"
  return Colors[colorScheme]
}
