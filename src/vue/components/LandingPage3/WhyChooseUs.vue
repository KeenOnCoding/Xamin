<template>
  <div>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 pr-3">
            <div class="title-box wow fadeInUp mb-0 text-center text-lg-left border-right ">
              <span class="title-design">Why Choose Us</span>
              <h2>Why Choose <br class="d-none d-lg-block">People Xamin</h2>
            </div>
          </div>
          <div class="col-lg-8 align-self-center">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
          </div>
        </div>
      </div>
    </section>
    <Quality />
  </div>
</template>
<script>
import Quality from '../LandingPage3/Quality.vue'
export default {
    name: 'WhyChooseUs',
    components:{
      Quality
    }
}
</script>