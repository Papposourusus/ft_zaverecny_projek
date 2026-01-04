<script>
import { useGalleryStore } from '@/stores/gallery'

export default {
  name: "GalleryModal",

  setup() {
    const store = useGalleryStore()

    return {
      store,
      close: store.closeModal
    }
  }
}
</script>

<template>
  <div v-if="store.isModalOpen" class="modal">
    <img :src="store.selectedImage">
    <button @click="close">Zavrieť</button>
  </div>
</template>
