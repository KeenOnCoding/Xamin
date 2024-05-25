<template>
  <div>
    <Home />
    <div class="main-content">
      <Portfolio />
      <Started />
      <Bluebg />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../components/LandingPage22/Home.vue'
import Portfolio from '../../components/LandingPage22/Portfolio.vue'
import Started from '../../components/LandingPage22/Started.vue'
import Bluebg from '../../components/LandingPage22/Bluebg.vue'
import Footer from '../../components/LandingPage22/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage22',
  components: {
    Home,
    Portfolio,
    Started,
    Bluebg,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage22'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider22()
    }, 1000)
  }
}
</script>
