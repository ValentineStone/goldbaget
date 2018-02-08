<template>
  
  <a :href="href" target="_blank" class="__social">
    <img :src="images[type]" class="__social-img"/>
  </a>

</template>

<script>
  export default {
    props: ['href', 'type'],
    data() {
      return {
        images: {
          facebook: '/static/img/social/facebook.svg',
          vk: '/static/img/social/vk.svg',
          youtube: '/static/img/social/youtube.svg'
        }
      }
    }
  }
</script>

<style>
  .__social {
    margin: 1rem;
  }

  .__social-img {
    filter: invert(1);
    width: 4rem;
    height: 4rem;
  }

</style>
