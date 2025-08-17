import { ThemedText } from "@/components/ThemedText"
import { AVAILABLE_ICONS, AvailableIcon } from "@/constants/Icons"
import { useTheme } from "@/hooks/useTheme"
import { colorWithOpacity } from "@/utils/colors"
import Ionicons from "@expo/vector-icons/Ionicons"
import { useEffect, useMemo, useState } from "react"
import {
  Keyboard,
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native"
import Animated, { useSharedValue, withTiming } from "react-native-reanimated"

interface IconPickerProps {
  color?: string | null
  selectedIcon?: AvailableIcon
  onIconSelect: (icon: AvailableIcon) => void
}

export function IconPicker({
  selectedIcon,
  onIconSelect,
  color,
}: IconPickerProps) {
  const [showIcons, setShowIcons] = useState(false)
  const theme = useTheme()
  const backgroundColor = theme.input.background
  const { width } = useWindowDimensions()
  const gridHeight = useSharedValue(0)
  const gridOpacity = useSharedValue(0)
  const [contentHeight, setContentHeight] = useState(0)
  const itemSize = 64
  const numColumns = Math.min(5, Math.max(1, Math.floor(width / itemSize)))

  useEffect(() => {
    const options = { duration: 200 }
    if (showIcons) {
      gridHeight.value = withTiming(contentHeight, options)
      gridOpacity.value = withTiming(1, options)
    } else {
      gridHeight.value = withTiming(0, options)
      gridOpacity.value = withTiming(0, options)
    }
  }, [contentHeight, gridHeight, gridOpacity, showIcons])

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardWillShow",
      () => {
        setShowIcons(false)
      },
    )

    return () => {
      keyboardDidShowListener.remove()
    }
  }, [])

  const rows = useMemo(() => {
    const result: AvailableIcon[][] = []
    for (let i = 0; i < AVAILABLE_ICONS.length; i += numColumns) {
      result.push(AVAILABLE_ICONS.slice(i, i + numColumns) as AvailableIcon[])
    }
    return result
  }, [numColumns])

  const handleSelectIcon = (icon: AvailableIcon) => {
    onIconSelect(icon)
    setShowIcons(false)
  }

  const onContentLayout = (event: LayoutChangeEvent) => {
    const height = event.nativeEvent.layout.height
    if (height !== contentHeight) {
      setContentHeight(height)
    }
  }

  const toggleIconsContainer = () => {
    Keyboard.dismiss()
    setShowIcons((prev) => !prev)
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleIconsContainer}>
        {({ pressed }) => (
          <View
            style={[
              styles.pressableContainer,
              {
                backgroundColor: backgroundColor,
                opacity: pressed ? 0.5 : 1,
              },
            ]}
          >
            <Ionicons
              name={selectedIcon ?? "add-circle"}
              color={color ?? theme.text}
              size={24}
            />
            <ThemedText style={[styles.titleFlex]} type="default">
              Icon
            </ThemedText>
            <Ionicons name="chevron-forward" color={theme.text} size={24} />
          </View>
        )}
      </Pressable>
      <Animated.View
        style={[
          styles.animatedContainer,
          { height: gridHeight, opacity: gridOpacity },
        ]}
      >
        <View style={styles.gridContainer} onLayout={onContentLayout}>
          {rows.map((row, rowIndex) => (
            <View key={`row-${rowIndex}`} style={styles.row}>
              {row.map((item) => (
                <Pressable key={item} onPress={() => handleSelectIcon(item)}>
                  {({ pressed }) => (
                    <View
                      style={[
                        styles.iconItem,
                        {
                          opacity: pressed ? 0.5 : 1,
                          backgroundColor:
                            selectedIcon === item
                              ? colorWithOpacity(color ?? theme.primary, 0.2)
                              : "transparent",
                        },
                      ]}
                    >
                      <Ionicons
                        name={item}
                        color={
                          selectedIcon === item
                            ? (color ?? theme.primary)
                            : theme.text
                        }
                        size={28}
                      />
                    </View>
                  )}
                </Pressable>
              ))}
            </View>
          ))}
        </View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pressableContainer: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
  },
  titleFlex: {
    flex: 1,
    fontSize: 18,
  },
  animatedContainer: {
    overflow: "hidden",
  },
  gridContainer: {
    padding: 8,
    gap: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    borderRadius: 24,
  },
})
