<template>
<section class="about fade-in section-bg-1">
    <h2>O hre</h2>
    <p class="about-text">
        Elden Ring je akčné RPG odohrávajúce sa v temnom fantasy svete plnom tajomstiev, bossov a epických súbojov.
    </p>

    <div class="about-icons">
        <div class="icon-box">
            <div class="icon"></div>
            <h3>Exploration</h3>
            <p>Objavujte rozsiahly otvorený svet plný ruín, dungeonov a skrytých miest.</p>
        </div>

        <div class="icon-box">
            <div class="icon"></div>
            <h3>Combat</h3>
            <p>Zažite náročné súboje proti bossom a nepriateľom s rôznymi štýlmi boja.</p>
        </div>

        <div class="icon-box">
            <div class="icon"></div>
            <h3>Open World</h3>
            <p>Voľnosť pohybu, vlastná cesta a unikátne dobrodružstvá v The Lands Between.</p>
        </div>
    </div>

    <router-link to="/lore" class="btn">Learn more</router-link>
</section>
</template>

<script>
export default { name: "AboutSection" }
</script>
