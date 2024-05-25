<template>
  <div>
    <BreadCrumb crumb-title="Managed Analytics" :crumb-media="image" :crumb-links="links" />
    <div class="main-content">
      <Service />
    </div>
    <Footer />
  </div>
</template>

<script>
import BreadCrumb from '../../components/themes/BreadCrumb.vue'
import Service from '../../components/ManagedAnalytics/Service.vue'
import Footer from '../../components/FooterStyle1/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Services',
  components: {
    BreadCrumb,
    Service,
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
