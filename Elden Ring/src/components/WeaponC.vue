<template>
  <div class="zbrane-page">

    <!-- HERO -->
    <section class="weapons-hero">
      <h1>Zbrane</h1>
      <p>Legendárne artefakty, ktoré formovali osud The Lands Between.</p>
      <h1>Najpopularnejšie zbrane medzi hráčmy</h1>
    </section>

    <!-- GRID ZBRANÍ -->
    <section class="weapons-grid">

      <!-- MOONVEIL -->
      <div class="weapon-card">
        <img src="/img/moonveil.jpg" alt="Moonveil">
        <h3>Moonveil</h3>
        <p>Kataná • Magic / Intelligence</p>

        <div class="weapon-info">
          <h4>Moonveil</h4>
          <p>Typ: Katana</p>
          <p>Damage: 73 Physical / 87 Magic</p>
          <p>Scaling: INT B, DEX C</p>
          <p>Skill: Transient Moonlight</p>
        </div>
      </div>

      <!-- RIVERS OF BLOOD -->
      <div class="weapon-card">
        <img src="/img/poleblade.jpg" alt="Rivers of Blood">
        <h3>Rivers of Blood</h3>
        <p>Kataná • Arcane / Bleed</p>

        <div class="weapon-info">
          <h4>Elenora Poleblade</h4>
          <p>Typ: Dvojsečná kopia</p>
          <p>Damage: 76 Physical / 65 Fire</p>
          <p>Scaling: ARC B, DEX C</p>
          <p>Skill: Corpse Piler</p>
        </div>
      </div>

      <!-- DARK MOON GREATSWORD -->
      <div class="weapon-card">
        <img src="/img/moonGS.jpg" alt="Dark Moon Greatsword">
        <h3>Dark Moon Greatsword</h3>
        <p>Greatsword • Frost / Magic</p>

        <div class="weapon-info">
          <h4>Dark Moon Greatsword</h4>
          <p>Typ: Greatsword</p>
          <p>Damage: 82 Physical / 98 Magic</p>
          <p>Scaling: INT A, STR D</p>
          <p>Skill: Moonlight Greatsword</p>
        </div>
      </div>

      <!-- BLASPHEMOUS BLADE -->
      <div class="weapon-card">
        <img src="" alt="Blasphemous Blade">
        <h3>Blasphemous Blade</h3>
        <p>Greatsword • Faith / Fire</p>

        <div class="weapon-info">
          <h4>Blasphemous Blade</h4>
          <p>Typ: Greatsword</p>
          <p>Damage: 88 Physical / 90 Fire</p>
          <p>Scaling: FAI B, STR D</p>
          <p>Skill: Taker’s Flames</p>
        </div>
      </div>

    </section>

    <!-- TOP 10 TABUĽKA -->
    <section class="top-weapons">
      <h2>TOP 10 Zbraní</h2>

      <table class="weapons-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Názov</th>
            <th>Typ</th>
            <th>Scaling</th>
            <th>Special Skill</th>
          </tr>
        </thead>

        <tbody>
          <tr><td>1</td><td>Rivers of Blood</td><td>Katana</td><td>ARC B / DEX C</td><td>Corpse Piler</td></tr>
          <tr><td>2</td><td>Malenia’s Hand</td><td>Katana</td><td>DEX B</td><td>Waterfowl Dance</td></tr>
          <tr><td>3</td><td>Moonveil</td><td>Katana</td><td>INT B / DEX C</td><td>Transient Moonlight</td></tr>
          <tr><td>4</td><td>Dark Moon Greatsword</td><td>Greatsword</td><td>INT A</td><td>Moonlight Greatsword</td></tr>
          <tr><td>5</td><td>Blasphemous Blade</td><td>Greatsword</td><td>FAI B</td><td>Taker’s Flames</td></tr>
          <tr><td>6</td><td>Bloodhound’s Fang</td><td>Curved Greatsword</td><td>DEX B</td><td>Bloodhound’s Finesse</td></tr>
          <tr><td>7</td><td>Grafted Blade Greatsword</td><td>Colossal Sword</td><td>STR B</td><td>Oath of Vengeance</td></tr>
          <tr><td>8</td><td>Reduvia</td><td>Dagger</td><td>ARC B</td><td>Reduvia Blood Blade</td></tr>
          <tr><td>9</td><td>Wing of Astel</td><td>Curved Sword</td><td>INT B</td><td>Nebula</td></tr>
          <tr><td>10</td><td>Golden Halberd</td><td>Halberd</td><td>STR C / FAI C</td><td>Golden Vow</td></tr>
        </tbody>
      </table>
    </section>

  </div>
