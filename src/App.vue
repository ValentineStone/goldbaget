<template>
  <v-app dark>

    <CalculateAndOrderForm :visible.sync="orderFormShown"/>

    <BasicDialog :visible.sync="questionFormShown">
      <v-form>
        <v-text-field multi-line label="Ваш вопрос"/>
        <v-text-field label="Фамилия"/>
        <v-text-field label="Имя"/>
        <v-text-field label="Телефон"/>
        <v-text-field label="Email"/>
        <ActionCancelBtn
          :disabled="!privacyAgreement"
          @cancel="questionFormShown = false"
          action="Задать вопрос"
        />
        <PrivacyAgreement v-model="privacyAgreement"/>
      </v-form>
    </BasicDialog>


    <div v-cover="'/static/img/welcome-underlay.jpg'" style="padding-top: 4rem; padding-bottom: 3rem;">

      <header :style="`
        display: flex;
        padding: .5rem;
        background: rgba(0,0,0, .5);
        position: ${ $vuetify.breakpoint.xs ? 'absolute' : 'fixed' };
        top: 0;
        width: 100%;
        z-index: 2;
      `">
        <div :style="`
          flex: 1;
          font-size: 3rem;
          font-family: 'Copyright House Industries';
          line-height: .9;
          padding-top: .1em;
          text-align: ${ $vuetify.breakpoint.xs ? 'center' : 'unset' };
          white-space: nowrap;
        `">
          Золотой Квадрат
        </div>
        <div
          v-if="!$vuetify.breakpoint.xs"
          style="text-align: right;"
        >
          г. Магнитогорск, ул. Ленинградская 33<br>
          +7 (3519) 49-58-52
        </div>
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



      <section v-section="960" :style="`
        display: flex;
        flex-direction: ${ $vuetify.breakpoint.smAndDown ? 'column-reverse' : 'row' };
        justify-content: center;
        align-items: center;
      `">
        <ul class="tick-list" :style="`
          flex: 1;
          list-style: none;
          font-size: ${ $vuetify.breakpoint.xs ? '1.5rem' : '1.9rem' };
          font-weight: 100;
          padding: 1rem 1rem 0 2rem;
          text-shadow: 0 0 .25em black; 
        `">
          <li>Бережное обратимое оформление</li>
          <li>Срок изготовления заказа - 3 дня</li>
          <li>Гарантия - 12 месяцев</li>
          <li>Доставка по Росии БЕСПЛАТНО при заказе от 2000 руб.</li>
        </ul>
        <YouTube
          v="Wcgx_Ygi4fw"
          :width="$vuetify.breakpoint.smAndDown ? $vuetify.breakpoint.width - 60 : 460"
          cover="/static/img/video-frame.jpg"
        />
      </section>

      <v-btn
        :ripple="false"
        large round block
        color="primary"
        style="max-width: 300px; margin: 1rem auto;"
        @click="orderFormShown = true"
      >
        <div>Заказать Оформление</div>
      </v-btn>

    </div>
    <div v-underlying v-cover="'/static/img/first-background.jpg'">

    <section v-section="960">
      <div style="
        font-size: 3rem;
        line-height: 1em;
        text-align: center;
        margin: .5rem 2rem 2rem 2rem;
      ">
        Примеры оформления
      </div>
      <v-tabs fixed-tabs>
        <v-tab key="0">Эконом</v-tab>
        <v-tab key="1">Стандарт</v-tab>
        <v-tab key="2">Премиум</v-tab>
        <v-tabs-items touchless>
          <v-tab-item key="0" lazy>
            <gallery src="/static/img/featured/economy" />
          </v-tab-item>
          <v-tab-item key="1" lazy>
            <gallery src="/static/img/featured/standart" />
          </v-tab-item>
          <v-tab-item key="2" lazy>
            <gallery src="/static/img/featured/premium" />
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </section>

  </div>
  <div v-underlying v-cover="'/static/img/second-background.jpg'">

    <section v-section="960" style="margin-bottom: 2rem;">
      <FAQ/>
    </section>

    <section v-section="960" :class="['video-section', $vuetify.breakpoint.xs ? '__xs' : '']" :style="`
      display: flex;
      flex-direction: ${ $vuetify.breakpoint.smAndDown ? 'column' : 'row' };
      justify-content: center;
      align-items: flex-start;
      text-align: ${ $vuetify.breakpoint.smAndDown ? 'center' : 'left' };
    `">
      <div>
        <YouTube v="_Zhr0K7M-w0" cover="/static/img/packingBefore.jpg" :width="$vuetify.breakpoint.smAndDown ? $vuetify.breakpoint.width - 60 : 460" />
        <!--Как мы подбираем оформление вышивки-->
      </div>
      <div>
        <YouTube v="r3FzxgwNUco" cover="/static/img/packingAfter.jpg" :width="$vuetify.breakpoint.smAndDown ? $vuetify.breakpoint.width - 60 : 460" />
        <!--Как мы упаковываем готовое изделие для отправки-->
      </div>
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

    <section v-section="960" ref="mapsSection" style="margin-top: 2rem; position: relative; min-height: 50px;">
      <div style="width: 100%; position: absolute;">
          <v-progress-circular indeterminate :size="50" style="display: block; margin: 0 auto;"/>
      </div>
    </section>

    <section v-section="960" v-flexbox style="margin: 2rem 0;">
      <Social type="vk" href="https://vk.com/create_portrait" />
      <Social type="facebook" href="https://www.facebook.com/createportrait" />
      <Social type="youtube" href="https://www.youtube.com/channel/UCPtgmnVt4hFlrGQ7MlJymKw" />
    </section>
  </div>
    
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        orderFormShown: false,
        questionFormShown: false,
        privacyAgreement: true,
        mapScrolledIntoViewOnce: false,
        onScrollListenerFunction: () => this.onScroll()
      }
    },
    mounted() {
      window.addEventListener('scroll', this.onScrollListenerFunction, { passive: true })
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

  /*
      .video-section > div > iframe {
        margin: 0 auto 0.5em auto;
        display: block;
      }
    */
  .tabs__bar {
    background: transparent !important;
  }

  .overlay:before {
    background-color: black;
  }

  .overlay--active:before {
    opacity: 0.8;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
</style>

