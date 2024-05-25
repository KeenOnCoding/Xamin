<template>
  <div>
    <BreadCrumb crumb-title="Blog Details" :crumb-media="image" :crumb-links="links"/>
    <div class="main-content">
      <BlogDetail />
      <Footer />
    </div>
  </div>
</template>

<script>
import BreadCrumb from '~/components/themes/BreadCrumb.vue'
import BlogDetail from '../../components/BlogDetails/BlogList.vue'
import Footer from '../../components/BlogDetails/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Blog',
  components: {
    BreadCrumb,
    BlogDetail,
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
