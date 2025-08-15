import { ThemedButton } from "@/components/ThemedButton"
import { ThemedText } from "@/components/ThemedText"
import { ThemedTextInput } from "@/components/ThemedTextInput"
import { Flow } from "@/db/schema"
import { useState } from "react"
import { View } from "react-native"

const initialValues: Flow = {
  title: "",
  description: "",
}

export function NewFlowForm({ onSubmit }: { onSubmit: (data: Flow) => void }) {
  const [form, setForm] = useState<Flow>(initialValues)

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
          size="lg"
          style={{
            backgroundColor: "transparent",
          }}
        />
        <ThemedTextInput
          placeholder="Description"
          value={form.description || ""}
          onChangeText={(text) => setForm({ ...form, description: text })}
          size="lg"
          numberOfLines={3}
          multiline
          style={{
            backgroundColor: "transparent",
          }}
        />
        {/* <ThemedText>Color</ThemedText>
            <ThemedText>Icon</ThemedText> */}
      </View>
      <ThemedButton onPress={handleSubmit}>
        <ThemedText
          style={{
            color: "#000",
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Create
        </ThemedText>
      </ThemedButton>
    </View>
  )
}
