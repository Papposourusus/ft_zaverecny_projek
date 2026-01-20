<template>
  <section class="preview-bossovia fade-in section-bg-2">
    <h2>Bossovia</h2>

    <div class="boss-grid">
      <div
        class="boss-card boss1"
        :style="{ backgroundImage: `url(${baseUrl}img/boss1.jpg)` }"
      ></div>

      <div
        class="boss-card boss2"
        :style="{ backgroundImage: `url(${baseUrl}img/boss2.jpg)` }"
      ></div>

      <div
        class="boss-card boss3"
        :style="{ backgroundImage: `url(${baseUrl}img/boss3.jpg)` }"
      ></div>
    </div>

    <router-link to="/bossovia" class="btn">View all bosses</router-link>
  </section>
</template>

<script>
export default {
  name: "BossPreview",
  computed: {
    baseUrl() {
      return import.meta.env.BASE_URL
    }
  }
}
</script>

<style>
.preview-bossovia {
  text-align: center;
  padding: 80px 5%;
}

.preview-bossovia h2 {
  color: var(--gold-light);
  margin-bottom: 30px;
  font-size: 2.2rem;
}

.boss-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-bottom: 40px;
}

.boss-card {
  height: 380px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px;
  border: 1px solid transparent;
  transition: 0.3s ease;
}

.boss-card:hover {
  border-color: var(--gold);
  transform: translateY(-5px);
}

.boss1 {
  background-position: 60% 80%;
}

.boss2 {
  background-position: 80% 10%;
}

.boss3 {
  background-position: center;
}

@media (max-width: 900px) {
  .boss-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .boss-grid {
    grid-template-columns: 1fr;
  }
}
</style>
