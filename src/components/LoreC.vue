<template>
  <div class="lore-page-wrapper">

    <!-- HERO -->
    <section class="lore-hero">
      <h1>Lore</h1>
      <p>Staré príbehy, ktoré pretrvali aj po páde Elden Ringu.</p>
    </section>

    <!-- BOOK -->
    <section class="lore-book-wrapper">
      <div class="lore-book">

        <!-- LEFT PAGE -->
        <div class="lore-page left-page">
          <h2>Chroniky The Lands Between</h2>

          <p class="lore-intro">
            Na týchto stránkach sú zaznamenané príbehy dávno stratených čias.
            Osudy bohov, polobohov a ľudí, ktorí žili v tieni Zlatého Stromu.
          </p>

          <div class="lore-ornament"></div>

          <p class="lore-small">
            „Nie všetky príbehy sú napísané zlatým písmom.
            Niektoré sú vyryté do kostí a zeme samotnej.“
          </p>

          <!-- OPRAVENÉ -->
          <img :src="baseUrl + 'img/logo.png'" alt="Lore ilustrácia" class="lore-image">
        </div>

        <!-- RIGHT PAGE -->
        <div class="lore-page right-page">

          <article class="lore-section">
            <h3>Vznik Elden Ringu</h3>
            <p>
              Elden Ring nebol vždy rozbitý. Kedysi predstavoval dokonalý poriadok sveta,
              ktorý držal pohromade Zlatý Strom a jeho vôľa. Jeho moc definovala život,
              smrť aj samotnú realitu.
            </p>
            <p>
              No moc, ktorá je dokonalá, je aj moc, ktorá láka. Prvé trhliny v poriadku
              vznikli nie z chaosu, ale z ambície. A tak sa začal príbeh pádu.
            </p>
          </article>

          <article class="lore-section">
            <h3>Marika a jej deti</h3>
            <p>
              Marika, večná kráľovná, bola zvolená Zlatým Stromom, aby vládla svetu.
              Jej deti – polobohovia – zdedili nielen jej moc, ale aj jej tragédiu.
            </p>
            <p>
              Ich konflikty, vojny a zrady roztrhali svet na kusy. Každé ich rozhodnutie
              sa vpísalo do samotnej podstaty The Lands Between.
            </p>
          </article>

          <article class="lore-section">
            <h3>Pád The Lands Between</h3>
            <p>
              Keď bol Elden Ring rozbitý, Zlatý Strom stratil svoju nekonečnú žiaru.
              Poradie sa zmenilo na chaos, kráľovstvá padali a polobohovia začali
              bojovať o zvyšky moci.
            </p>
            <p>
              V tomto tieni sa objavili Tarnished – vyhnanci povolaní späť, aby
              obnovili poriadok, alebo ho navždy prepisali.
            </p>
          </article>

        </div>

      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "LoreComponent",
  computed: {
    baseUrl() {
      return import.meta.env.BASE_URL
    }
  }
}
</script>

<style>
/* HERO */
.lore-hero {
    height: 40vh;
    background: url(var(--base-url)img/lore-bg.jpg) center/cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
}

.lore-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.55);
}

.lore-hero h1,
.lore-hero p {
    position: relative;
    z-index: 1;
}

.lore-hero h1 {
    font-size: 3rem;
    color: #D4B06A;
    text-shadow: 0 0 15px rgba(212,176,106,0.4);
}

.lore-hero p {
    color: #ddd;
    font-size: 1.2rem;
}

/* BOOK WRAPPER */
.lore-book-wrapper {
    display: flex;
    justify-content: center;
    padding: 80px 0;
    background: url(var(--base-url)img/dark-texture.jpg) center/cover fixed;
}

/* BOOK */
.lore-book {
    width: 80%;
    max-width: 1200px;
    display: flex;
    background: #d8c9a3;
    border-radius: 12px;
    box-shadow: 0 0 40px rgba(0,0,0,0.5);
    position: relative;
}

.lore-book::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    width: 4px;
    height: 100%;
    background: rgba(0,0,0,0.25);
    transform: translateX(-50%);
}

/* PAGES */
.lore-page {
    width: 50%;
    padding: 50px 40px;
    font-family: "Georgia", serif;
    color: #3a2f1b;
    background: url(var(--base-url)img/pergament.jpg) center/cover;
    position: relative;
}

.lore-page::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,0.15);
    mix-blend-mode: overlay;
    pointer-events: none;
}

/* LEFT PAGE */
.lore-ornament {
    width: 100%;
    height: 40px;
    background: url(var(--base-url)img/runes.png) center/contain no-repeat;
    margin: 25px 0;
    opacity: 0.6;
}

.lore-image {
    width: 80%;
    margin: 30px auto 0;
    display: block;
    opacity: 0.9;
    filter: drop-shadow(0 0 10px rgba(0,0,0,0.4));
    border-radius: 6px;
}
</style>
