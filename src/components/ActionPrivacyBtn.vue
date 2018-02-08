<template>
  <div>
    <ActionCancelBtn
      :disabled="!privacyAgreement"
      v-bind="$attrs"
      @action="$emit('action')"
      @cancel="$emit('cancel')"
      :action="action"
    >
    </ActionCancelBtn>
    <v-btn block round large color="primary" v-bind="$attrs" @click="$emit('action')">
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