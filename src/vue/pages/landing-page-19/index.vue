<template>
  <div>
    <Home />
    <div class="main-content">
      <Select />
      <Client />
      <Feature />
      <Type />
      <Counter />
      <Testimonial />
      <Bluebg />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../components/LandingPage19/Home.vue'
import Select from '../../components/LandingPage19/Select.vue'
import Client from '../../components/LandingPage19/Client.vue'
import Feature from '../../components/LandingPage19/Feature.vue'
import Type from '../../components/LandingPage19/Type.vue'
import Counter from '../../components/LandingPage19/Counter.vue'
import Testimonial from '../../components/LandingPage19/Testimonial.vue'
import Bluebg from '../../components/LandingPage19/Bluebg.vue'
import Footer from '../../components/LandingPage19/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage19',
  components: {
    Home,
    Select,
    Client,
    Feature,
    Type,
    Counter,
    Testimonial,
    Bluebg,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage19'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider19()
    }, 1000)
  }
}
</script>
