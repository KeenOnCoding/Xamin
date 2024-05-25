<template>
  <div>
    <BreadCrumb crumb-title="About Us" :crumb-media="image" :crumb-links="links" />
    <div class="main-content" >
      <AboutUs />
      <History />
      <Team />
      <Footer />
    </div>
  </div>
</template>

<script>
import BreadCrumb from '~/components/themes/BreadCrumb.vue'
import AboutUs from '../../components/AboutUs-1/AboutUs.vue'
import History from '../../components/AboutUs-1/History.vue'
import Team from '../../components/AboutUs-1/Team.vue'
import Footer from '../../components/AboutUs-1/Footer.vue'
import { themes } from '../../assets/app/app'

export default {
  layout: 'AboutUs',
  components: {
    BreadCrumb,
    AboutUs,
    History,
    Team,
    Footer
  },
  data(){
    return{
      image: '/assets/images/about-us/04.png',
      links: [{
        title : 'Home' ,
        href : 'landing-page-1'
      }]
    }
  },
  mounted () {
    // const layout = themes.getCookie('layout')
    // this.$nuxt.setLayout(layout)
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
