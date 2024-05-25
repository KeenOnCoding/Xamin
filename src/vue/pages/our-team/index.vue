<template>
  <div class="main-content">
    <BreadCrum />
    <Team />
    <Footer />
  </div>
</template>

<script>
import BreadCrum from '../../components/OurTeam/BreadCrum.vue'
import Team from '../../components/OurTeam/Team.vue'
import Footer from '../../components/OurTeam/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Pages',
  components: {
    BreadCrum,
    Team,
    Footer
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
