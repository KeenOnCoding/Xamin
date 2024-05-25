<template>
  <div>
    <Home />
    <div class="main-content">
      <WhyChooseUs />
      <AboutUs />
      <Services3 />
      <Counter />
      <GetStarted />
      <Process />
      <Testimonials />
      <Blog />
      <Client />
      <Footer footer-class="footer-one iq-bg-dark iq-over-image-bg" />
    </div>
  </div>
</template>

<script>
import Home from '../../components/LandingPage3/Home.vue'
import WhyChooseUs from '../../components/LandingPage3/WhyChooseUs.vue'
import AboutUs from '../../components/LandingPage3/AboutUs.vue'
import Services3 from '../../components/LandingPage3/Services.vue'
import Counter from '../../components/LandingPage3/Counter.vue'
import GetStarted from '../../components/LandingPage3/GetStarted.vue'
import Process from '../../components/LandingPage3/Process.vue'
import Testimonials from '../../components/LandingPage3/Testimonials.vue'
import Blog from '../../components/LandingPage3/Blog.vue'
import Client from '../../components/LandingPage3/Client.vue'
import Footer from '../../components/FooterStyle2/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
 layout: 'LandingPage3',
  components: {
    Home,
    WhyChooseUs,
    AboutUs,
    Services3,
    Counter,
    GetStarted,
    Process,
    Testimonials,
    Blog,
    Client,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage3'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider3()
    }, 1000)
  }
}
</script>
