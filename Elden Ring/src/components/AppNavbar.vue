<template>
<header class="navbar">
    <div class="logo">Elden Ring</div>
    <nav>
        <ul>
            <li><router-link to="/">Domov</router-link></li>
            <li><router-link to="/bossovia">Bossovia</router-link></li>
            <li><router-link to="/zbrane">Zbrane</router-link></li>
            <li><a href="#galeria">Galéria</a></li>
            <li><router-link to="/lore">Lore</router-link></li>
            <li><router-link to="/kontakt">Kontakt</router-link></li>
        </ul>
    </nav>

    <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
    </div>
</header>
</template>

<script>
export default { name: "AppNavbar" }
</script>
