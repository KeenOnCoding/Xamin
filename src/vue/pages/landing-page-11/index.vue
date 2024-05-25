<template>
  <div>
    <Home />
    <div class="main-content">
      <Process />
      <About />
      <Services11 />
      <Project />
      <Client />
      <Blog />
    </div>
    <Footer footer-class="footer-one iq-bg-dark iq-over-dark-90" />
  </div>
</template>

<script>
import Home from '../../components/LandingPage11/Home.vue'
import Process from '../../components/LandingPage11/Process.vue'
import About from '../../components/LandingPage11/About.vue'
import Services11 from '../../components/LandingPage11/Services.vue'
import Project from '../../components/LandingPage11/Project.vue'
import Client from '../../components/LandingPage11/Client.vue'
import Blog from '../../components/LandingPage11/Blog.vue'
import Footer from '../../components/FooterStyle2/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage11',
  components: {
    Home,
    Process,
    About,
    Services11,
    Project,
    Client,
    Blog,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage11'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider11()
    }, 1000)
  }
}
</script>