</template>

<script>
export default {
  name: "ZbraneComponent"
}
</script>

<style scoped>
/* ===========================
   HERO
=========================== */
.weapons-hero {
    height: 45vh;
    background: url("/img/weapons-bg.jpg") center/cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
}

.weapons-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.55);
}

.weapons-hero h1,
.weapons-hero p {
    position: relative;
    z-index: 1;
}

.weapons-hero h1 {
    font-size: 3rem;
    color: #D4B06A;
    text-shadow: 0 0 15px rgba(0, 200, 255, 0.3);
}

.weapons-hero h1:last-of-type {
    margin-top: 30px;
}

.weapons-hero p {
    color: #ddd;
    font-size: 1.2rem;
}

/* ===========================
   WEAPON GRID
=========================== */
.weapons-grid {
    padding: 80px 10%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 35px;
}

.weapon-card {
    background: rgba(20, 24, 28, 0.6);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 12px;
    padding: 25px;
    text-align: center;
    transition: 0.3s ease;
    backdrop-filter: blur(4px);
    cursor: pointer;
    position: relative;
    overflow: visible;
}

.weapon-card:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 0 25px rgba(0, 200, 255, 0.25);
    border-color: rgba(0, 200, 255, 0.4);
}

.weapon-card img {
    width: 80%;
    margin-bottom: 15px;
    filter: drop-shadow(0 0 10px rgba(0,0,0,0.5));
}

.weapon-card h3 {
    color: #D4B06A;
    margin-bottom: 8px;
}

.weapon-card p {
    color: #bbb;
    font-size: 0.9rem;
}

/* ===========================
   HOVER INFO
=========================== */
.weapon-info {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translate(-50%, -110%);
    width: 230px;
    background: rgba(10, 12, 15, 0.9);
    border: 1px solid rgba(0, 200, 255, 0.3);
    border-radius: 10px;
    padding: 15px;
    text-align: left;
    opacity: 0;
    pointer-events: none;
    transition: 0.25s ease;
    box-shadow: 0 0 20px rgba(0, 200, 255, 0.25);
    backdrop-filter: blur(6px);
    z-index: 10;
}

.weapon-card:hover .weapon-info {
    opacity: 1;
    transform: translate(-50%, -120%);
}

.weapon-info h4 {
    color: #D4B06A;
    margin-bottom: 8px;
}

.weapon-info p {
    color: #ccc;
    font-size: 0.85rem;
    margin: 3px 0;
}

/* ===========================
   TOP 10 TABLE
=========================== */
.top-weapons {
    padding: 80px 10%;
    text-align: center;
}

.top-weapons h2 {
    font-size: 2.5rem;
    color: #D4B06A;
    margin-bottom: 40px;
    text-shadow: 0 0 15px rgba(212, 176, 106, 0.4);
}

.weapons-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(20, 24, 28, 0.6);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(212, 176, 106, 0.3);
    border-radius: 12px;
    overflow: hidden;
}

.weapons-table th {
    background: rgba(212, 176, 106, 0.15);
    color: #D4B06A;
    padding: 15px;
    font-size: 1.1rem;
}

.weapons-table td {
    padding: 12px;
    color: #ddd;
    border-bottom: 1px solid rgba(255,255,255,0.05);
}

.weapons-table tr:hover {
    background: rgba(212, 176, 106, 0.1);
    transition: 0.2s ease;
}

/* ===========================
   FOOTER
=========================== */
footer {
    text-align: center;
    padding: 20px;
    background: #151518;
    color: #B8B8B8;
}
</style>
