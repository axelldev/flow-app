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
  },
}
