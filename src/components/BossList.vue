<template>
  <div class="bossovia-page">

    <!-- SEKCIA 1 -->
    <section
      class="boss-section"
      :style="{ backgroundImage: `url(${baseUrl}img/boss1.jpg)` }"
    >
      <div class="boss-overlay"></div>
      <div class="boss-info">
        <h1>Godfrey, First Elden Lord</h1>
        <p>
          Prvý Elden Lord, legendárny bojovník, ktorého sila formovala dejiny The Lands Between.
          Symbol neporaziteľnej brutality a čistej bojovej vášne.
        </p>
      </div>
    </section>

    <!-- SEKCIA 2 -->
    <section
      class="boss-section"
      :style="{ backgroundImage: `url(${baseUrl}img/boss2.jpg)` }"
    >
      <div class="boss-overlay"></div>
      <div class="boss-info">
        <h1>Malenia, Blade of Miquella</h1>
        <p>
          Najsmrteľnejšia bojovníčka v Elden Ringu. Neporazená v boji, nositeľka Scarlet Rot
          a oddaná ochranca svojho brata Miquellu.
        </p>
      </div>
    </section>

    <!-- SEKCIA 3 -->
    <section
      class="boss-section"
      :style="{ backgroundImage: `url(${baseUrl}img/boss3.jpg)` }"
    >
      <div class="boss-overlay"></div>
      <div class="boss-info">
        <h1>Margit, The Fell Omen</h1>
        <p>
          Temný strážca vstupu do Stormveil Castle. Neúprosný, rýchly a nepredvídateľný —
          prvá veľká skúška pre každého Tarnished.
        </p>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "BossList",
  computed: {
    baseUrl() {
      return import.meta.env.BASE_URL
    }
  }
}
</script>

<style>
.boss-section {
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 80px;
  color: white;
}

.boss-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.1));
  z-index: 0;
}

.boss-info {
  position: relative;
  z-index: 1;
  max-width: 600px;
}

.boss-info h1 {
  font-size: 3.5rem;
  margin-bottom: 15px;
  color: #D4B06A;
  text-shadow: 0 0 20px rgba(255, 40, 40, 0.4);
}

.boss-info p {
  font-size: 1.2rem;
  color: #ddd;
}
</style>
