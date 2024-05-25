<template>
  <div :class="cardClass">
    <div v-for="(item,index) in cardContent" :key="index" class="col-lg-4 col-md-4 col-sm-6 wow fadeInUp align-items-center">
      <div class="fancy_service wow fadeInUp  text-center" >
        <div class="hover-effect"></div>
        <div class="fancy-info">
          <img :src="item.src" alt="fancybox">
          <h4 class="mt-4 mb-3 title">{{ item.title }}</h4>
          <p class="">{{ item.subtitle }}</p>
          <a class="link-btn" href="#"><span class="btn-effect"> Read More<i class="ion-ios-arrow-right"></i></span></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FancyCard1',
  props: [ 'cardClass', 'cardContent']
}
</script>
