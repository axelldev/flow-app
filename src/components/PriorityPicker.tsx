import { useTheme } from "@/hooks/useTheme"
import { colorWithOpacity } from "@/utils/colors"
import Ionicons from "@expo/vector-icons/Ionicons"
import { StyleSheet, View } from "react-native"
import { Dropdown } from "react-native-element-dropdown"

const Priorities = {
  low: { label: "Low", id: 1, color: "green" },
  medium: { label: "Medium", id: 2, color: "yellow" },
  high: { label: "High", id: 3, color: "red" },
}

export type PriorityPickerProps = {
  onChange: (value: string) => void
}

export function PriorityPicker({ onChange }: PriorityPickerProps) {
  const theme = useTheme()
  return (
    <View>
      <Dropdown
        onChange={onChange}
        data={Object.values(Priorities)}
        labelField="label"
        valueField="id"
        placeholder="Select priority"
        containerStyle={{
          borderRadius: 8,
          backgroundColor: theme.input.background,
          borderColor: theme.input.border,
          overflow: "hidden",
        }}
        style={[
          styles.dropdown,
          {
            backgroundColor: theme.input.background,
          },
        ]}
        selectedTextStyle={{
          color: theme.input.text,
          marginLeft: 8,
        }}
        activeColor={colorWithOpacity(theme.primary, 0.2)}
        placeholderStyle={{
          color: theme.input.placeholder,
          marginLeft: 8,
        }}
        renderLeftIcon={() => <Ionicons name="flag" size={20} color="gray" />}
        iconStyle={styles.icon}
        itemTextStyle={{
          color: theme.input.text,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  dropdown: {
    borderRadius: 4,
    padding: 12,
  },
  icon: {
    marginRight: 8,
  },
})
