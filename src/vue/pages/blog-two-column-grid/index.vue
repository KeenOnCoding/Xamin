<template>
  <div>
    <BreadCrumb crumb-title="Two Column Blog" :crumb-media="image" :crumb-links="links" />
    <div class="main-content">
      <BlogTwo />
      <Footer />
    </div>
  </div>
</template>

<script>
import BreadCrumb from '~/components/themes/BreadCrumb.vue'
import BlogTwo from '../../components/BlogTwoColumnGrid/BlogList'
import Footer from '../../components/BlogTwoColumnGrid/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Blog',
  components: {
    BreadCrumb,
    BlogTwo,
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
