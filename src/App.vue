<template>
  <v-app dark style="overflow: hidden;">

    <CalculateAndOrderForm :visible.sync="orderFormShown"/>

    <AskQuestionForm :visible.sync="questionFormShown" />

    <div v-cover="'/static/img/welcome-underlay.jpg'" style="padding-top: 4rem; padding-bottom: 3rem;">

      <header :style="`
        padding: .5rem;
        background: rgba(0,0,0, .5);
        position: ${ $vuetify.breakpoint.xs ? 'absolute' : 'fixed' };
        top: 0;
        width: 100%;
        z-index: 2;
      `">
        <div
          v-if="!$vuetify.breakpoint.xs"
          style="
            position: absolute;
            right: .5em;
            text-align: right;
            line-height: 1em;
          "
        >
          <small>г. Магнитогорск, ул. Ленинградская 33</small><br>
          <strong style="font-size: 1.5em; line-height: 1.2em;">+7 (3519) 49-58-52</strong>
        </div>
        <a
          :style="`
            width: 100%;
            font-size: 3rem;
            font-family: 'Copyright House Industries';
            line-height: .9;
            padding-top: .1em;
            text-align: ${ $vuetify.breakpoint.xs ? 'center' : 'unset' };
            white-space: nowrap;
            color: white;
            text-decoration: none;
            display: block;
          `"
          href="#contacts"
        >
          Золотой Квадрат
        </a>
      </header>


      <section v-section="1220" style="
        text-align: center;
        font-family: 'Copyright House Industries';
        text-shadow: 0 0 1em rgba(0,0,0,.6); 
      ">
        <div :style="`
          font-size: ${ $vuetify.breakpoint.xs ? '7rem' : '13rem' };
          line-height: .7;
          margin: .15em 0 .2em 0;
        `">
          Оформи вышивку
        </div>
        <div :style="`
          font-size: ${ $vuetify.breakpoint.xs ? '3rem' : '6rem' };
          line-height: 1;
        `">
          В одной из лучших <br v-if="$vuetify.breakpoint.xs">
          мастерскиих<br>
          не выходя из дома!
        </div>
      </section>



      <section v-section="960" :style="`overflow: hidden;`">
        <YouTube
          :style="`
            display: block;
            margin: 0 auto;
            float: ${$vuetify.breakpoint.smAndDown ? 'none' : 'right'};
          `"
          v="Wcgx_Ygi4fw"
          :width="videoHalfWidth"
        />
        <ul class="tick-list" :style="`
          list-style: none;
          font-size: ${ $vuetify.breakpoint.xs ? '1.5rem' : '1.9rem' };
          font-weight: 100;
          padding: 1rem 1rem 0 2rem;
          text-shadow: 0 0 .25em black;
          margin: 0 auto;
          display: ${$vuetify.breakpoint.smAndDown ? 'block' : 'inline-block'};
          max-width: ${$vuetify.breakpoint.smAndDown ? 'max-content' : '50%'};
        `">
          <li>Бережное обратимое оформление</li>
          <li>Срок изготовления заказа - 5 дней</li>
          <li>Гарантия - 12 месяцев</li>
          <li>Доставка по России БЕСПЛАТНО при заказе от 2000 руб.</li>
        </ul>
      </section>

      <v-btn
        :ripple="false"
        large round block
        color="primary"
        style="max-width: 300px; margin: 1rem auto;"
        @click="orderFormShown = true"
      >
        <div>Рассчитать Оформление</div>
      </v-btn>

    </div>
    <div v-underlying v-cover="'/static/img/first-background.jpg'">

    <section v-section="960">

      <div id="work-examples" style="
        font-size: 3rem;
        line-height: 1em;
        text-align: center;
        margin: .5rem 2rem 2rem 2rem;
      ">
        Примеры оформления
      </div>

      <v-tabs value="1">
        <v-tab key="economy">Эконом</v-tab>
        <v-tab key="standart">Стандарт</v-tab>
        <v-tab key="premium">Премиум</v-tab>
        <v-tabs-items touchless style="margin-top: 2rem;">
          <v-tab-item key="economy">
            <StaticGallery :model="economyGallery" />
          </v-tab-item>
          <v-tab-item key="standart">
            <StaticGallery :model="standartGallery" />
          </v-tab-item>
          <v-tab-item key="premium">
            <StaticGallery :model="premiumGallery" />
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>

    </section>

  </div>
  <div v-underlying v-cover="'/static/img/second-background.jpg'">

    <section v-section="960" style="margin-bottom: 2rem;">
      <FAQ/>
    </section>

    <!--
      :class="['video-section', $vuetify.breakpoint.xs ? '__xs' : '']"
      :style="`text-align: ${ $vuetify.breakpoint.smAndDown ? 'center' : 'left' };`"
    -->
    <section v-section="960" class="block-list">
      <YouTube v="_Zhr0K7M-w0" :width="videoHalfWidth" />
      <YouTube v="r3FzxgwNUco" :width="videoHalfWidth" />
    </section>

    <section v-section="960">
      <v-btn
        :ripple="false"
        large round block
        color="primary"
        style="max-width: 300px; margin: 0 auto;"
        @click="questionFormShown = true"
      >
        Остались вопросы?
      </v-btn>
    </section>

    
    <a
      id="video"
      href="https://www.youtube.com/channel/UCPtgmnVt4hFlrGQ7MlJymKw"
      style="
        display: block;
        font-size: 3rem;
        line-height: 1em;
        text-align: center;
        margin: 2rem;
        margin-top: 5rem;
        color: white;
        text-decoration: none;
      "
    >
      Наш канал на <img src="/static/img/yt_logo_rgb_dark.png" style="height: 1em; position: relative; top: 3px;" >
    </a>
    
    <section v-section="960" class="block-list">
      <YouTube v="7b_gPkNcSJ4" :width="videoHalfWidth" cover="/static/img/featured-video-1-cover.jpg" />
      <YouTube v="Ve7X5g-p2Aw" :width="videoHalfWidth" />
      <YouTube v="PHj6zKL_xZA" :width="videoHalfWidth" />
      <YouTube v="pVTn_UmfB_0" :width="videoHalfWidth" />
    </section>



    <div id="contacts" style="
      font-size: 3rem;
      line-height: 1em;
      text-align: center;
      margin: .5rem 2rem 2rem 2rem;
    ">
      Наши координаты
    </div>
    <div style="
      font-size: 1.2rem;
      text-align: center;
      margin: 2rem;
    ">
      455000, Россия, Челябинская обл., г. Магнитогорск, ул. Ленинградская, д. 33<br>
      для Романовской Юлии Анатольевны<br>
      magbaget@gmail.com
    </div>
    
    <section v-section="960" ref="mapsSection" style="margin-top: 2rem; position: relative; height: 320px; overflow: hidden;" class="legacy-center-parent maps-section">
    </section>

    <section v-section="960" style="margin: 2rem 0; text-align: center;">
      <Social type="vk" href="https://vk.com/create_portrait" />
      <Social type="facebook" href="https://www.facebook.com/createportrait" />
      <Social type="youtube" href="https://www.youtube.com/channel/UCPtgmnVt4hFlrGQ7MlJymKw" />
    </section>
  </div>
    
  </v-app>
</template>

<script>
  import economyGallery from '@/galleries/economy'
  import standartGallery from '@/galleries/standart'
  import premiumGallery from '@/galleries/premium'

  export default {
    data() {
      return {
        economyGallery,
        standartGallery,
        premiumGallery,
        orderFormShown: location.hash === '#order-calulator',
        questionFormShown: false,
        privacyAgreement: true,
        mapScrolledIntoViewOnce: false,
        onScrollListenerFunction: () => this.onScroll()
      }
    },
    mounted() {
      window.addEventListener('scroll', this.onScrollListenerFunction, { passive: true })
    },
    computed: {
      videoHalfWidth() {
        return this.$vuetify.breakpoint.smAndDown ? this.$vuetify.breakpoint.width - 60 : 450
      }
    },
    methods: {
      isInView(el, buffer = 0) {
        let rect = el.getBoundingClientRect()
        return (
          rect.top <= window.innerHeight + buffer
          && rect.bottom >= 0 - buffer
          && rect.left <= window.innerWidth + buffer
          && rect.right >= 0 - buffer
        )
      },
      onScroll(v) {
        if (!this.mapScrolledIntoViewOnce && this.isInView(this.$refs.mapsSection, 300)) {
          this.mapScrolledIntoViewOnce = true
          window.removeEventListener('scroll', this.onScrollListenerFunction)
          this.bindMap(this.$refs.mapsSection)
        }
      },
      bindMap(target) {
        let el = document.createElement('script')
        el.setAttribute('type', 'text/javascript')
        el.setAttribute('charset', 'utf-8')
        el.setAttribute('async', true)
        el.setAttribute('src', 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9dbc01c36bda756fa26ba9c14b50802f2156286e41db50e296b42d2919dab230&amp;width=100%25&amp;height=320&amp;lang=ru_RU&amp;scroll=true')
        target.appendChild(el)
      }
    }
  }
</script>

<style>
  @font-face {
    font-family: "Copyright House Industries";
    src: url(/static/fonts/Copyright_House_Industries.ttf);
  }

  * {
    box-sizing: border-box;
  }

  .tick-list > li {
    position: relative;
    margin-bottom: 0.5rem;
  }

  .tick-list > li::before {
    font-family: "Material Icons";
    content: "\e876";
    position: absolute;
    left: -1.2em;
  }

  .theme--dark .background {
    background-color: rgb(48, 48, 48);
  }

  .video-section > div {
    margin: 0.5rem;
    font-size: 2rem;
    line-height: 1em;
    margin-bottom: 1em;
  }

  .__xs.video-section > div {
    font-size: 1.5rem;
  }

  .tabs__bar {
    background: transparent !important;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }

  .legacy-center-parent {
    position: relative !important;
  }

  .legacy-center-parent > * {
    position: absolute !important;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }



  .block-list {
    text-align: center;
  }

  .block-list > * {
    display: inline-block;
    margin: .5em;
  }


  .__ReCaptcha {
    margin-left: -.5em;
  }

  .__ReCaptcha > * {
    box-sizing: content-box;
    margin: 18px auto 26px auto;
    border-style: solid;
    border-color: transparent;
    border-width: 2px 1px 1px 2px;
  }

  .__ReCaptcha.__error > * {
    border-radius: 3px;
    border-color: #ff5252;
    background: #ff5252;
  }







  .json-tree.json-tree-root {
    min-width: unset !important;
  }


  /* Vuetify hotfixes */

  .dialog__content__active {
    background: rgba(0,0,0,0.8);
  }

  .overlay {
    width: 100%;
    height: 100%;
  }

  .overlay:before {
    display: none;
  }

  .overlay.overlay--active {
    background: none;
  }

  .expansion-panel.__faq-ul {
    display: block !important;
  }

  .expansion-panel__header {
    display: block !important;
  }

  .header__icon {
    display: none !important;
  }

  .input-group,
  .input-group__input,
  .input-group__details {
    display: block !important;
  }

  .input-group__input > textarea {
    width: 100% !important;
    height: 100% !important;
  }

  .input-group__input {
    width: 100% !important;
  }

  .input-group.input-group--selection-controls.radio.primary--text {
    display: block !important;
  }

  .tabs__wrapper,
  .tabs__container {
    display: block !important;
    text-align: center !important;
  }

  .tabs__div {
    width: 33% !important;
    max-width: 160px !important;
    display: inline-block !important;
  }



  .maps-section {
    background: url(/static/img/map-static.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

</style>

