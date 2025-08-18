import { ColorPicker } from "@/components/ColorPicker"
import { IconPicker } from "@/components/IconPicker"
import { ThemedButton } from "@/components/ThemedButton"
import { ThemedText } from "@/components/ThemedText"
import { ThemedTextInput } from "@/components/ThemedTextInput"
import { flowItemColors } from "@/constants/Colors"
import { AvailableIcon } from "@/constants/Icons"
import { Flow } from "@/db/schema"
import { useEffect, useMemo, useState } from "react"
import { View } from "react-native"

const initialValues: Flow = {
  title: "",
  description: "",
  icon: "code-slash",
  color: flowItemColors[0],
}

export interface FlowFormProps {
  editinglow?: Flow
  onSubmit: (data: Flow) => void
}

export function FlowForm({ editinglow, onSubmit }: FlowFormProps) {
  const [form, setForm] = useState<Flow>(initialValues)

  useEffect(() => {
    if (editinglow) {
      setForm(editinglow)
    } else {
      setForm(initialValues)
    }
  }, [editinglow])

  const isValid = useMemo(() => {
    if (form.title.trim() === "") {
      return false
    }

    return true
  }, [form.title])

  const handleSubmit = () => {
    onSubmit(form)
    setForm(initialValues)
  }

  return (
    <View style={{ flex: 1, justifyContent: "space-between", gap: 8 }}>
      <View style={{ flex: 1, gap: 16 }}>
        <ThemedTextInput
          value={form.title}
          onChangeText={(text) => setForm({ ...form, title: text })}
          placeholder="Title"
        />
        <ThemedTextInput
          placeholder="Description"
          value={form.description || ""}
          onChangeText={(text) => setForm({ ...form, description: text })}
          numberOfLines={3}
          multiline
        />
        <ColorPicker
          selectedColor={form.color ?? flowItemColors[0]}
          onColorSelect={(color) => setForm({ ...form, color })}
        />
        <IconPicker
          color={form.color}
          selectedIcon={(form.icon as AvailableIcon) ?? "code-slash"}
          onIconSelect={(icon) => {
            setForm({ ...form, icon })
          }}
        />
      </View>
      <ThemedButton disabled={!isValid} onPress={handleSubmit}>
        <ThemedText
          style={{
            color: "#000",
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Save
        </ThemedText>
      </ThemedButton>
    </View>
  )
}
