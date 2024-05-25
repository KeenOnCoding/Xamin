<template>
  <div>
    <Home />
    <div class="main-content">
      <Services2 />
      <About1 />
      <About2 />
      <Counter />
      <Video />
      <Customer />
      <Client />
      <Blog />
      <Partner />
      <Footer/>
    </div>
  </div>
</template>

<script>
import Home from '../../components/LandingPage2/Home.vue'
import Services2 from '../../components/LandingPage2/Services.vue'
import About1 from '../../components/LandingPage2/About1.vue'
import About2 from '../../components/LandingPage2/About2.vue'
import Counter from '../../components/LandingPage2/Counter.vue'
import Video from '../../components/LandingPage2/Video.vue'
import Customer from '../../components/LandingPage2/Customer.vue'
import Client from '../../components/LandingPage2/Client.vue'
import Blog from '../../components/LandingPage2/Blog.vue'
import Partner from '../../components/LandingPage2/Partner.vue'
import Footer from '../../components/LandingPage2/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage2',
  components: {
    Home,
    Services2,
    About1,
    About2,
    Counter,
    Video,
    Customer,
    Client,
    Blog,
    Partner,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage2'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider2()
    }, 1000)
  }
}
</script>
