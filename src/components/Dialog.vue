<template>
  <div
    :class="{
    '__dialog-root': true,
    '__visible': visible,
    '__fullscreen': $vuetify.breakpoint.xs
    }"
    @click.self="$emit('update:visible', false)"
  >
    <v-card class="__dialog-content-outer">
      <v-card-text class="__dialog-content-inner">
        <slot />
        <v-btn
          :ripple="false"
          color="primary"
          class="elevation-2"
          @click="$emit('update:visible', false)"
          style="margin: 0 auto; display: block;"
        >
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
    props: ['visible'],
    methods: {
      escListener(evt) {
        if (evt.keyCode == 27)
          this.$emit('update:visible', false)
      }
    },
    beforeMount() {
      document.documentElement.addEventListener('keyup', this.escListener)
    },
    beforeDestroy() {
      document.documentElement.removeEventListener('keyup', this.escListener)
    }
  }
</script>

<style>
  .__dialog-root {
    visibility: hidden;
    opacity: 0;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: 0.2s ease-in-out;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.85);
  }

  .__dialog-root.__visible {
    visibility: visible;
    opacity: 1;
  }

  .__dialog-content-outer {
    display: inline-block;
    min-width: 320px;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }

  .__dialog-content-inner {
  }

  .__dialog-root.__fullscreen > .__dialog-content-outer {
    min-height: 100%;
    min-width: 100%;
  }
</style>
