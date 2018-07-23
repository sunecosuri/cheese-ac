<template>
  <div>
    <hero-image />
    <about />
    <course />
    <news />
    <access />
    <contact />
  </div>
</template>

<script>
  import HeroImage from '~/components/top/HeroImage.vue'
  import About from '~/components/top/About.vue'
  import Course from '~/components/top/Course.vue'
  import News from '~/components/top/News.vue'
  import Access from '~/components/top/Access.vue'
  import Contact from '~/components/top/Contact.vue'

  export default {
    layout: 'default',
    
    components: {
      HeroImage,
      About,
      Course,
      News,
      Access,
      Contact
    }
  }
</script>
