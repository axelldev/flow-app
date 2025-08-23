import { Stack } from "expo-router"

export default function FlowsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(flows)/index" />
      <Stack.Screen name="(flows)/detail/[id]" />
    </Stack>
  )
}
