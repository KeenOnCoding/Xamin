<template>
  <div>
    <BreadCrumb crumb-title="Portfolio No Space" :crumb-media="image" :crumb-links="links" />
    <div class="main-content">
      <Isotope grid-class="iq-masonry iq-columns-3 no-padding" />
    </div>
    <Footer />
  </div>
</template>
<script>
import BreadCrumb from '~/components/themes/BreadCrumb.vue'
import Isotope from '../../components/Masonry/Isotope.vue'
import Footer from '../../components/FooterStyle1/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'OurCases',
  components:{
    BreadCrumb,
    Isotope,
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