<template>
  <div>
    <Home />
    <div class="main-content">
      <Blog />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../components/LandingPage21/Home.vue'
import Blog from '../../components/LandingPage21/Blog.vue'
import Footer from '../../components/LandingPage21/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage21',
  components: {
    Home,
    Blog,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage21'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider21()
    }, 1000)
  }
}
</script>
