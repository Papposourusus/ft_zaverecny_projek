<template>
<section class="galeria fade-in section-bg-4" id="galeria">
    <h2>Galéria</h2>

    <div class="gallery-grid">

        <div
            class="gallery-item"
            :style="{ backgroundImage: `url(${baseUrl}img/foto1.jpeg)` }"
        ></div>

        <div
            class="gallery-item"
            :style="{ backgroundImage: `url(${baseUrl}img/foto2.jpg)` }"
        ></div>

        <div
            class="gallery-item"
            :style="{ backgroundImage: `url(${baseUrl}img/foto3.jpeg)` }"
        ></div>

        <div
            class="gallery-item"
            :style="{ backgroundImage: `url(${baseUrl}img/foto4.jpg)` }"
        ></div>

    </div>

    <button class="btn" id="openGallery">Zobraziť viac</button>
</section>
</template>

<script>
export default {
  name: "GallerySection",
  computed: {
    baseUrl() {
      return import.meta.env.BASE_URL
    }
  }
}
</script>
