import { defineStore } from 'pinia'

export const useGalleryStore = defineStore('gallery', {
  state: () => ({
    selectedImage: null,
    isModalOpen: false
  }),

  actions: {
    openModal(image) {
      this.selectedImage = image
      this.isModalOpen = true
    },

    closeModal() {
      this.selectedImage = null
      this.isModalOpen = false
    }
  }
})
