<template>
  <div>
    <BreadCrumb crumb-title="Blog" :crumb-media="image" :crumb-links="links" />
    <div class="main-content">
      <BlogList />
      <Footer />
    </div>
  </div>
</template>

<script>
import BreadCrumb from '~/components/themes/BreadCrumb.vue'
import BlogList from '../../components/Blog/BlogList.vue'
import Footer from '../../components/Blog/Footer.vue'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Blog',
  components: {
    BreadCrumb,
    BlogList,
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
