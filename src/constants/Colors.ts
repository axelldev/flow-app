export const tintColorLight = "#393939"
export const tintColorDark = "#fff"
export const primaryColorLight = "#1FCB81"
export const primaryColorDark = "#6AEEBB"

export interface BaseTheme {
  text: string
  background: string
  primary: string
  containerBackground: string
  tint: string
  icon: string
  tabIconDefault: string
  tabIconSelected: string
  tabBarBorder: string
  input: {
    background: string
    border: string
    placeholder: string
    text: string
  }
}

export const Colors: {
  light: BaseTheme
  dark: BaseTheme
} = {
  light: {
    text: "#11181C",
    background: "#fff",
    primary: primaryColorLight,
    containerBackground: "#F6F6F6",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    tabBarBorder: "#DCDCDC",
    input: {
      background: "#F0F0F0",
      border: "#DCDCDC",
      text: "#11181C",
      placeholder: "#A1A1A1",
    },
  },
  dark: {
    text: "#ECEDEE",
    background: "#000000",
    primary: primaryColorDark,
    containerBackground: "#1C1C1E",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    tabBarBorder: "#626262",
    input: {
      background: "#484848",
      border: "#626262",
      text: "#ECEDEE",
      placeholder: "#A1A1A1",
    },
  },
}

export const flowItemColors = [
  "#EF4444",
  "#F97316",
  "#F59E0B",
  "#84CC16",
  "#22C55E",
  "#10B981",
  "#14B8A6",
  "#06B6D4",
  "#3B82F6",
  "#6366F1",
  "#8B5CF6",
  "#A855F7",
  "#EC4899",
  "#F43F5E",
] as const

export type FlowItemColor = (typeof flowItemColors)[number]
