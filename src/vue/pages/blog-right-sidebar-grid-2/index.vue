<template>
  <div>
    <BreadCrumb crumb-title="Right Sidebar Grid 2" :crumb-media="image" :crumb-links="links" />
    <div class="main-content">
      <BlogRight />
      <Footer />
    </div>
  </div>
</template>

<script>
import BreadCrumb from '~/components/themes/BreadCrumb.vue'
import BlogRight from '../../components/BlogRightSidebarGrid2/BlogList'
import Footer from '../../components/BlogRightSidebarGrid2/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Blog',
  components: {
    BreadCrumb,
    BlogRight,
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
