<template>
<section class="preview-zbrane fade-in section-bg-3">
    <h2>Zbrane</h2>
    <div class="weapon-grid">
        <div class="weapon-card" style="background-image: url('/img/moonveil.jpg')"></div>
        <div class="weapon-card" style="background-image: url('/img/moonGS.jpg')"></div>
        <div class="weapon-card" style="background-image: url('/img/poleblade.jpg')"></div>
    </div>
    <router-link to="/zbrane" class="btn">View weapons</router-link>
</section>
</template>

<script>
export default { name: "WeaponPreview" }
</script>
