<template>
  <div class="main-content">
    <BreadCrum />
    <Services />
    <About />
    <Client />
    <Footer />
  </div>
</template>

<script>
import BreadCrum from '../../components/Services/BreadCrum.vue'
import Services from '../../components/Services/Services.vue'
import About from '../../components/Services/About.vue'
import Client from '../../components/Services/Client.vue'
import Footer from '../../components/Services/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Services',
  components: {
    BreadCrum,
    Services,
    About,
    Client,
    Footer
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
