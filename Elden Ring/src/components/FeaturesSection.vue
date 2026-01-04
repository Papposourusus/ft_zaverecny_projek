<template>
  <section class="features">
    <h2>Čo ponúka Elden Ring</h2>

    <ul class="feature-list">
      <li>Obrovský otvorený svet plný tajomstiev</li>
      <li>Desiatky unikátnych bossov a mini-bossov</li>
      <li>Rozsiahly systém zbraní, mágie a buildov</li>
      <li>Temná atmosféra a epický príbeh od G. R. R. Martina</li>
      <li>Sloboda preskúmavania a vlastného štýlu boja</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "FeaturesSection"
}
</script>

<style>
.features {
  padding: 80px 5%;
  text-align: center;
}

.features h2 {
  color: var(--gold-light);
  margin-bottom: 25px;
  font-size: 2.2rem;
}

.feature-list {
  list-style: none;
  max-width: 700px;
  margin: 0 auto;
  padding: 0;
}

.feature-list li {
  margin: 12px 0;
  font-size: 1.2rem;
  color: var(--text-secondary);
  position: relative;
  padding-left: 25px;
}

.feature-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--gold);
  font-size: 1.4rem;
  line-height: 1;
}
</style>
