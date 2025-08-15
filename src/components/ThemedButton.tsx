import { useTheme } from "@/hooks/useTheme"
import { Pressable, PressableProps } from "react-native"

export function ThemedButton({ ...props }: PressableProps) {
  const theme = useTheme()

  return (
    <Pressable
      style={[
        {
          backgroundColor: theme.primary,
          borderRadius: 8,
          padding: 16,
        },
      ]}
      {...props}
    />
  )
}
