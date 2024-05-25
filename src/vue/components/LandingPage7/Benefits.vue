<template>
  <section class="pt-0 iq-pb-40">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 wow fadeInUp">
          <div class="title-box wow fadeInUp text-center">
            <span class="title-design">BENEFITS</span>
            <h2>Benefits With Us</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item , index) in items" :key="index" class="col-lg-6 col-md-6 col-sm-12">
          <div class="fancy_service style2 wow fadeInUp  text-left">
            <div class="bg_img">
              <img class="bg_img-img" :src="item.bgimage" alt="fancybox">
            </div>
            <div class="fancy_block">
              <div class="fancy-info">
                <h4 class="mb-3 title">{{ item.title }}</h4>
                <p>{{ item.subtitle }}</p>
                <a class="button blue-btn" href="#"><span class="btn-effect"> Find Out More</span></a>
              </div>
              <div class="fancy_img">
                <img :src="item.fancy_img" alt="fancybox">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Benefits',
  data() {
    return {
      items: [
        {
          title: 'Predictive insights',
          subtitle: 'There are many variations of passages of Lorem Ipsum available, in',
          bgimage: '/assets/images/fancybox/bg-7-2.png',
          fancy_img: '/assets/images/fancybox/7-5.png'
        },
        {
          title: 'Smarter Workforce',
          subtitle: 'There are many variations of passages of Lorem Ipsum available, in',
          bgimage: '/assets/images/fancybox/bg-7-2.png',
          fancy_img: '/assets/images/fancybox/7-6.png'
        },
        {
          title: 'Proficiency',
          subtitle: 'There are many variations of passages of Lorem Ipsum available, in',
          bgimage: '/assets/images/fancybox/bg-7-2.png',
          fancy_img: '/assets/images/fancybox/7-7.png'
        },
        {
          title: 'Consistent accuracy',
          subtitle: 'There are many variations of passages of Lorem Ipsum available, in',
          bgimage: '/assets/images/fancybox/bg-7-2.png',
          fancy_img: '/assets/images/fancybox/7-8.png'
        }

      ]
    }
  }
}
</script>
