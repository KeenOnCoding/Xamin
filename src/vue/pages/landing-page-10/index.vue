<template>
  <div>
    <Home />
    <div class="main-content">
      <Counter />
      <Analytic />
      <Services10 />
      <Visual />
      <GetTipsTricks />
      <DataDazzle />
      <Brands />
      <Blog />
      <RequestDemo />
    </div>
    <Footer footer-class="footer-one iq-bg-dark iq-over-dark-90" />
  </div>
</template>
<script>
import Home from '../../components/LandingPage10/Home.vue'
import Counter from '../../components/LandingPage10/Counter.vue'
import Analytic from '../../components/LandingPage10/Analytic.vue'
import Services10 from '../../components/LandingPage10/Services.vue'
import Visual from '../../components/LandingPage10/Visual.vue'
import GetTipsTricks from '../../components/LandingPage10/GetTipsTricks.vue'
import DataDazzle from '../../components/LandingPage10/DataDazzle.vue'
import Brands from '../../components/LandingPage10/Brands.vue'
import Blog from '../../components/LandingPage10/Blog.vue'
import RequestDemo from '../../components/LandingPage10/RequestDemo.vue'
import Footer from '../../components/FooterStyle2/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage10',
  components: {
    Home,
    Counter,
    Analytic,
    Services10,
    Visual,
    GetTipsTricks,
    DataDazzle,
    Brands,
    Blog,
    RequestDemo,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage10'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider10()
    }, 1000)
  }
}
</script>
