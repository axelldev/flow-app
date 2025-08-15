import { ThemedView } from "@/components/ThemedView"
import { useTheme } from "@/hooks/useTheme"
import { Modal, ModalProps, StyleSheet } from "react-native"

export function BottomSheet({
  children,
  transparent = true,
  ...props
}: ModalProps) {
  const theme = useTheme()
  return (
    <Modal transparent={transparent} animationType="slide" {...props}>
      <ThemedView
        style={[
          styles.modalContent,
          {
            backgroundColor: theme.containerBackground,
          },
        ]}
      >
        {children}
      </ThemedView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    height: "90%",
    width: "100%",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
})
