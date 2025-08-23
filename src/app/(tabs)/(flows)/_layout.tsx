import { Stack } from "expo-router"

export default function FlowsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="detail/[id]" />
    </Stack>
  )
}
