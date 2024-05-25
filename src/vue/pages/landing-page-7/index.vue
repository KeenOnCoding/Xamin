<template>
  <div>
    <Home />
    <div class="main-content">
      <AboutUs />
      <Analysis />
      <HowItWorks />
      <Benefits />
      <Priceing />
      <Accordion />
      <Testimonials />
      <Blog />
      <ContactUs />
    </div>
    <Footer footer-class="footer-one iq-bg-dark iq-over-dark-90" />
  </div>
</template>
<script>
import Home from '../../components/LandingPage7/Home.vue'
import AboutUs from '../../components/LandingPage7/AboutUs.vue'
import Analysis from '../../components/LandingPage7/Analysis.vue'
import HowItWorks from '../../components/LandingPage7/HowItWorks.vue'
import Benefits from '../../components/LandingPage7/Benefits.vue'
import Priceing from '../../components/LandingPage7/Priceing.vue'
import Accordion from '../../components/LandingPage7/Accordion.vue'
import Testimonials from '../../components/LandingPage7/Testimonials.vue'
import Blog from '../../components/LandingPage7/Blog.vue'
import ContactUs from '../../components/LandingPage7/ContactUs.vue'
import Footer from '../../components/FooterStyle2/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage7',
  components: {
    Home,
    AboutUs,
    Analysis,
    HowItWorks,
    Benefits,
    Priceing,
    Accordion,
    Testimonials,
    Blog,
    ContactUs,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage7'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider7()
    }, 100)
  }
}
</script>
