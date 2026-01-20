<template>
  <Navbar />
  <ZbraneComponent />
</template>

<script>
import Navbar from '@/components/AppNavbar.vue'
import ZbraneComponent from '@/components/WeaponC.vue'

export default {
  name: "ZbraneView",
  components: { Navbar, ZbraneComponent }
}
</script>
