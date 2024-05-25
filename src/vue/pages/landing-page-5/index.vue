<template>
  <div>
    <Home />
    <div class="main-content">
      <AboutUs />
      <Client />
      <GetTipsTricks5 />
      <Counter />
      <Features />
      <Solutions />
      <Partner />
      <Blog />
    </div>
    <Footer footer-class="footer-one iq-bg-dark iq-over-dark-90" />
  </div>
</template>

<script>
import Home from '../../components/LandingPage5/Home.vue'
import AboutUs from '../../components/LandingPage5/AboutUs.vue'
import Client from '../../components/LandingPage5/Client.vue'
import GetTipsTricks5 from '../../components/LandingPage5/GetTipsTricks.vue'
import Counter from '../../components/LandingPage5/Counter.vue'
import Features from '../../components/LandingPage5/Features.vue'
import Solutions from '../../components/LandingPage5/Solutions.vue'
import Partner from '../../components/LandingPage5/Partner.vue'
import Blog from '../../components/LandingPage5/Blog.vue'
import Footer from '../../components/FooterStyle2/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage5',
  components: {
    Home,
    AboutUs,
    Client,
    GetTipsTricks5,
    Counter,
    Features,
    Solutions,
    Partner,
    Blog,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage5'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider5()
    }, 1000)
  }
}
</script>
