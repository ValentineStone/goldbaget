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