<template>
  <div>
    <Home />
    <div class="main-content">
      <Awardscroll />
      <Stories />
      <About />
      <Services17 />
      <Awards />
      <Testimonials />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../components/LandingPage17/Home.vue'
import Awardscroll from '../../components/LandingPage17/Awardscroll.vue'
import Stories from '../../components/LandingPage17/Stories.vue'
import About from '../../components/LandingPage17/About.vue'
import Services17 from '../../components/LandingPage17/Services.vue'
import Awards from '../../components/LandingPage17/Awards.vue'
import Testimonials from '../../components/LandingPage17/Testimonials.vue'
import Footer from '../../components/LandingPage17/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage17',
  components: {
    Home,
    Awardscroll,
    Stories,
    About,
    Services17,
    Awards,
    Testimonials,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage17'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider17()
    }, 1000)
  }
}
</script>
