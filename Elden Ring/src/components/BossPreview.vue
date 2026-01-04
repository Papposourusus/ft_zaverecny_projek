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
export default { name: "BossPreview" }
</script>
