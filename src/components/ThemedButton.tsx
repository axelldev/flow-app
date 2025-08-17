import { useTheme } from "@/hooks/useTheme"
import { Pressable, PressableProps } from "react-native"

export function ThemedButton({ disabled, ...props }: PressableProps) {
  const theme = useTheme()

  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        {
          backgroundColor: theme.primary,
          borderRadius: 8,
          padding: 16,
          opacity: pressed || disabled ? 0.5 : 1,
        },
      ]}
      {...props}
    />
  )
}
