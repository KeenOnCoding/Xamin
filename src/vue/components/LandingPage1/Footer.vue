<template>
  <FooterMain footer-class="footer-one iq-bg-dark iq-over-dark-90">
  <template #footerContent >
    <div class="footer-top">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <FooterLogo
          :section-image="navLogo"
          section-text="It is a long established fact that a reader will be distracted by the readable content."
          />
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6 mt-4 mt-lg-0 mt-md-0">
          <FooterLinks :content="footerHome" title="Menu"/>
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6 mt-4 mt-lg-0 mt-md-0">
          <FooterLinks :content="footerHome" title="About Us"/>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4">
          <FooterAddress :address-content="footerText" address-title="Contact us" class="iq-contact" />
        </div>
      </div>
    </div>
</template>
</FooterMain>

</template>
<script>
import FooterMain from '../themes/Partials/Footer/FooterMain.vue'
import FooterLogo from '../themes/Partials/FooterComponents/FooterLogo.vue'
import FooterAddress from '../themes/Partials/FooterComponents/FooterAddress.vue'
import FooterLinks from '../themes/Partials/FooterComponents/FooterLinks.vue'
import logoImg from '/assets/images/logo.png'

export default {
  name: 'Footer',
  components: { FooterLogo, FooterLinks, FooterAddress, FooterMain },
  data () {
    return {
      navLogo: logoImg,
      footerText: [
        {
          icon: true,
          iconClass: 'fa fa-phone',
          text: '+0123 456 789'
        },
        {
          icon: true,
          iconClass: 'fas fa-envelope',
          text: 'support@iqnonicthemes.com'
        },
        {
          icon: true,
          iconClass: 'fas fa-home',
          text: '1234 North Luke Lane, South Bend, IN 360001'
        }
      ],
      footerHome: [
        {
          href: '/',
          title: 'Home'
        },
        {
          href: '/blog',
          title: 'Blog'
        },
        {
          href: '/careers',
          title: 'Careers'
        },
        {
          href: 'clients',
          title: 'Clients'
        },
        {
          href: 'services',
          title: 'Service'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
