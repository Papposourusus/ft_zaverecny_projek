<template>
<section class="galeria fade-in section-bg-4" id="galeria">
    <h2>Galéria</h2>

    <div class="gallery-grid">

        <div
            class="gallery-item"
            :style="{ backgroundImage: `url(${baseUrl}img/foto1.jpeg)` }"
            @click="gallery.openModal(`${baseUrl}img/foto1.jpeg`)"
        ></div>

        <div
            class="gallery-item"
            :style="{ backgroundImage: `url(${baseUrl}img/foto2.jpg)` }"
            @click="gallery.openModal(`${baseUrl}img/foto2.jpg`)"
        ></div>

        <div
            class="gallery-item"
            :style="{ backgroundImage: `url(${baseUrl}img/foto3.jpeg)` }"
            @click="gallery.openModal(`${baseUrl}img/foto3.jpeg`)"
        ></div>

        <div
            class="gallery-item"
            :style="{ backgroundImage: `url(${baseUrl}img/foto4.jpg)` }"
            @click="gallery.openModal(`${baseUrl}img/foto4.jpg`)"
        ></div>

    </div>

    <button class="btn" @click="gallery.openModal(`${baseUrl}img/foto1.jpeg`)">
      Zobraziť viac
    </button>
</section>
</template>

<script setup>
import { useGalleryStore } from '@/stores/gallery'

const gallery = useGalleryStore()
const baseUrl = import.meta.env.BASE_URL
</script>
