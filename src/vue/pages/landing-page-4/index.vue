<template>
  <div>
    <Home />
    <div class="main-content">
      <Client />
      <AboutUs />
      <Services4 />
      <Video />
      <GetStarted />
      <Testimonial />
      <Awards />
      <Blog />
    </div>
      <Footer footer-class="footer-one iq-bg-dark iq-over-image-bg" />
  </div>
</template>

<script>
import Home from '../../components/LandingPage4/Home.vue'
import Client from '../../components/LandingPage4/Client.vue'
import AboutUs from '../../components/LandingPage4/AboutUs.vue'
import Services4 from '../../components/LandingPage4/Services.vue'
import Video from '../../components/LandingPage4/Video.vue'
import GetStarted from '../../components/LandingPage4/GetStarted.vue'
import Testimonial from '../../components/LandingPage4/Testimonial.vue'
import Awards from '../../components/LandingPage4/Awards.vue'
import Blog from '../../components/LandingPage4/Blog.vue'
import Footer from '../../components/FooterStyle2/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
 layout: 'LandingPage4',
  components: {
    Home,
    Client,
    AboutUs,
    Services4,
    Video,
    GetStarted,
    Testimonial,
    Awards,
    Blog,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage4'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider4()
    }, 1000)
  }
}
</script>
