<template>
  <div class="home">
    <AppNavbar />
    <HeroSection />
    <AboutSection />
    <FeaturesSection />
    <BossPreview />
    <WeaponPreview />
    <GallerySection />
    <GalleryModal />
    <ContactCTA />
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from '../components/AppNavbar.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import BossPreview from '../components/BossPreview.vue'
import WeaponPreview from '../components/WeaponPreview.vue'
import GallerySection from '../components/GallerySection.vue'
import GalleryModal from '../components/GalleryModal.vue'
import ContactCTA from '../components/ContactCTA.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: "HomeView",
  components: {
    AppNavbar,
    HeroSection,
    AboutSection,
    FeaturesSection,
    BossPreview,
    WeaponPreview,
    GallerySection,
    GalleryModal,
    ContactCTA,
    AppFooter
  }
}
</script>
