<template>
  <div>
    <BasicDialog :visible="visible" @update:visible="v => $emit('update:visible', v)">
      <v-form ref="form">
        
        <v-text-field
          label="Длина, см."
          type="number"
          v-model="form.height"
        />
        <v-text-field
          label="Ширина, см."
          type="number"
          v-model="form.width"
        />
        
        <v-radio-group v-model="form.variant">
          <v-radio
            color="primary"
            v-for="variant in variants"
            :key="variant.type"
            :label="variant.name"
            :value="variant"
          ></v-radio>
        </v-radio-group>

        <div class="text-xs-center">
          Предварительная стоимость
          <h1 v-text="form.pricePreview ? form.pricePreview + ' руб' : '...'" />
        </div>

        <div
          v-if="form.variant"
          v-text="form.variant.details"
          style="text-align: center; margin-bottom: 1rem;"
        />

        <!--
        <v-text-field
          color="primary"
          disabled
          label="Предварительная стоимость, руб."
          v-model="form.pricePreview"
          class="text-xs-center"
        />
        -->
        
        <template v-if="calculationResult">
          <v-text-field
            label="Фамилия"
            v-model="form.surname"
            :rules="[v => !!v || 'Введите фамилию']"
          />
          <v-text-field
            label="Имя"
            v-model="form.name"
            :rules="[v => !!v || 'Введите имя']"
          />
          <v-text-field
            label="Телефон"
            v-model="form.phone"
            :rules="[v => !!(form.phone || form.email) || 'Ввведите телефон или email']"
          />
          <v-text-field
            label="Email"
            v-model="form.email"
            :rules="[v => !!(form.phone || form.email) || 'Ввведите телефон или email']"
          />
          <ReCaptcha
            ref="reCaptcha"
            :class="{
              __ReCaptcha: true,
              __error: form.recaptcha === undefined
            }"
            sitekey="6Le0j0AUAAAAANFtSH6Frjlr4YTtD56EWAY5tiRH"
            @verify="v => form.recaptcha = v"
            @expired="form.recaptcha = undefined"
            theme="dark"
          />
          <ActionPrivacyBtn
            action="Заказать Оформление"
            @action="onSubmitClick"
            :loading="submitstate === 'during'"
          />
        </template>

      </v-form>
    </BasicDialog>
    <SubmitNotification ref="submitNotification" />
  </div>
</template>

<script>
  import calculus from '@/calculus'
  export default {
    props: ['visible'],
    data() {
      return {
        form: {
          recaptcha: null,
          pricePreview: null,
          variant: null
        },
        variants: [{
          type: 'economy',
          name: 'Эконом',
          details: 'Багет: ширина от 20мм, цена от 150 руб, простое стекло'
        }, {
          type: 'standart',
          name: 'Стандарт',
          details: 'Багет: ширина от 25 мм, цена от 245 руб, простое стекло, двойное паспарту шириной 55 мм'
        }, {
          type: 'premium',
          name: 'Премиум',
          details: 'Багет: ширина от 30 мм, цена от 350 руб, стекло антиблик, двойное паспарту шириной 55 мм'
        }, {
          type: 'luxury',
          name: 'Люкс',
          details: 'Багет: ширина от 50 мм, цена от 650 руб, двойное паспарту 75 мм, музейное стекло'
        }],
        submitstate: 'before'
      }
    },
    computed: {
      calculationResult() {
        if (this.form.width && this.form.height && this.form.variant) {
          this.form.pricePreview = calculus(this.form.variant.type, {
            workWidth: this.form.width / 100,
            workHeight: this.form.height / 100
          }).toFixed(2)
          return this.form.pricePreview
        }
        else
          this.form.pricePreview = undefined
      }
    },
    methods: {
      onSubmitClick() {
        let validReCaptcha = this.validateReCaptcha()
        if (this.$refs.form.validate() && validReCaptcha)
          this.submit()
      },
      submit() {
        this.submitstate = 'during'
        firestore
          .collection('goldBagetRuOrders')
          .add(this.form)
          .then(() => this.submitstate = 'success')
          .catch(() => this.submitstate = 'error')
          .then(() => {
            this.$refs.submitNotification.show(this.submitstate)
            this.form = {
              recaptcha: this.form.recaptcha,
              pricePreview: null,
              variant: null
            }
            this.$emit('update:visible', false)
          })
      },
      validateReCaptcha() {
        if (this.form.recaptcha)
          return true
        else
          this.form.recaptcha = undefined
      }
    }
  }
</script>