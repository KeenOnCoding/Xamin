<template>
  <div>
    <Home />
    <div class="main-content">
      <Howitworks />
      <About />
      <Services13 />
      <Team />
      <Partner />
      <Blog />
      <Client />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../components/LandingPage13/Home.vue'
import Howitworks from '../../components/LandingPage13/Howitworks.vue'
import About from '../../components/LandingPage13/About.vue'
import Services13 from '../../components/LandingPage13/Services.vue'
import Team from '../../components/LandingPage13/Team.vue'
import Partner from '../../components/LandingPage13/Partner.vue'
import Blog from '../../components/LandingPage13/Blog.vue'
import Client from '../../components/LandingPage13/Client.vue'
import Footer from '../../components/LandingPage13/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage13',
  components: {
    Home,
    Howitworks,
    About,
    Services13,
    Team,
    Partner,
    Blog,
    Client,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage13'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider13()
    }, 1000)
  }
}
</script>
