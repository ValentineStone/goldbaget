<template>
  <div :style="`
    position: relative;
    overflow: none;
    display: inline-block;
    width: ${widthComputed}px;
    height: ${heightComputed}px;
  `">
    <div style="
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      height: 100%;
      width: 100%;
    ">
      <v-progress-circular indeterminate :size="50"/>
    </div>
    <img
      ref="cover"
      v-if="cover"
      :src="cover"
      @click="onClickCover"
      :style="`
        width: ${widthComputed+2}px;
        height: ${heightComputed+2}px;
        position: absolute;
        top: -1px;
        left: -1px;
      `"
    >
    <iframe
      v-if="loaded"
      style="position: absolute;"
      ref="videoiframe"
      :width="widthComputed"
      :height="heightComputed"
      :src="srcComputed"
      frameborder="0"
      gesture="media"
      allow="encrypted-media"
      :allowfullscreen="allowfullscreen"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
  export default {
    props: {
      v: { default: undefined },
      cover: { default: null },
      width: { default: null },
      height: { default: 315 },
      ratio: { default: 16 / 9 },
      allowfullscreen: { default: true },
      suggested: { default: false },
      controls: { default: true },
      info: { default: false },
      privacyEnhanced: { default: false },
      preload: { default: false },
    },
    data() {
      return {
        loaded: this.preload
      }
    },
    computed: {
      srcComputed() {
        return 'https://www.youtube'
          + (this.privacyEnhanced ? '-nocookie.' : '')
          + '.com/embed/'
          + this.v
          + '?enablejsapi=1'
          + (this.suggested ? '' : '&rel=0')
          + (this.controls ? '' : '&controls=0')
          + (this.info ? '' : '&showinfo=0')
      },
      widthComputed() {
        if (this.width)
          return this.width
        else
          return this.height * this.ratio

      },
      heightComputed() {
        if (this.width)
          return this.width / this.ratio
        else
          return this.height
      }
    },
    methods: {
      onClickCover() {
        if (!this.loaded) {
          this.loaded = true
        }
        this.$refs.cover.style.display = 'none'
        this.play()
      },
      pause() {
        this.$refs.videoiframe.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}', '*'
        );
      },
      play() {
        this.$refs.videoiframe.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}', '*'
        );
      }
    }
  }
</script>