<!--

preview:
gm mogrify -output-directory preview -resize 320 -quality 50 *.jpg
fullsize:
gm mogrify -output-directory fullsize -resize 1920 -quality 60 *.jpg

      :width="$vuetify.breakpoint.xs ? $vuetify.breakpoint.width / 1.5 : undefined"
-->

<template>
  <div>
    <!--
    <Carousel
      :count="model.images.length"
      :width="$vuetify.breakpoint.xs ? $vuetify.breakpoint.width / 1.5 : undefined"
      :clickable="true"
      :controls-visible="true"
      @after-slide-change="i => selected = i"
      :startIndex="selected"
    >
      <Slide
        class="__StaticGallery-slide"
        v-for="(image, i) in model.images" :key="i"
        :index="i"
      >
        <img
          class="__StaticGallery-img"
          :src="image.small"
          v-img="{ src: image.large, group: model.name }"
        >
      </Slide>
    </Carousel>
    -->
    <v-carousel
      :cycle="false"
      hide-delimiters
      :hide-controls="hideControls"
      v-model="selected"
      :style="{ height: $vuetify.breakpoint.smAndDown ? $vuetify.breakpoint.width + 'px' : undefined }"
    >
      <v-carousel-item
        v-for="(image, i) in model.images" :key="i"
      >
        <img
          class="__StaticGallery-v-img"
          :src="image.small"
          v-img="{
            src: image.large,
            group: model.name,
            changed: index => {selected = index},
            opened: () => hideControls = true,
            closed: () => hideControls = false
          }"
        >
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d'

  export default {
    props: ['model'],
    data() {
      return {
        selected: this.model.initial || 0,
        hideControls: false
      }
    },
    components: { Carousel: Carousel3d, Slide }
  }
</script>

<style>
  .__StaticGallery-slide {
    border: none;
    background: none;
    padding: 0.5rem;
  }

  .__StaticGallery-v-img {
    height: 100%;

    position: relative;
    left: 50%;
    transform: translate(-50%, 0);

  }
</style>

