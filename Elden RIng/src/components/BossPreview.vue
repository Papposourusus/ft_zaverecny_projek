<template>
  <section class="preview-bossovia fade-in section-bg-2">
    <h2>Bossovia</h2>

    <div class="boss-grid">
      <div class="boss-card boss1" style="background-image: url('/img/boss1.jpg')"></div>
      <div class="boss-card boss2" style="background-image: url('/img/boss2.jpg')"></div>
      <div class="boss-card boss3" style="background-image: url('/img/boss3.jpg')"></div>
    </div>

    <router-link to="/bossovia" class="btn">View all bosses</router-link>
  </section>
</template>

<script>
export default {
  name: "BossPreview"
}
</script>

<style>
.preview-bossovia {
  text-align: center;
  padding: 80px 5%;
}

/* Nadpis */
.preview-bossovia h2 {
  color: var(--gold-light);
  margin-bottom: 30px;
  font-size: 2.2rem;
}

/* Grid */
.boss-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-bottom: 40px;
}

/* Karty */
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

/* Individuálne pozície */
.boss1 {
  background-position: 60% 80%;
}

.boss2 {
  background-position: 80% 10%;
}

.boss3 {
  background-position: center;
}

/* Responzivita */
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
