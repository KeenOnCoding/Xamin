<template>
  <div>
    <BreadCrumb crumb-title="Portfolio Details" :crumb-media="image" :crumb-links="links" />
    <div class="main-content">
      <Client />
      <Slider />
      <Projects />
      </div>
    <Footer />
  </div>
</template>
<script>
import BreadCrumb from '~/components/themes/BreadCrumb.vue'
import Client from '../../components/PortfolioDetail/Client.vue'
import Slider from '../../components/PortfolioDetail/Slider.vue'
import Projects from '../../components/PortfolioDetail/Projects.vue'
import Footer from '../../components/FooterStyle1/Footer.vue'
export default {
  layout: 'OurCases',
  components:{
    BreadCrumb,
    Client,
    Slider,
    Projects,
    Footer
  },
  data(){
    return{
      links:[
        {
          title: 'Home',
          href: 'landing-page-1'
        },
        {
          title: 'Portfolio',
          href: 'portfolio-detail'
        }
      ],
      image: '/assets/images/about-us/04.png'
    }
  }

}
</script>
