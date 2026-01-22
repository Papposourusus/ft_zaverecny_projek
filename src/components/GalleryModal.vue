<script setup>
import { useGalleryStore } from '@/stores/gallery'

const store = useGalleryStore()

function close() {
  store.closeModal()
}
</script>

<template>
  <div v-if="store.isModalOpen" class="modal">
    <img :src="store.selectedImage" alt="">
    <button @click="close">Zavrieť</button>
  </div>
</template>
