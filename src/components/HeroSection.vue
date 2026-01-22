<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1>Elden Ring – The Lands Between</h1>
      <p>Explore bosses, weapons and the world forged by FromSoftware</p>
      <router-link to="/bossovia" class="btn">Explore</router-link>
    </div>
  </section>
</template>

<script>
export default { name: "HeroSection" }
</script>

<style>
.hero {
  height: 100vh;
  width: 100%;
  background-image: url("${var(--base-url)}/img/ER.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #E6E6E6;
  max-width: 700px;
  padding: 0 20px;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 15px;
  color: #DCC18A;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 25px;
  color: #B8B8B8;
}
</style>
