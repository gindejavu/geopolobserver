// src/stores/navigation.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavigationStore = defineStore('navigation', () => {
  const pageItemWidth = ref(0)
  const distanceToLeft = ref(0)

  const updateNavigationState = (width: number, left: number) => {
    pageItemWidth.value = width
    distanceToLeft.value = left
  }

  return {
    pageItemWidth,
    distanceToLeft,
    updateNavigationState,
  }
})
