import 'babel-polyfill'
import promise from 'es6-promise'
promise.polyfill()
import 'isomorphic-fetch'

import Vue from 'vue'
import App from './App'

import 'vuetify/src/stylus/app.styl'
import {
  Vuetify,
  VApp, 
  VTabs,
  VExpansionPanel,
  VForm,
  VTextField,
  VDialog,
  VBtn,
  VIcon,
  VProgressCircular,
} from 'vuetify'
import * as VCard from 'vuetify/es5/components/VCard'
import * as VRadioGroup from 'vuetify/es5/components/VRadioGroup'
Vue.use(Vuetify, {
  components: {
    VApp,
    Vuetify,
    VTabs,
    VExpansionPanel,
    VForm,
    VTextField,
    VDialog,
    VBtn,
    VIcon,
    VProgressCircular,
    ...VCard,
    ...VRadioGroup
  },
  theme: {
    primary: '#FF5252',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

import VJsonTree from 'vue-json-tree'
Vue.component('v-json-tree', VJsonTree)

import AsyncComputed from 'vue-async-computed'
Vue.use(AsyncComputed)

import VueImg from 'v-img';
Vue.use(VueImg);

Vue.directive('flex', function (el, binding) {
  if (binding.expression) {
    el.style.flex = binding.value
    el.style.display = binding.arg
  }
  else
    el.style.display = 'flex'
})

Vue.directive('flexbox', function (el, binding) {
  if (binding.expression) {
    el.style.flex = binding.value
    el.style.display = binding.arg
  }
  else {
    el.style.display = 'flex'
    el.style.justifyContent = 'center'
    el.style.alignItems = 'center'
  }
})


Vue.directive('section', function (el, binding) {
  el.style.maxWidth = binding.value + 'px'
  el.style.width = '100%'
  el.style.marginRight = 'auto'
  el.style.marginLeft = 'auto'
  el.style.padding = '.5rem'
})

Vue.directive('center', function (el, binding) {
  el.style.maxWidth = binding.value
  el.style.width = '100%'
  el.style.margin = '0 auto'
})

Vue.directive('cover', function (el, binding) {
  el.style.backgroundSize = 'cover'
  el.style.backgroundImage = `url(${binding.value})`
})

Vue.directive('underlying', function (el, binding) {
  el.style.borderTop = '.2rem solid #FF5252'
  el.style.padding = '2rem 0'
})


import {
  ActionCancelBtn,
  AskQuestionForm,
  CalculateAndOrderForm,
  FAQ,
  BasicDialog,
  Gallery,
  PrivacyAgreement,
  Social,
  VImg,
  YouTube,
  ActionCancelPrivacyBtn
} from '@/components'

Vue.component('ActionCancelBtn', ActionCancelBtn)
Vue.component('AskQuestionForm', AskQuestionForm)
Vue.component('CalculateAndOrderForm', CalculateAndOrderForm)
Vue.component('FAQ', FAQ)
Vue.component('BasicDialog', BasicDialog)
Vue.component('Gallery', Gallery)
Vue.component('PrivacyAgreement', PrivacyAgreement)
Vue.component('Social', Social)
Vue.component('VImg', VImg)
Vue.component('YouTube', YouTube)
Vue.component('ActionCancelPrivacyBtn', ActionCancelPrivacyBtn)






Vue.prototype.$console = console

Vue.config.productionTip = false

/* eslint-disable no-new */
if (process.env.NODE_ENV === 'development' || location.search === '?beta')
  new Vue({
    el: '#app',
    render: h => h(App)
  })
