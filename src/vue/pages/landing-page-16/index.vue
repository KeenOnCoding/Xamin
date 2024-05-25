<template>
  <div>
    <Home />
    <div class="main-content">
      <Video />
      <Specialize />
      <Spcontent />
      <About />
      <Category />
      <Team />
      <Client />
      <Testimonials />
      <Blog />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../components/LandingPage16/Home.vue'
import Video from '../../components/LandingPage16/Video.vue'
import Specialize from '../../components/LandingPage16/Specialize.vue'
import Spcontent from '../../components/LandingPage16/Spcontent.vue'
import About from '../../components/LandingPage16/About.vue'
import Category from '../../components/LandingPage16/Category.vue'
import Team from '../../components/LandingPage16/Team.vue'
import Client from '../../components/LandingPage16/Client.vue'
import Testimonials from '../../components/LandingPage16/Testimonials.vue'
import Blog from '../../components/LandingPage16/Blog.vue'
import Footer from '../../components/LandingPage16/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage16',
  components: {
    Home,
    Video,
    Specialize,
    Spcontent,
    About,
    Category,
    Team,
    Client,
    Testimonials,
    Blog,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage16'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider16()
    }, 1000)
  }
}
</script>
