<template>
  <div>
    <BasicDialog :visible="visible" @update:visible="v => $emit('update:visible', v)">
      <v-form ref="form">
        
        <v-text-field
          multi-line
          label="Ваш вопрос"
          v-model="form.question"
          :rules="[v => !!v || 'Введите вопрос']"
        />

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
          sitekey="6LdH4kUUAAAAAPdaf8bcskirKyyojGyWwPtyY_6B"
          @verify="v => form.recaptcha = v"
          @expired="form.recaptcha = undefined"
          theme="dark"
        />
        <ActionPrivacyBtn
          action="Задать Вопрос"
          @action="onSubmitClick"
          :loading="submitstate === 'during'"
        />
      </v-form>
    </BasicDialog>
    <SubmitNotification ref="submitNotification" />
  </div>
</template>

<script>
  export default {
    props: ['visible'],
    data() {
      return {
        form: {
          recaptcha: null
        },
        submitstate: 'before'
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
          .collection('goldBagetRuQuestions')
          .add(this.form)
          .then(() => this.submitstate = 'success')
          .catch(() => this.submitstate = 'error')
          .then(() => {
            this.$refs.submitNotification.show(this.submitstate)
            this.form = { recaptcha: this.form.recaptcha }
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