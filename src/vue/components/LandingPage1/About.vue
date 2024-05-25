<template>
  <div>
    <SectionStyle1>
      <template #sectionTitle>
        <span class="title-design">About us</span>
      </template>
      <template #sectionHeading>
        <h2 >
          Focused on Actionable Insights
        </h2>
      </template>
      <template #sectionDescription>
        It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.
      </template>
      <template #sectionContent>
        <ul class="iq-list">
          <li v-for="(item,index) of list" :key="index"><i :class="item.icon"> </i><span>{{ item.title }}</span></li>
        </ul>
      </template>
      <template #sectionButton>
        <a  class="button button-icon" href="#"><span class="btn-effect"> Read More</span> </a>
      </template>
    </SectionStyle1>
  </div>
</template>

<script>
import SectionStyle1 from '../themes/Sections/SectionStyle1.vue'
export default {
  components: {
    SectionStyle1
  },
  data () {
    return {
      list: [
        {
          icon: 'fas fa-check-square',
          title: 'Advance Advisory Team'
        },
        {
          icon: 'fas fa-check-square',
          title: 'Professional Consulting Services'
        },
        {
          icon: 'fas fa-check-square',
          title: '24/7 Support Help Center'
        },
        {
          icon: 'fas fa-check-square',
          title: 'Customer Service & Operations'
        }
      ]
    }
  }
}
</script>
