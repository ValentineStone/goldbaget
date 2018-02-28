<template>
  <div>
    <v-btn
      block round large
      color="primary"
      :disabled="!privacyAgreement"
      v-bind="$attrs"
      @click="$emit('action')"
    >
      {{action}}
    </v-btn>
    <PrivacyAgreement
      v-model="privacyAgreement"
      :for="action"
    />
  </div>
</template>

<script>
  export default {
    props: ['action'],
    data() {
      return {
        privacyAgreement: true
      }
    }
  }
</script>
