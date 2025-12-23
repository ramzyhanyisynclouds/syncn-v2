// composables/useAppearance.ts
import { computed } from 'vue'
import { useColorMode } from '#imports'

export type Appearance = 'light' | 'dark' | 'system'

export function useAppearance() {
  const colorMode = useColorMode()

  // appearance اللي بتستخدمه في الـ components
  const appearance = computed<Appearance>({
    get() {
      return colorMode.preference as Appearance
    },
    set(value) {
      colorMode.preference = value
    },
  })

  function updateAppearance(value: Appearance) {
    colorMode.preference = value
  }

  return {
    appearance,
    updateAppearance,
  }
}
