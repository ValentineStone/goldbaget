<template>
  <div class="legacy-center-parent" :style="`
    overflow: none;
    display: inline-block;
    width: ${widthComputed}px;
    height: ${heightComputed}px;
  `">
    <div
      v-if="loaded"
      class="legacy-center-parent"
      style="
        height: 100%;
        width: 100%;
      "
    >
      <v-progress-circular indeterminate :size="50"/>
    </div>
    <div
      ref="cover"
      v-if="cover && coverVisible"
      @click="onClickCover"
      class="legacy-center-parent"
    >
      <img
        :src="coverComputed"
        :style="`
          width: ${widthComputed+2}px;
          height: ${heightComputed+2}px;
        `"
      >
      <img src="/static/img/youtube-button.svg" style="width: 90px;">
    </div>
    <iframe
      v-if="loaded"
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
      cover: { default: true },
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
        loaded: this.preload,
        coverVisible: !!this.cover,
        playQueued: false
      }
    },
    updated() {
      if (this.playQueued) {
        this.playQueued = false
        setTimeout(() => this.play(), 1000)
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
      },
      coverComputed() {
        return this.cover !== true ? this.cover : `https://img.youtube.com/vi/${this.v}/${'maxres'}default.jpg`
      }
    },
    methods: {
      onClickCover() {
        if (!this.loaded) {
          this.loaded = true
        }
        this.coverVisible = false
        this.playQueued = true
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