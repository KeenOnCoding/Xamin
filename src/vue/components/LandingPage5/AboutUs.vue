<template>
  <section>
    <div class="container">
      <div class="row ">
        <div class="col-md-12">
          <div class="title-box wow fadeInUp text-center">
            <span class="title-design">PARTNER</span>
            <h2>A trusted, proven leader.</h2>
          </div>
        </div>
      </div>
      <FancyCard1 card-class="row" :card-content="list" />
    </div>
  </section>
</template>
<script>
import FancyCard1 from '../themes/Card/FancyCard1.vue';
export default {
  components: {FancyCard1},
  name: 'AboutUs',
  data() {
    return {
      list:[
        {
          title: 'Individual Analyst',
          subtitle: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.',
          src: '/assets/images/services/10.png',
        },
        {
          title: 'Teams & Organizations',
          subtitle: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.',
          src: '/assets/images/services/11.png',
        },
        {
          title: 'Embedded Analytics',
          subtitle: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.',
          src: '/assets/images/services/12.png',
        }
      ]
    }
  }
}
</script>
