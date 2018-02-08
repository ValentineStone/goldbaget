<template>
  <BasicDialog :visible="visible" @update:visible="v => $emit('update:visible', v)">
    <v-form ref="form">
      
      <v-text-field
        label="Длина"
        suffix="см."
        type="number"
        v-model="form.height"
      />
      <v-text-field
        label="Ширина"
        suffix="см."
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

      <v-text-field
        color="primary"
        disabled
        suffix="руб."
        label="Предварительная стоимость"
        v-model="form.pricePreview"
        class="text-xs-center"
      />
      
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
        <ActionCancelPrivacyBtn
          action="Заказать Оформление"
          @cancel="$emit('update:visible', false)"
          @action="submit"
        />
      </template>

    </v-form>
  </BasicDialog>
</template>

<script>
  export default {
    props: ['visible'],
    data() {
      return {
        form: {
          pricePreview: undefined
        },
        variants: [{
          type: 'economy',
          name: 'Эконом',
          factor: .9
        },{
          type: 'standart',
          name: 'Стандарт',
          factor: 1
        },{
          type: 'premium',
          name: 'Премиум',
          factor: 1.1
        }]
      }
    },
    computed: {
      calculationResult() {
        if (this.form.width && this.form.height && this.form.variant) {
          this.form.pricePreview = (this.form.width * this.form.height * this.form.variant.factor).toFixed(2)
          return this.form.pricePreview
        }
        else
          this.form.pricePreview = undefined
      }
    },
    methods: {
      submit() {
        if (this.$refs.form.validate())
          console.log('submit: ', JSON.stringify(this.form, null, 2))
        else
          console.log('submit: /invalid/')
      }
    }
  }
</script>