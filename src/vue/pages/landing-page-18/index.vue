<template>
  <div>
    <Home />
    <div class="main-content">
      <Chart />
      <Whatwedo />
      <Whatcontent />
      <About />
      <Services18 />
      <Overview />
      <Bgimg />
      <Blog />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../components/LandingPage18/Home.vue'
import Chart from '../../components/LandingPage18/Chart.vue'
import Whatwedo from '../../components/LandingPage18/Whatwedo.vue'
import Whatcontent from '../../components/LandingPage18/Whatcontent.vue'
import About from '../../components/LandingPage18/About.vue'
import Services18 from '../../components/LandingPage18/Services.vue'
import Overview from '../../components/LandingPage18/Overview.vue'
import Bgimg from '../../components/LandingPage18/Bgimg.vue'
import Blog from '../../components/LandingPage18/Blog.vue'
import Footer from '../../components/LandingPage18/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage18',
  components: {
    Home,
    Chart,
    Whatwedo,
    Whatcontent,
    About,
    Services18,
    Overview,
    Bgimg,
    Blog,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage18'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider18()
    }, 1000)
  }
}
</script>
