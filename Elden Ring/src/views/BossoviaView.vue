<template>
  <Navbar />
  <BossoviaComponent />
</template>

<script>
import Navbar from '@/components/AppNavbar.vue'
import BossoviaComponent from '@/components/BossList.vue'

export default {
  name: "BossoviaView",
  components: {
    Navbar,
    BossoviaComponent
  }
}
</script>
