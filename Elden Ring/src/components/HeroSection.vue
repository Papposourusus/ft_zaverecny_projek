<template>
  <section
    class="hero"
    :style="{ backgroundImage: 'url(/img/ER.jpg)' }"
  >
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
