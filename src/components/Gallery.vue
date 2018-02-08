<!--

preview:
gm mogrify -output-directory preview -resize 320 -quality 50 *.jpg
fullsize:
gm mogrify -output-directory fullsize -resize 1920 -quality 60 *.jpg

-->

<template>
  <carousel-3d
    :count="galleryJson.images.length"
    :controlsVisible="true"
    :autoplay="autoplay"
    :width="$vuetify.breakpoint.xs ? $vuetify.breakpoint.width / 1.5 : undefined"
    @after-slide-change="i => selected = i"
    @click="$console.log(12)"
  >
    <slide v-for="(url, i) of galleryJson.images" :key="i" :index="i">
      <img
        :src="src + '/preview/' + url"
        v-img="{ group: src, src: src + '/fullsize/' + url }"
        style="
          width: 100%;
          height: 100%;
          object-fit: contain;
        "
      >
    </slide>
  </carousel-3d>
</template>

<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d';

  export default {
    props: ['src'],
    data: () => ({ selected: 0, autoplay: false }),
    asyncComputed: {
      galleryJson: {
        get() { return fetch(this.src + '/gallery.json').then(v => v.json()) },
        default: { title: '', images:[] }
      }
    },
    components: {
      Carousel3d,
      Slide
    }
  }
</script>

<style>
  .carousel-3d-controls > .next,
  .carousel-3d-controls > .prev {
    color: white !important;
    text-shadow: 0 0 10px black !important;
  }

  .carousel-3d-slide {
    background: transparent !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    border: none !important;
  }
</style>
