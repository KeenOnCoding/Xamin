<template>
  <div>
    <BreadCrumb crumb-title="Three Column Blog" :crumb-media="image" :crumb-links="links" />
    <div class="main-content">
      <BlogThree />
      <Footer />
    </div>
  </div>
</template>

<script>
import BreadCrumb from '~/components/themes/BreadCrumb.vue'
import BlogThree from '../../components/BlogThreeColumnGrid/BlogList'
import Footer from '../../components/BlogThreeColumnGrid/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Blog',
  components: {
    BreadCrumb,
    BlogThree,
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
