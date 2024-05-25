<template>
  <div>
    <BreadCrumb crumb-title="One Column Blog" :crumb-media="image" :crumb-links="links" />
    <div class="main-content">
      <BlogOne />
      <Footer />
    </div>
  </div>
</template>

<script>
import BreadCrumb from '~/components/themes/BreadCrumb.vue'
import BlogOne from '../../components/BlogOneColumnGrid/BlogList'
import Footer from '../../components/BlogOneColumnGrid/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Blog',
  components: {
    BreadCrumb,
    BlogOne,
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
