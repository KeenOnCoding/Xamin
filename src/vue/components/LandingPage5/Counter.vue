<template>
  <section class="pt-0 ">
    <div class="container">
      <FancyCard2 card-class="row" :card-content="list" />
    </div>
  </section>
</template>
<script>
import FancyCard2 from '../themes/Card/FancyCard2.vue';
export default {
    name:'Counter',
    components: {
      FancyCard2
    },
    data () {
    return {
      list: [
        {
          number: 50,
          title: 'Tranding Volumn',
          src: '/assets/images/fancybox/5-1.png'
        },
        {
          number: 400,
          title: 'Transaction',
          src: '/assets/images/fancybox/5-2.png'
        },
        {
          number: 150,
          title: 'Happy User',
          src: '/assets/images/fancybox/5-3.png'
        },
        {
          number: 750,
          title: 'Custom Portfolio Created',
          src: '/assets/images/fancybox/5-4.png'
        }
      ]
    }
  }
}
</script>