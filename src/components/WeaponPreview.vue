<template>
<section class="preview-zbrane fade-in section-bg-3">
    <h2>Zbrane</h2>

    <div class="weapon-grid">

        <div
            class="weapon-card"
            :style="{ backgroundImage: `url(${baseUrl}img/moonveil.jpg)` }"
        ></div>

        <div
            class="weapon-card"
            :style="{ backgroundImage: `url(${baseUrl}img/moonGS.jpg)` }"
        ></div>

        <div
            class="weapon-card"
            :style="{ backgroundImage: `url(${baseUrl}img/poleblade.jpg)` }"
        ></div>

    </div>

    <router-link to="/zbrane" class="btn">View weapons</router-link>
</section>
</template>

<script>
export default {
  name: "WeaponPreview",
  computed: {
    baseUrl() {
      return import.meta.env.BASE_URL
    }
  }
}
</script>
