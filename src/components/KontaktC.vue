<template>
  <div class="kontakt-page">

    <!-- HERO -->
    <section class="contact-hero">
      <h1>Kontakt</h1>
      <p>Ak máš otázky, návrhy alebo chceš spolupracovať, ozvi sa.</p>
    </section>

    <!-- SCROLL + RANNI -->
    <section class="scroll-wrapper">

      <!-- SCROLL (FORM) -->
      <div class="scroll">
        <h2>Napíš mi</h2>

        <form class="contact-form">

          <label>Meno</label>
          <input type="text" placeholder="Tvoje meno" required>

          <label>Email</label>
          <input type="email" placeholder="tvoj@email.com" required>

          <label>Správa</label>
          <textarea placeholder="Sem napíš svoju správu..." required></textarea>

          <label class="checkbox-label">
            <input type="checkbox">
            Súhlasím so spracovaním osobných údajov
          </label>

          <button type="submit">Odoslať</button>
        </form>

        <div class="contact-info">
          <h3>Ďalšie kontakty</h3>
          <p><strong>Email:</strong> example@gmail.com</p>
          <p><strong>Discord:</strong> tvojDiscord#1234</p>
          <p><strong>Instagram:</strong> @tvojInstagram</p>
        </div>
      </div>

      <!-- RANNI -->
      <div class="ranni-wrapper">
        <img :src="baseUrl + 'img/raani.jpg'" alt="Ranni" class="ranni-img">
        <p class="ranni-quote">„I shall deliver your message…“</p>
      </div>

    </section>

    <!-- FAQ -->
    <section class="faq fade-in">
      <h2>FAQ – Často kladené otázky</h2>

      <div class="faq-item">
        <button class="faq-question">Je Elden Ring ťažká hra?</button>
        <div class="faq-answer">
          <p>Áno, ale ponúka veľa možností, ako si uľahčiť postup – buildy, zbrane, spirit ashes a otvorený svet.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question">Koľko bossov je v hre?</button>
        <div class="faq-answer">
          <p>V hre je viac ako 150 bossov, vrátane hlavných, vedľajších a skrytých.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question">Je Elden Ring open world?</button>
        <div class="faq-answer">
          <p>Áno, ide o plne otvorený svet s voľnosťou pohybu a prieskumu.</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "KontaktComponent",
  computed: {
    baseUrl() {
      return import.meta.env.BASE_URL
    }
  }
}
</script>

<style>
/* HERO */
.contact-hero {
    height: 40vh;
    background: url(var(--base-url)img/contact-bg.jpg) center/cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
}

.contact-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.55);
}

.contact-hero h1,
.contact-hero p {
    position: relative;
    z-index: 1;
}

.contact-hero h1 {
    font-size: 3rem;
    color: #D4B06A;
}

.contact-hero p {
    color: #ddd;
    font-size: 1.2rem;
}

/* SCROLL */
.scroll-wrapper {
    display: flex;
    justify-content: center;
    padding: 80px 0;
    background: url(var(--base-url)img/dark-texture.jpg) center/cover fixed;
}

.scroll {
    width: 70%;
    max-width: 900px;
    background: url(var(--base-url)img/pergament.jpg) center/cover;
    padding: 50px 60px;
    border-radius: 12px;
    box-shadow: 0 0 40px rgba(0,0,0,0.5);
    font-family: "Georgia", serif;
    color: #3a2f1b;
}

.scroll h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #5a4525;
}

/* FORM */
.contact-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
}

.contact-form label {
    margin: 10px 0 5px;
    font-weight: bold;
}

.contact-form input,
.contact-form textarea {
    padding: 12px;
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 6px;
    background: rgba(255,255,255,0.7);
    font-size: 1rem;
}

.contact-form textarea {
    height: 120px;
    resize: none;
}

.contact-form button {
    margin-top: 20px;
    padding: 12px;
    background: #D4B06A;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
}

.contact-form button:hover {
    background: #b8924e;
}

.checkbox-label {
    margin-top: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.95rem;
}

/* CONTACT INFO */
.contact-info {
    margin-top: 20px;
    text-align: center;
}

.contact-info h3 {
    margin-bottom: 10px;
    color: #5a4525;
}

.contact-info p {
    margin: 5px 0;
    font-size: 1.05rem;
}

/* RANNI */
.ranni-wrapper {
    width: 30%;
    text-align: center;
    margin-left: 40px;
}

.ranni-img {
    height: 450px;
    width: auto;
    filter: drop-shadow(0 0 25px rgba(100,150,255,0.5));
}

.ranni-quote {
    margin-top: 15px;
    font-style: italic;
    color: #aab8ff;
    font-size: 1rem;
}
</style>
