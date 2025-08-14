import { BaseTheme, Colors } from "@/constants/Colors"

import { useColorScheme } from "@/hooks/useColorScheme"

type ColorName = keyof BaseTheme

export function useThemeColor(
  props: {
    light?: string
    dark?: string
  },
  colorName: ColorName,
) {
  const theme = useColorScheme() ?? "light"
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  }

  return Colors[theme][colorName]
}
