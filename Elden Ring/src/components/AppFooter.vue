<template>
<footer class="footer">
    <div class="footer-columns">

        <div class="footer-col">
            <h3>O stránke</h3>
            <p>Fan stránka venovaná svetu Elden Ring. Bossovia, zbrane, lore a atmosféra Lands Between.</p>
        </div>

        <div class="footer-col">
            <h3>Navigácia</h3>
            <ul>
                <li><router-link to="/">Domov</router-link></li>
                <li><router-link to="/bossovia">Bossovia</router-link></li>
                <li><router-link to="/zbrane">Zbrane</router-link></li>
                <li><router-link to="/lore">Lore</router-link></li>
                <li><router-link to="/kontakt">Kontakt</router-link></li>
            </ul>
        </div>

        <div class="footer-col">
            <h3>Kontakt</h3>
            <p><a href="mailto:example@gmail.com">example@gmail.com</a></p>
            <p><a href="tel:+421900000000">+421 900 000 000</a></p>
            <p>Instagram: @tvojInstagram</p>
        </div>

    </div>

    <div class="footer-bottom">
        <p>&copy; 2025 Elden Ring Fan Page – Patrik</p>
    </div>
</footer>
</template>

<script>
export default { name: "AppFooter" }
</script>
