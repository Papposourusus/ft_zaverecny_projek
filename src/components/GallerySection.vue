<template>
<section class="galeria fade-in section-bg-4" id="galeria">
    <h2>Galéria</h2>
    <div class="gallery-grid">
        <div class="gallery-item" style="background-image: url(var(--base-url)img/foto1.jpeg)"></div>
        <div class="gallery-item" style="background-image: url(var(--base-url)img/foto2.jpg)"></div>
        <div class="gallery-item" style="background-image: url(var(--base-url)img/foto3.jpeg)"></div>
        <div class="gallery-item" style="background-image: url(var(--base-url)img/foto4.jpg)"></div>
    </div>
    <button class="btn" id="openGallery">Zobraziť viac</button>
</section>
</template>

<script>
export default { name: "GallerySection" }
</script>
