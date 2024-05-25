<template>
  <div>
    <Home />
    <div class="main-content">
      <Awards />
      <About />
      <Info />
      <Services14 />
      <Counter />
      <Partner />
      <Blog />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../components/LandingPage14/Home.vue'
import Awards from '../../components/LandingPage14/Awards.vue'
import About from '../../components/LandingPage14/About.vue'
import Info from '../../components/LandingPage14/Info.vue'
import Services14 from '../../components/LandingPage14/Services.vue'
import Counter from '../../components/LandingPage14/Counter.vue'
import Partner from '../../components/LandingPage14/Partner.vue'
import Blog from '../../components/LandingPage14/Blog.vue'
import Footer from '../../components/LandingPage14/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage14',
  components: {
    Home,
    Awards,
    About,
    Info,
    Services14,
    Counter,
    Partner,
    Blog,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage14'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider14()
    }, 1000)
  }
}
</script>
