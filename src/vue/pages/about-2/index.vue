<template>
  <div>
    <BreadCrumb crumb-title="About Us 2" :crumb-media="image" :crumb-links="links" />
    <div class="main-content" >
      <Video />
      <About />
      <ServicesAbout2 />
      <Testimonials />
      <Client />
    </div>
    <Footer />
  </div>
</template>


<script>
import BreadCrumb from '~/components/themes/BreadCrumb.vue'
import Video from '../../components/AboutUs-2/Video.vue'
import About from '../../components/AboutUs-2/About.vue'
import ServicesAbout2 from '../../components/AboutUs-2/Services.vue'
import Testimonials from '../../components/AboutUs-2/Testimonials.vue'
import Client from '../../components/AboutUs-2/Client.vue'
import Footer from '../../components/FooterStyle1/Footer.vue'
import { themes } from '../../assets/app/app'

export default {
  layout: 'AboutUs',
  components: {
    BreadCrumb,
    Video,
    About,
    ServicesAbout2,
    Testimonials,
    Client,
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
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
