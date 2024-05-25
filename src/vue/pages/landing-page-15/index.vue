<template>
  <div>
    <Home />
    <div class="main-content">
      <Chart />
      <Services15 />
      <About />
      <Howithelps />
      <Partner />
      <Contactus />
      <Blog />
    </div>
    <Footer />
  </div>
</template>
<script>
import Home from '../../components/LandingPage15/Home.vue'
import Chart from '../../components/LandingPage15/Chart.vue'
import Services15 from '../../components/LandingPage15/Services.vue'
import About from '../../components/LandingPage15/About.vue'
import Howithelps from '../../components/LandingPage15/Howithelps.vue'
import Partner from '../../components/LandingPage15/Partner.vue'
import Contactus from '../../components/LandingPage15/Contactus.vue'
import Blog from '../../components/LandingPage15/Blog.vue'
import Footer from '../../components/LandingPage15/Footer.vue'
import { themes } from '../../assets/app/app'
// import { vcRoundChart } from '../../assets/js/plugin/vc_round_chart.min'
export default {
  layout: 'LandingPage15',
  components: {
    Home,
    Chart,
    Services15,
    About,
    Howithelps,
    Partner,
    Contactus,
    Blog,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage15'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider15()
      // vcRoundChart.vcRoundChart()
    }, 1000)
  }
}
</script>
