<template>
  <div>
    <Navbar />
    <LoreComponent />
  </div>
</template>

<script>
import Navbar from '@/components/AppNavbar.vue'
import LoreComponent from '@/components/LoreC.vue'

export default {
  name: "LoreView",
  components: { Navbar, LoreComponent }
}
</script>
