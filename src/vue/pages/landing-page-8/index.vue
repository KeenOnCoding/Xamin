<template>
  <div>
    <Home />
    <div class="main-content">
      <Client />
      <Usage />
      <Features />
      <Services8 />
      <HowWeWork />
      <Priceing />
      <Customer />
      <Blog />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../components/LandingPage8/Home.vue'
import Client from '../../components/LandingPage8/Client.vue'
import Usage from '../../components/LandingPage8/Usage.vue'
import Features from '../../components/LandingPage8/Features.vue'
import Services8 from '../../components/LandingPage8/Services.vue'
import HowWeWork from '../../components/LandingPage8/HowWeWork.vue'
import Priceing from '../../components/LandingPage8/Priceing.vue'
import Customer from '../../components/LandingPage8/Customer.vue'
import Blog from '../../components/LandingPage8/Blog.vue'
import Footer from '../../components/FooterStyle1/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage8',
  components: {
    Home,
    Usage,
    Features,
    Services8,
    HowWeWork,
    Priceing,
    Customer,
    Blog,
    Client,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage8'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider8()
    }, 1000)
  }
}
</script>
