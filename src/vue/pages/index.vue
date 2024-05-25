<template>
  <div class="main-content">
    <Home />
    <About />
    <HowWeWorks />
    <HowItWorks />
    <Services1 />
    <Customer />
    <Project />
    <Client />
    <Awards />
    <Blog />
    <Footer />
  </div>
</template>

<script>
import Home from '../components/LandingPage1/Home.vue'
import About from '../components/LandingPage1/About.vue'
import HowWeWorks from '../components/LandingPage1/HowWeWorks.vue'
import HowItWorks from '../components/LandingPage1/HowItWorks.vue'
import Services1 from '../components/LandingPage1/Services.vue'
import Customer from '../components/LandingPage1/Customer.vue'
import Project from '../components/LandingPage1/Project.vue'
import Client from '../components/LandingPage1/Client.vue'
import Awards from '../components/LandingPage1/Awards.vue'
import Blog from '../components/LandingPage1/Blog.vue'
import Footer from '../components/LandingPage1/Footer.vue'
import { themes } from '../assets/app/app'
export default {
  layout: 'LandingPage1',
  components: {
    Home,
    About,
    HowWeWorks,
    HowItWorks,
    Services1,
    Customer,
    Project,
    Client,
    Awards,
    Blog,
    Footer,
  },
  mounted () {
    setTimeout(function () {
      themes.index()
      themes.initRevSlider1()
    }, 500)
  }
}
</script>
