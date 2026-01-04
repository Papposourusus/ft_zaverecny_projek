<template>
  <div>
    <Navbar />
    <KontaktComponent />
  </div>
</template>

<script>
import Navbar from '@/components/AppNavbar.vue'
import KontaktComponent from '@/components/KontaktC.vue'

export default {
  name: "KontaktView",
  components: { Navbar, KontaktComponent }
}
</script>
