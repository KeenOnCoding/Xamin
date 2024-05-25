<template>
  <div>
    <Home />
    <div class="main-content">
      <Partner />
      <About />
      <Specialize />
      <Expertize />
      <Overview />
      <Blog />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../components/LandingPage12/Home.vue'
import Blog from '../../components/LandingPage12/Blog.vue'
import Partner from '../../components/LandingPage12/Partner.vue'
import About from '../../components/LandingPage12/About.vue'
import Specialize from '../../components/LandingPage12/Specialize.vue'
import Expertize from '../../components/LandingPage12/Expertize.vue'
import Overview from '../../components/LandingPage12/Overview.vue'
import Footer from '../../components/LandingPage12/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage12',
  components: {
    Home,
    About,
    Partner,
    Specialize,
    Expertize,
    Overview,
    Blog,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage12'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider12()
    }, 1000)
  }
}
</script>
