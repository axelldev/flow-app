import { IconPicker } from "@/components/IconPicker"
import { ThemedButton } from "@/components/ThemedButton"
import { ThemedText } from "@/components/ThemedText"
import { ThemedTextInput } from "@/components/ThemedTextInput"
import { AvailableIcon } from "@/constants/Icons"
import { Flow } from "@/db/schema"
import { useMemo, useState } from "react"
import { View } from "react-native"

const initialValues: Flow = {
  title: "",
  description: "",
  icon: "code-slash",
}

export function NewFlowForm({ onSubmit }: { onSubmit: (data: Flow) => void }) {
  const [form, setForm] = useState<Flow>(initialValues)

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
        <IconPicker
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
            opacity: isValid ? 1 : 0.5,
          }}
        >
          Save
        </ThemedText>
      </ThemedButton>
    </View>
  )
}
