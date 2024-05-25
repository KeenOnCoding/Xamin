<template>
  <div :class="cardClass">
    <div class="iq-portfolio">
      <a href="#" class="iq-portfolio-img"><img width="1260" height="954" :src="cardMedia" class="img-fluid" alt="" ></a>
      <div class="iq-portfolio-content  text-center">
        <div class="details-box clearfix">
          <div class="consult-details">
            <a href="#">
              <h5 class="text-hover"> {{ cardTitle }} </h5>
            </a>
            <p class="mb-0">{{ cardSubtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:'CardStyle7',
    props:['cardTitle','cardSubtitle','cardMedia','cardClass']
}
</script>