<template>
  <section >
    <div class="container">
      <div class="row xamin-bg">
        <div class="col-sm-12">
          <div class="title-box wow fadeInUp text-center">
            <span class="title-design">Our Clients</span>
            <h2>All Our Great Clients</h2>
          </div>
        </div>
        <div class="col-sm-12">
          <CardStyle6 :client-list="list" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CardStyle6 from '../themes/Card/CardStyle6.vue';
export default {
  name:'Client',
  components:{
    CardStyle6
  },
  data(){
    return{
      list : [
        {
          src: '/assets/images/partners/1.png'
        },
        {
          src: '/assets/images/partners/2.png'
        },
        {
          src: '/assets/images/partners/3.png'
        },
        {
          src: '/assets/images/partners/4.png'
        },
        {
          src: '/assets/images/partners/5.png'
        },
        {
          src: '/assets/images/partners/1.png'
        },
        {
          src: '/assets/images/partners/2.png'
        },
        {
          src: '/assets/images/partners/3.png'
        },
        {
          src: '/assets/images/partners/4.png'
        },
        {
          src: '/assets/images/partners/5.png'
        },
        {
          src: '/assets/images/partners/1.png'
        },
        {
          src: '/assets/images/partners/2.png'
        },
        {
          src: '/assets/images/partners/3.png'
        },
        {
          src: '/assets/images/partners/4.png'
        },
        {
          src: '/assets/images/partners/5.png'
        },
        {
          src: '/assets/images/partners/1.png'
        },
        {
          src: '/assets/images/partners/2.png'
        },
        {
          src: '/assets/images/partners/3.png'
        }
      ]
    }
  }
}
</script>