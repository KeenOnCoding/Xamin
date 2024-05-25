<template>
  <div>
    <Home />
    <div class="main-content">
      <About />
      <Specializing1 />
      <Specializing2 />
      <Education />
      <Process />
      <Skills />
      <CaseStudies />
      <Testimonials />
    </div>
    <Footer footer-class="footer-one iq-bg-dark iq-over-dark-90" />
  </div>
</template>

<script>
import Home from '../../components/LandingPage9/Home.vue'
import About from '../../components/LandingPage9/About.vue'
import Specializing1 from '../../components/LandingPage9/Specializing1.vue'
import Specializing2 from '../../components/LandingPage9/Specializing2.vue'
import Education from '../../components/LandingPage9/Education.vue'
import Process from '../../components/LandingPage9/Process.vue'
import Skills from '../../components/LandingPage9/Skills.vue'
import CaseStudies from '../../components/LandingPage9/CaseStudies.vue'
import Testimonials from '../../components/LandingPage9/Testimonials.vue'

import Footer from '../../components/FooterStyle2/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage9',
  components: {
    Home,
    About,
    Specializing1,
    Specializing2,
    Education,
    Process,
    Skills,
    CaseStudies,
    Testimonials,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage9'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider9()
    }, 1000)
  }
}
</script>
