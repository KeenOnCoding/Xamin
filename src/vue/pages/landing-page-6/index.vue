<template>
  <div>
    <Home />
    <div class="main-content">
      <Counter />
      <AboutUs />
      <Services6 />
      <Analytic />
      <WeProvide />
      <CaseStudies />
      <Partner />
      <Testimonials />
      <Blog />
      <ContactUs />
    </div>
    <Footer footer-class="footer-one iq-bg-dark iq-over-dark-90" />
  </div>
</template>
<script>
import Home from '../../components/LandingPage6/Home.vue'
import Counter from '../../components/LandingPage6/Counter.vue'
import AboutUs from '../../components/LandingPage6/AboutUs.vue'
import Analytic from '../../components/LandingPage6/Analytic.vue'
import Services6 from '../../components/LandingPage6/Services.vue'
import WeProvide from '../../components/LandingPage6/WeProvide.vue'
import CaseStudies from '../../components/LandingPage6/CaseStudies.vue'
import Partner from '../../components/LandingPage6/Partner.vue'
import Testimonials from '../../components/LandingPage6/Testimonials.vue'
import Blog from '../../components/LandingPage6/Blog.vue'
import ContactUs from '../../components/LandingPage6/ContactUs.vue'
import Footer from '../../components/FooterStyle2/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage6',
  components: {
    Home,
    Counter,
    AboutUs,
    Services6,
    Analytic,
    WeProvide,
    CaseStudies,
    Partner,
    Testimonials,
    Blog,
    ContactUs,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage6'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider6()
    }, 1000)
  }
}
</script>
