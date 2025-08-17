import { flowItemColors } from "@/constants/Colors"
import { useTheme } from "@/hooks/useTheme"
import { Pressable, StyleSheet, View } from "react-native"

interface ColorPickerProps {
  selectedColor: string
  onColorSelect: (color: string) => void
}

export function ColorPicker({
  selectedColor,
  onColorSelect,
}: ColorPickerProps) {
  const theme = useTheme()

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.input.background,
        },
      ]}
    >
      {flowItemColors.map((color) => (
        <Pressable key={color} onPress={() => onColorSelect(color)}>
          {({ pressed }) => {
            const isSelected = selectedColor === color
            return (
              <View
                style={[
                  styles.outline,
                  {
                    backgroundColor: theme.input.background,
                    borderColor: color,
                  },
                ]}
              >
                <View
                  style={[
                    styles.colorButton,
                    {
                      backgroundColor: color,
                      borderWidth: 3,
                      borderColor: isSelected
                        ? theme.input.background
                        : "transparent",
                      opacity: pressed ? 0.5 : 1,
                    },
                  ]}
                />
              </View>
            )
          }}
        </Pressable>
      ))}
    </View>
  )
}

const GAP = 2
const STROKE_WIDTH = 2
const INNER_SIZE = 28
const OUTER_SIZE = INNER_SIZE + STROKE_WIDTH * GAP
const RADIUS = OUTER_SIZE / 2
const INNER_RADIUS = INNER_SIZE / 2

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    padding: 16,
    borderRadius: 8,
  },
  outline: {
    width: OUTER_SIZE,
    height: OUTER_SIZE,
    borderRadius: RADIUS,
    borderWidth: STROKE_WIDTH,
    padding: GAP,
    justifyContent: "center",
    alignItems: "center",
  },
  colorButton: {
    width: INNER_SIZE,
    height: INNER_SIZE,
    borderRadius: INNER_RADIUS,
  },
})
