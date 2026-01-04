import { defineStore } from 'pinia'

export const useGalleryStore = defineStore('gallery', {
  state: () => ({
    selectedImage: null as string | null,
    isModalOpen: false as boolean
  }),

  actions: {
    openModal(image: string) {
      this.selectedImage = image
      this.isModalOpen = true
    },

    closeModal() {
      this.selectedImage = null
      this.isModalOpen = false
    }
  }
})
